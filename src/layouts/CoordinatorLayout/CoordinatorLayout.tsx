import { Menu } from "@/shared/components";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export function CoordinatorLayout() {
  return (
    <Box display="flex">
      <Menu
        title="COORDENADOR"
        items={[
          { label: "Protocolos", path: "protocols" },
          { label: "Licenças", path: "licenses" },
          { label: "Usuários", path: "users" },
          { label: "Documentos Padrão", path: "standard-documents" },
        ]}
      />
      <Box flex={1}>
        <Outlet />
      </Box>
    </Box>
  );
}
