import { Role } from "@/shared/auth/roles";

export interface UserDTO {
  id: number;
  nome: string;
  cpf: string;
  email: string;
  role?: Role;
  formacao?: string;
  numeroRegistro?: string;
}
