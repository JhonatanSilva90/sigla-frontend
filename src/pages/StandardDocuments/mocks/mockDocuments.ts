export interface StandardDocument {
  id: string;
  name: string;
  fileUrl: string;
}

export const STANDARD_DOCUMENTS: StandardDocument[] = [
  { id: "1", name: "Contrato Social", fileUrl: "/docs/contrato.pdf" },
  { id: "2", name: "Requerimento Padrão", fileUrl: "/docs/requerimento.pdf" },
  { id: "3", name: "Declaração Técnica", fileUrl: "/docs/declaracao.pdf" },
];
