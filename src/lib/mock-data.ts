import type { Destino } from "@/types/destino";
import type { Depoimento } from "@/types/depoimento";
import type { InstagramPost } from "@/types/instagram";
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

// Posts reais extraídos do Instagram @xiquexiqueviagens
export const instagramPostsMock: InstagramPost[] = [
  {
    id: "post-anjo",
    shortcode: "DWZJo4yulQA",
    imagem: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80",
    legenda:
      "Tem gente que escolhe o proximo destino... e tem gente que so queria a primeira oportunidade. Esse final de semana, 2 vidas foram tocadas em Icapui. Nao foi so uma viagem. Foi acesso. Foi dignidade. Foi sonho. Programa Anjo - Me da uma carona? Voce pode transformar a proxima historia.",
    curtidas: 0,
    comentarios: 0,
    data: "2025-07-12",
    permalink: "https://www.instagram.com/p/DWZJo4yulQA/",
    tipo: "video",
  },
  {
    id: "post-abril",
    shortcode: "DWU_neNlUcs",
    imagem:
      "https://scontent-for2-2.cdninstagram.com/v/t51.82787-15/657534034_18087915791206455_2401248453762852002_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=Mzg2MDk4OTkzNTg2NDA5MzIzOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&oh=00_Af2T3OJ_woYX2niZa9T1iavmqemiSbUPHuIQYrLY6tCBEA&oe=69F05083",
    legenda:
      "🌊✨ Chegou a hora de você viver os melhores destinos de Abril...\nQuantas vezes você disse \"depois eu vou\"?\n\nA vida tá passando… e ela não espera.\nViajar não é só conhecer um lugar. É se reconectar com você, sorrir sem pressa, sentir a energia da natureza e viver algo que o dinheiro não compra: EXPERIÊNCIA 🌱💙\n\n🌍 Turismo consciente\n🤝 Gente de verdade\n✨ Momentos que marcam pra sempre\n\n🚐 Abril tá chegando… e as vagas são poucas.\n📲 Me chama agora!",
    curtidas: 86,
    comentarios: 4,
    data: "2026-03-25",
    permalink: "https://www.instagram.com/p/DWU_neNlUcs/",
    tipo: "carrossel",
  },
  {
    id: "post-mulheres",
    shortcode: "DGxKmNxulQA",
    imagem: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&q=80",
    legenda:
      "Voce e a protagonista da sua historia. Feliz dia das mulheres! Que cada mulher possa viver a liberdade de viajar, de sonhar e de ser feliz.",
    curtidas: 0,
    comentarios: 0,
    data: "2025-03-08",
    permalink: "https://www.instagram.com/p/DGxKmNxulQA/",
    tipo: "imagem",
  },
  {
    id: "post-icapui",
    shortcode: "DFxKmNxulQA",
    imagem: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
    legenda:
      "Icapui, Ceara - um dos destinos mais lindos e acessiveis do Nordeste. Pacotes a partir de R$74/mes no carne. #XiqueXiqueViagens #Icapui #Ceara",
    curtidas: 0,
    comentarios: 0,
    data: "2025-02-20",
    permalink: "https://www.instagram.com/xiquexiqueviagens/",
    tipo: "imagem",
  },
  {
    id: "post-ods",
    shortcode: "DEzKmNxulQA",
    imagem: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80",
    legenda:
      "Turismo socioambiental e o nosso proposito. Apoiamos as ODS 10 e 12 da ONU. Viajar faz bem e transforma! #TurismoSocial #ODS",
    curtidas: 0,
    comentarios: 0,
    data: "2025-02-10",
    permalink: "https://www.instagram.com/xiquexiqueviagens/",
    tipo: "imagem",
  },
  {
    id: "post-carne",
    shortcode: "DDzKmNxulQA",
    imagem: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&q=80",
    legenda:
      "Viagens pre-pagas no carne, sem juros e sem burocracia. Acessibilizamos o direito de viajar e ser mais feliz. Fale com a gente! #XiqueXique #ViagemAcessivel",
    curtidas: 0,
    comentarios: 0,
    data: "2025-01-30",
    permalink: "https://www.instagram.com/xiquexiqueviagens/",
    tipo: "imagem",
  },
];

export const comoFunciona: ComoFuncionaStep[] = [
  { passo: 1, titulo: "Escolha seu destino", descricao: "Navegue pelos nossos pacotes e escolha o destino dos seus sonhos.", icone: "MapPin" },
  { passo: 2, titulo: "Monte seu carnê", descricao: "Defina o valor das parcelas que cabem no seu bolso, sem juros.", icone: "CreditCard" },
  { passo: 3, titulo: "Pague e acumule", descricao: "Pague mensalmente e veja seu saldo crescer até a viagem.", icone: "PiggyBank" },
  { passo: 4, titulo: "Viaje e seja feliz", descricao: "Com o carnê quitado, é só embarcar e aproveitar cada momento!", icone: "Plane" },
];
