export type DestinoCategoria = "Natureza" | "Praia" | "Ecoturismo" | "Cultura";

export type Destino = {
  id: number;
  nome: string;
  estado: string;
  descricao: string;
  preco: number;
  parcelas: number;
  imagem: string;
  destaque: boolean;
  categoria: DestinoCategoria;
};
