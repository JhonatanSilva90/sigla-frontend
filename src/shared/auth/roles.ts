export type Role =
  | "SECRETARY"
  | "COORDINATOR"
  | "ANALYST"
  | "ADMINISTRATIVE"
  | "TECHNICAL_RESPONSIBLE";

export const ALL_ROLES: Role[] = [
  "SECRETARY",
  "COORDINATOR",
  "ANALYST",
  "ADMINISTRATIVE",
  "TECHNICAL_RESPONSIBLE",
];

export const ROLE_LABELS: Record<Role, string> = {
  SECRETARY: "Secretário",
  COORDINATOR: "Coordenador",
  ANALYST: "Analista",
  ADMINISTRATIVE: "Administrativo",
  TECHNICAL_RESPONSIBLE: "Responsável Técnico",
};
