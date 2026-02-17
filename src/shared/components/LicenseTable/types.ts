export type LicenseStatus =
  | "PROTOCOLADO"
  | "LICENCIADA"
  | "VENCIDA"
  | "EM_ANDAMENTO"
  | "A_VENCER";

export const STATUS_FILTERS: StatusFilter[] = [
  "TODOS",
  "PROTOCOLADO",
  "EM_ANDAMENTO",
  "LICENCIADA",
  "A_VENCER",
  "VENCIDA",
];

export const LICENSE_STATUS_LABEL: Record<LicenseStatus, string> = {
  PROTOCOLADO: "Protocolado",
  LICENCIADA: "Licenciada",
  VENCIDA: "Vencida",
  EM_ANDAMENTO: "Em andamento",
  A_VENCER: "A vencer",
};

export interface Tramitation {
  data: string;
  descricao: string;
  orgao: string;
}

export interface DocumentFile {
  id: string;
  nome: string;
  tipo: string;
  url: string;
  dataUpload: string;
}

export interface IssuedTitle {
  tipo: "NOTIFICACAO" | "AUTORIZACAO" | "PARECER_TECNICO" | "LICENCA" | "OUTRO";
  numeroControle: string;
  dataEmissao: string;
}

export interface ProcessStep {
  nome: string;
  concluido: boolean;
  data?: string;
}

export interface TechnicalResponsibleForm {
  nome: string;
  cpf: string;
  rg: string;
  sexo: string;
  dataNascimento: string;
  naturalidade: string;
  nacionalidade: string;

  profissao: string;
  conselho: string;
  registroConselho: string;
  especializacoes: string;

  telefone: string;
  celular: string;
  email: string;

  endereco: string;
  numero: string;
  bairro: string;
  municipio: string;
  cep: string;
}

export interface License {
  id: string;
  processo: string;
  empreendimento: string;
  tipoLicenca: string;
  status: LicenseStatus;
  validade: string;

  cliente: {
    nome: string;
    cpf: string;
    email: string;
    telefone: string;
  };

  responsavelTecnico: TechnicalResponsibleForm;

  tramitacoes: Tramitation[];

  documentos: DocumentFile[];

  observacoes: string;

  titulosEmitidos: IssuedTitle[];

  andamentoProcesso: ProcessStep[];

  zipDocumentosUrl: string;
}

export type StatusFilter = LicenseStatus | "TODOS";
