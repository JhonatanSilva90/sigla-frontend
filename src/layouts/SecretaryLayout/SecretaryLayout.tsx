import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Menu } from "@/shared/components";

export function SecretaryLayout() {
  return (
    <Box display="flex">
      <Menu
        title="SECRETÁRIO"
        items={[
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
