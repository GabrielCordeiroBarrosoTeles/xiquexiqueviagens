import { ExternalLink } from "lucide-react";
import { LinkButton } from "@/components/ui/link-button";
import { SectionHeader } from "@/components/SectionHeader";
import { instagramShortcodes } from "@/lib/mock-data";
import type { InstagramShortcodeEntry } from "@/lib/mock-data";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

const buildInstagramEmbedSrc = (entry: InstagramShortcodeEntry): string => {
  const path: "p" | "reel" = entry.tipo === "reel" ? "reel" : "p";
  return `https://www.instagram.com/${path}/${entry.shortcode}/embed/`;
};

// ID do widget em lightwidget.com — se setado, o feed atualiza sozinho (puxa direto do perfil).
const LIGHTWIDGET_ID = process.env.NEXT_PUBLIC_LIGHTWIDGET_ID ?? "";

function LightWidgetFeed() {
  return (
    <iframe
      src={`https://cdn.lightwidget.com/widgets/${LIGHTWIDGET_ID}.html`}
      title="Feed do Instagram @xiquexiqueviagens"
      className="block w-full border-0"
      style={{ height: "clamp(420px, 70vh, 780px)" }}
      scrolling="no"
      loading="lazy"
      allowTransparency
    />
  );
}

function InstagramEmbedGrid() {
  return (
    <div className="grid w-full min-w-0 grid-cols-1 gap-3 p-3 sm:grid-cols-2 sm:gap-4 sm:p-4 md:p-5 lg:grid-cols-3 lg:gap-5 lg:p-6">
      {instagramShortcodes.map((entry: InstagramShortcodeEntry, index: number) => (
        <div
          key={`${entry.shortcode}-${index}`}
          className="flex w-full min-w-0 flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm sm:rounded-2xl"
        >
          <iframe
            src={buildInstagramEmbedSrc(entry)}
            title={`Publicação @xiquexiqueviagens (${entry.shortcode})`}
            className="block w-full border-0"
            style={{ height: "min(640px, calc(100dvh - 8rem))", minHeight: "520px" }}
            loading={index < 2 ? "eager" : "lazy"}
            allow="clipboard-write; encrypted-media; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      ))}
    </div>
  );
}

export default function InstagramFeed() {
  const profileUrl: string = "https://www.instagram.com/xiquexiqueviagens/";
  const useLightWidget: boolean = LIGHTWIDGET_ID.length > 0;
  const hasShortcodes: boolean = instagramShortcodes.length > 0;
  const showFallback: boolean = !useLightWidget && !hasShortcodes;

  return (
    <section id="instagram" className="py-16 sm:py-20 bg-background">
      <div className="mx-auto min-w-0 max-w-6xl px-3 sm:px-4">
        <SectionHeader
          eyebrow="Nosso dia a dia"
          title="No Instagram"
          description={
            useLightWidget
              ? "Últimas publicações do @xiquexiqueviagens, direto do Instagram."
              : "Viagens, bastidores e histórias no @xiquexiqueviagens."
          }
          eyebrowColor="text-pink-600"
        />

        <div className="min-w-0 overflow-hidden rounded-2xl border border-border bg-card shadow-sm sm:rounded-3xl">
          {useLightWidget && <LightWidgetFeed />}
          {!useLightWidget && hasShortcodes && <InstagramEmbedGrid />}
          {showFallback && <InstagramFallback profileUrl={profileUrl} />}
        </div>

        <div className="mt-8 text-center">
          <LinkButton
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="lg"
            className="h-11 gap-2 rounded-full"
          >
            <InstagramIcon size={16} />
            Ver mais no Instagram
            <ExternalLink size={14} aria-hidden />
          </LinkButton>
        </div>
      </div>
    </section>
  );
}

function InstagramFallback({ profileUrl }: { profileUrl: string }) {
  return (
    <div className="bg-gradient-to-br from-pink-50 via-orange-50 to-cyan-50 p-10 text-center">
      <div className="mb-4 inline-flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 via-red-500 to-orange-500 text-white">
        <InstagramIcon size={28} />
      </div>
      <h3 className="mb-2 text-xl font-bold text-foreground">@xiquexiqueviagens</h3>
      <p className="mx-auto mb-5 max-w-md text-sm text-muted-foreground">
        Configure <code className="rounded bg-muted px-1 py-0.5 text-xs">NEXT_PUBLIC_LIGHTWIDGET_ID</code> para
        puxar os posts automaticamente, ou adicione shortcodes em{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs">src/lib/mock-data.ts</code>.
      </p>
      <a
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Abrir perfil no Instagram
        <ExternalLink size={14} aria-hidden />
      </a>
    </div>
  );
}
