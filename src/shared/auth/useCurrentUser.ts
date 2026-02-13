import { useState, useEffect } from "react";
import { Role } from "./roles";

// Hook simulando usuário atual. Em produção, conectar ao auth provider.
export function useCurrentUser() {
  const [role, setRole] = useState<Role>(() => {
    const stored =
      typeof window !== "undefined" ? localStorage.getItem("mockRole") : null;
    return (stored as Role) || ("SECRETARY" as Role);
  });

  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("mockRole", role);
  }, [role]);

  return { role, setRole } as const;
}
