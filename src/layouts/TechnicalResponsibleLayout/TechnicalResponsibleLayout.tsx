import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
// import { Menu } from "@/features/licenses/technicalResponsible";
import { Menu } from "@/shared/components";

export function TechnicalResponsibleLayout() {
  return (
    <Box display="flex">
      <Menu
        title="RESPONSÁVEL TÉCNICO"
        items={[
          { label: "Acompanhar Licenças", path: "tracker" },
          { label: "Protocolar Licença", path: "protocol" },
          { label: "Documentos Padrão", path: "standard-documents" },
        ]}
      />
      <Box flex={1}>
        <Outlet />
      </Box>
    </Box>
  );
}
