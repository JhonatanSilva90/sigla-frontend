export type TipoLicenca = "LP" | "LI" | "LO";

export interface Documento {
  id: string;
  nome: string;
  obrigatorio: boolean;
}

export interface Licenca {
  tipo: TipoLicenca;
  documentos: Documento[];
}

export interface AtividadeLicenciada {
  id: string;
  nome: string;
  categoria: string;
  licencas: Licenca[];
}
