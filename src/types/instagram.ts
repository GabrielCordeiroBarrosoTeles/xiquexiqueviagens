export type InstagramPost = {
  id: string;
  shortcode: string;
  imagem: string;
  legenda: string;
  curtidas: number;
  comentarios: number;
  data: string;
  permalink: string;
  tipo: "imagem" | "video" | "carrossel";
};

export type InstagramFeedResponse = {
  posts: InstagramPost[];
  source: "mock" | "instagram";
};

export type InstagramFeedState = InstagramFeedResponse & {
  loading: boolean;
  error: string | null;
};
