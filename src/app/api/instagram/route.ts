import { NextResponse } from "next/server";
import { instagramPostsMock } from "@/lib/mock-data";
import type { InstagramPost, InstagramFeedResponse } from "@/types/instagram";

const INSTAGRAM_API = "https://graph.instagram.com/v21.0";

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!token) {
    const response: InstagramFeedResponse = { posts: instagramPostsMock, source: "mock" };
    return NextResponse.json(response);
  }

  try {
    const res = await fetch(
      `${INSTAGRAM_API}/me/media?fields=id,caption,media_url,media_type,timestamp,permalink&limit=6&access_token=${token}`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) throw new Error("Instagram API error");

    const data = await res.json();

    const posts: InstagramPost[] = data.data.map((item: {
      id: string;
      caption?: string;
      media_url: string;
      media_type: string;
      timestamp: string;
      permalink: string;
    }) => ({
      id: item.id,
      shortcode: item.permalink.split("/p/")[1]?.replace("/", "") ?? item.id,
      imagem: item.media_url,
      legenda: item.caption ?? "",
      curtidas: 0,
      comentarios: 0,
      data: item.timestamp,
      permalink: item.permalink,
      tipo: item.media_type === "VIDEO" ? "video" : item.media_type === "CAROUSEL_ALBUM" ? "carrossel" : "imagem",
    }));

    const response: InstagramFeedResponse = { posts, source: "instagram" };
    return NextResponse.json(response);
  } catch {
    const response: InstagramFeedResponse = { posts: instagramPostsMock, source: "mock" };
    return NextResponse.json(response);
  }
}
