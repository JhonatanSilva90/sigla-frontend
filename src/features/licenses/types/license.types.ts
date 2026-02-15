export type LicenseStatus =
  | "Protocolado"
  | "Em Análise"
  | "Notificação de Pendências"
  | "Realização de Vistoria"
  | "Licença Emitida";

export type License = {
  id: number;
  protocolo: string;
  status: LicenseStatus;
  dataProtocolo: string;
};
