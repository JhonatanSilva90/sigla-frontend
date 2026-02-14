import { Box, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import styles from "./TechnicalResponsibleLayout.module.scss";

export function TechnicalResponsibleLayout() {
  return (
    <Box className={styles.container}>
      <Typography variant="h5" mb={2}>
        Painel do Responsável Técnico
      </Typography>
      <Outlet />
    </Box>
  );
}
