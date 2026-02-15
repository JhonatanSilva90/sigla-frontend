import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Menu } from "@/features/licenses/technicalResponsible";

export function TechnicalResponsibleLayout() {
  return (
    <Box display="flex" gap={4}>
      <Menu />
      <Box flex={1}>
        <Outlet />
      </Box>
    </Box>
  );
}
