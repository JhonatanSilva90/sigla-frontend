export type LicenseStatus =
  | "LICENCIADA"
  | "VENCIDA"
  | "EM_ANDAMENTO"
  | "A_VENCER";

export interface License {
  id: string;
  processo: string;
  empreendimento: string;
  tipoLicenca: string;
  status: LicenseStatus;
  validade: string;
}

export type StatusFilter = LicenseStatus | "TODOS";

export const STATUS_FILTERS: StatusFilter[] = [
  "TODOS",
  "EM_ANDAMENTO",
  "LICENCIADA",
  "A_VENCER",
  "VENCIDA",
];
