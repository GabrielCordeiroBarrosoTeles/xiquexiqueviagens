"use client";

import { LinkButton } from "@/components/ui/link-button";
import { SectionHeader } from "@/components/SectionHeader";
import { InstagramPostCard } from "@/components/InstagramPostCard";
import { useInstagramPosts } from "@/hooks/useInstagramPosts";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function InstagramFeed() {
  const { posts, loading, source } = useInstagramPosts();

  return (
    <section id="instagram" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          eyebrow="Redes Sociais"
          title="No Instagram"
          eyebrowColor="text-pink-500"
        />

        <div className="flex justify-center mb-8">
          <a
            href="https://www.instagram.com/xiquexiqueviagens/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-pink-500 transition-colors text-sm"
          >
            <InstagramIcon size={14} />
            @xiquexiqueviagens
            {source === "mock" && (
              <span className="ml-2 text-xs text-muted-foreground/60">(prévia)</span>
            )}
          </a>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="overflow-hidden rounded-xl border border-border/40 bg-white shadow-sm">
                <div className="aspect-square bg-gray-100 animate-pulse" />
                <div className="space-y-2 p-2.5">
                  <div className="h-3.5 w-full rounded bg-gray-100 animate-pulse" />
                  <div className="h-3.5 w-4/5 rounded bg-gray-100 animate-pulse" />
                  <div className="h-2.5 w-1/2 rounded bg-gray-100 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
            {posts.map((post) => (
              <InstagramPostCard key={post.id} post={post} />
            ))}
          </div>
        )}

        <div className="text-center mt-8">
        <LinkButton href="https://www.instagram.com/xiquexiqueviagens/" target="_blank" rel="noopener noreferrer" variant="outline" className="rounded-full gap-2">
          <InstagramIcon size={15} />
          Ver mais no Instagram
        </LinkButton>
        </div>
      </div>
    </section>
  );
}
