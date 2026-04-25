# XiqueXique Viagens

Site institucional da XiqueXique Viagens — agência de turismo socioambiental que comercializa viagens parceladas no carnê.

Stack: Next.js 16 (App Router), React 19, Tailwind CSS 4, shadcn/base-ui.

## Rodando localmente

```bash
npm install
npm run dev
```

Abrir <http://localhost:3000>.

## Configuração

### Número de WhatsApp

O número hoje é um **placeholder** (`5500000000000`). Pra trocar pelo real, editar uma constante única em [`src/lib/utils.ts`](src/lib/utils.ts) (`WHATSAPP_NUMERO`). Todos os links e CTAs passam a apontar pra lá automaticamente.

### Feed do Instagram

Dois modos, do mais automático pro mais manual:

**Modo automático (recomendado) — LightWidget**

Puxa os posts do perfil sozinho, sempre atualizado. Gratuito.

1. Criar conta em <https://lightwidget.com>.
2. Criar um widget apontando pra `@xiquexiqueviagens`.
3. Copiar o ID do widget (trecho da URL do embed, tipo `abcd1234ef`).
4. Setar `NEXT_PUBLIC_LIGHTWIDGET_ID` (local em `.env.local` ou na Vercel em Settings → Environment Variables).

**Modo manual — embeds nativos**

Sem configuração: a seção renderiza uma grade de iframes via `instagram.com/p/{shortcode}/embed/`. Pra trocar os posts, edita o array **`instagramShortcodes`** em [`src/lib/mock-data.ts`](src/lib/mock-data.ts) — cada item com `shortcode` e `tipo` (`"p"` ou `"reel"`).

Se os dois estiverem vazios, aparece um fallback com link pro perfil.

### PWA (instalável como app)

O site funciona como Progressive Web App: o usuário pode "Adicionar à tela inicial" no celular e abrir como se fosse um app nativo (tela cheia, ícone próprio).

- No Android/Chrome: menu ⋮ → **Instalar app** / **Adicionar à tela inicial**.
- No iOS/Safari: botão compartilhar → **Adicionar à Tela de Início**.

Os ícones do PWA são gerados a partir de `public/logo.png` (150x150, upscale pra 192/512). Pra qualidade melhor, substitua `public/icon-192.png` e `public/icon-512.png` por versões em alta resolução (PNG quadrado, fundo transparente ou sólido).

> Obs.: não tem service worker ainda, então o app não funciona offline. Pra adicionar isso, integrar [@serwist/next](https://serwist.pages.dev/) — fora do escopo atual.

## Deploy na Vercel

Zero configuração necessária. Não há env vars obrigatórias.

1. Criar repositório no GitHub e dar push:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<seu-usuario>/<repo>.git
   git push -u origin main
   ```
2. Acessar <https://vercel.com/new> e importar o repositório.
3. Framework detectado automaticamente como Next.js. Clicar em **Deploy**.
4. (Opcional) Ajustar shortcodes do Instagram em `mock-data.ts` quando publicar posts novos.

## Estrutura

```
src/
├── app/           # App Router (layout, page, globals.css)
├── components/    # Componentes de página e UI (shadcn/base-ui em ui/)
├── hooks/         # React hooks (useScrolled)
├── lib/           # utils (cn, formatCurrency, whatsappUrl), mock-data
└── types/         # tipos compartilhados
```

Dados (destinos, depoimentos, passos, FAQ) estão em [`src/lib/mock-data.ts`](src/lib/mock-data.ts) — editar por aí.

## Scripts

- `npm run dev` — servidor de desenvolvimento
- `npm run build` — build de produção
- `npm start` — servir build
- `npm run lint` — ESLint
# xiquexiqueviagens
