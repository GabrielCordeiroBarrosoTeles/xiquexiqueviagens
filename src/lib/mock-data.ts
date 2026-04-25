import type { Destino } from "@/types/destino";
import type { Depoimento } from "@/types/depoimento";
import type { ComoFuncionaStep } from "@/types/como-funciona";

export const destinos: Destino[] = [
  {
    id: 1,
    nome: "Chapada Diamantina",
    estado: "Bahia",
    descricao: "Cachoeiras, trilhas e paisagens únicas no coração da Bahia.",
    preco: 890,
    parcelas: 12,
    imagem: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    destaque: true,
    categoria: "Natureza",
  },
  {
    id: 2,
    nome: "Lençóis Maranhenses",
    estado: "Maranhão",
    descricao: "Dunas brancas e lagoas de água cristalina num cenário surreal.",
    preco: 1100,
    parcelas: 12,
    imagem: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80",
    destaque: true,
    categoria: "Natureza",
  },
  {
    id: 3,
    nome: "Bonito",
    estado: "Mato Grosso do Sul",
    descricao: "Ecoturismo de excelência com rios de águas cristalinas.",
    preco: 980,
    parcelas: 12,
    imagem: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=80",
    destaque: false,
    categoria: "Ecoturismo",
  },
  {
    id: 4,
    nome: "Fernando de Noronha",
    estado: "Pernambuco",
    descricao: "Paraíso ecológico com praias entre as mais belas do mundo.",
    preco: 2200,
    parcelas: 18,
    imagem: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
    destaque: true,
    categoria: "Praia",
  },
  {
    id: 5,
    nome: "Pantanal",
    estado: "Mato Grosso",
    descricao: "A maior planície alagável do mundo, rica em biodiversidade.",
    preco: 1350,
    parcelas: 12,
    imagem: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
    destaque: false,
    categoria: "Natureza",
  },
  {
    id: 6,
    nome: "Jericoacoara",
    estado: "Ceará",
    descricao: "Vila de pescadores com dunas, lagoas e pôr do sol inesquecível.",
    preco: 1050,
    parcelas: 12,
    imagem: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80",
    destaque: false,
    categoria: "Praia",
  },
];

export const depoimentos: Depoimento[] = [
  {
    id: 1,
    nome: "Maria Silva",
    cidade: "Salvador, BA",
    texto: "Nunca imaginei que poderia viajar para a Chapada Diamantina. O carnê facilitou tudo e a viagem foi incrível!",
    avatar: "MS",
    nota: 5,
  },
  {
    id: 2,
    nome: "João Santos",
    cidade: "Fortaleza, CE",
    texto: "Atendimento humanizado e preços acessíveis. Realizei o sonho da minha família de conhecer os Lençóis.",
    avatar: "JS",
    nota: 5,
  },
  {
    id: 3,
    nome: "Ana Oliveira",
    cidade: "Recife, PE",
    texto: "A XiqueXique tornou possível o que parecia impossível. Viajamos 4 pessoas pagando no carnê sem juros!",
    avatar: "AO",
    nota: 5,
  },
];

export const comoFunciona: ComoFuncionaStep[] = [
  { passo: 1, titulo: "Você escolhe o destino", descricao: "Fala com a gente no WhatsApp e conta pra onde quer ir — ou escolhe um dos nossos pacotes.", icone: "MapPin" },
  { passo: 2, titulo: "A gente monta o carnê", descricao: "Parcelas que cabem no seu mês, sem juros e sem consulta ao SPC.", icone: "CreditCard" },
  { passo: 3, titulo: "Você paga no seu ritmo", descricao: "Pode ser no boleto, Pix ou cartão. A gente acompanha junto.", icone: "PiggyBank" },
  { passo: 4, titulo: "Hora de arrumar a mala", descricao: "Quitou o carnê? É só embarcar. A gente cuida de tudo: transporte, hospedagem e passeios.", icone: "Plane" },
];

/** Entrada da grade de embeds (sem API, sem token, sem widget). */
export type InstagramShortcodeEntry = {
  readonly shortcode: string;
  readonly tipo: "p" | "reel";
};

/**
 * Shortcodes dos posts do Instagram @xiquexiqueviagens exibidos no site via
 * `instagram.com/p/{code}/embed/` ou `instagram.com/reel/{code}/embed/`.
 *
 * Como pegar: abra o post no Instagram e copie a parte final da URL.
 *   - Post: instagram.com/p/DWZJo4yulQA/ → shortcode "DWZJo4yulQA", tipo "p"
 *   - Reel: instagram.com/reel/ABC123/  → shortcode "ABC123",      tipo "reel"
 *
 * Adicione até 6 (ou mais): a grade quebra em colunas responsivas. Só use
 * shortcodes de posts públicos, senão o embed fica vazio.
 */
export const instagramShortcodes: InstagramShortcodeEntry[] = [
  { shortcode: "DWZJo4yulQA", tipo: "p" },
  { shortcode: "DVhT4reDV-A", tipo: "p" },
  { shortcode: "DTF_UT7lant", tipo: "reel" },
];

export const faq = [
  {
    pergunta: "E se eu atrasar uma parcela?",
    resposta: "Sem drama. A gente conversa, remaneja a data e ajusta o carnê com você. A ideia é ninguém ficar travado.",
  },
  {
    pergunta: "Precisa de entrada?",
    resposta: "Não. Você começa a pagar a partir do primeiro mês do carnê, sem valor de entrada.",
  },
  {
    pergunta: "Posso viajar antes de terminar de pagar?",
    resposta: "Normalmente a viagem acontece depois de quitado, mas em alguns pacotes dá pra antecipar — fala com a gente pra ver a melhor forma pro seu caso.",
  },
];
