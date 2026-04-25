"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { Play, Images, ExternalLink, XIcon } from "lucide-react";
import { Dialog } from "@base-ui/react/dialog";
import { cn, formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { InstagramPost } from "@/types/instagram";

/** Publicações cujo embed do Instagram funciona no modal (prévia oficial). Inclui o 3.º post mock (Dia da Mulher). */
const SHORTCODES_WITH_EMBED_IN_MODAL: ReadonlySet<string> = new Set([
  "DWZJo4yulQA",
  "DWU_neNlUcs",
  "DGxKmNxulQA",
]);

const tipoBadge: Record<InstagramPost["tipo"], React.ReactNode> = {
  video: <Play size={12} className="fill-white" />,
  carrossel: <Images size={12} />,
  imagem: null,
};

function PostEmbedFrame({ shortcode }: { shortcode: string }) {
  return (
    <iframe
      src={`https://www.instagram.com/p/${shortcode}/embed/`}
      className="h-full min-h-[22rem] w-full border-0"
      title="Prévia do post no Instagram"
      loading="lazy"
    />
  );
}

function PostGridPreview({ post }: { post: InstagramPost }) {
  const badge: ReactNode = tipoBadge[post.tipo];
  const captionPreview: string = post.legenda.replace(/\s+/g, " ").trim();
  return (
    <>
      <div className="relative aspect-square w-full shrink-0 overflow-hidden bg-gray-100">
        <Image
          src={post.imagem}
          alt=""
          fill
          unoptimized={post.imagem.includes("cdninstagram.com")}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, 33vw"
        />
        {badge && (
          <span
            className="absolute top-2 right-2 z-10 rounded-sm bg-black/50 px-1.5 py-0.5 text-white drop-shadow-md"
            aria-hidden
          >
            {badge}
          </span>
        )}
      </div>
      <div className="shrink-0 space-y-1.5 border-t border-border/60 bg-white px-2.5 py-2.5 sm:px-3">
        <p className="line-clamp-2 text-left text-xs leading-relaxed text-foreground sm:line-clamp-3 sm:text-sm">
          {captionPreview}
        </p>
        <div className="flex flex-wrap items-center justify-between gap-1.5 text-[0.7rem] text-muted-foreground sm:text-xs">
          <time dateTime={post.data}>{formatDate(post.data)}</time>
          <span className="text-pink-600/90 group-focus-visible:underline sm:hidden">
            Toque para ampliar
          </span>
          <span className="hidden text-pink-600/80 group-hover:underline sm:inline">Clique para ampliar</span>
        </div>
      </div>
    </>
  );
}

function PostModalBody({ post }: { post: InstagramPost }) {
  const canUseEmbed: boolean = SHORTCODES_WITH_EMBED_IN_MODAL.has(post.shortcode);
  if (canUseEmbed) {
    return (
      <div className="max-h-[min(70vh,32rem)] w-full overflow-hidden rounded-b-xl bg-white">
        <PostEmbedFrame shortcode={post.shortcode} />
      </div>
    );
  }
  return (
    <div className="max-h-[min(70vh,32rem)] w-full overflow-y-auto">
      <div className="relative aspect-square w-full bg-gray-100">
        <Image
          src={post.imagem}
          alt=""
          fill
          unoptimized={post.imagem.includes("cdninstagram.com")}
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 32rem"
        />
      </div>
      <div className="space-y-2 p-4">
        <p className="whitespace-pre-line text-sm leading-relaxed text-foreground">
          {post.legenda}
        </p>
        <p className="text-xs text-muted-foreground">{formatDate(post.data)}</p>
      </div>
    </div>
  );
}

const previewTitle = (legenda: string): string => {
  const t: string = legenda.trim().split("\n")[0] ?? "Post do Instagram";
  if (t.length > 80) {
    return `${t.slice(0, 77)}…`;
  }
  return t;
};

/**
 * Card do feed: clique abre modal com prévia; não redireciona para o Instagram diretamente.
 */
export function InstagramPostCard({ post }: { post: InstagramPost }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        type="button"
        className={cn(
          "group flex w-full cursor-pointer flex-col overflow-hidden rounded-xl border border-border/50 bg-white text-left shadow-sm transition-shadow hover:shadow-md",
          "focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 focus-visible:outline-none"
        )}
        aria-label={`Abrir prévia: ${previewTitle(post.legenda)}`}
        aria-haspopup="dialog"
      >
        <PostGridPreview post={post} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop
          className={cn(
            "fixed inset-0 z-50 bg-black/60",
            "transition-opacity duration-150",
            "data-[ending-style]:opacity-0 data-starting-style:opacity-0"
          )}
        />
        <Dialog.Viewport
          className={cn(
            "fixed inset-0 z-50 flex items-end justify-center p-4",
            "sm:items-center sm:p-6",
            "pointer-events-none"
          )}
        >
          <Dialog.Popup
            className={cn(
              "pointer-events-auto flex max-h-[min(90vh,40rem)] w-full max-w-lg flex-col overflow-hidden rounded-2xl bg-background shadow-xl",
              "text-sm text-foreground",
              "transition duration-200 ease-out",
              "data-[ending-style]:scale-95 data-[ending-style]:opacity-0",
              "data-[starting-style]:scale-95 data-[starting-style]:opacity-0"
            )}
          >
            <div className="flex items-start justify-between gap-3 border-b border-border p-4 pr-12">
              <div>
                <Dialog.Title className="font-heading pr-1 text-base font-medium text-foreground">
                  {previewTitle(post.legenda)}
                </Dialog.Title>
                <Dialog.Description className="mt-0.5 text-sm text-muted-foreground">
                  {formatDate(post.data)} · toque no link abaixo para abrir no app ou no site do
                  Instagram
                </Dialog.Description>
              </div>
              <Dialog.Close
                className="absolute top-3 right-3"
                render={
                  <Button variant="ghost" size="icon-sm" type="button" aria-label="Fechar prévia" />
                }
              >
                <XIcon className="size-4" />
              </Dialog.Close>
            </div>
            <PostModalBody post={post} />
            <div className="border-t border-border p-4">
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                <ExternalLink className="size-4" aria-hidden />
                Abrir no Instagram
              </a>
            </div>
          </Dialog.Popup>
        </Dialog.Viewport>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
