export interface TechnicalResponsibleAttachments {
  certidaoConselho: File | null;
  rg: File | null;
  cpf: File | null;
  diploma: File | null;
}

export interface TechnicalResponsibleFormValues {
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

  rua: string;
  numero: string;
  bairro: string;
  municipio: string;
  cep: string;

  anexos: TechnicalResponsibleAttachments;
}
