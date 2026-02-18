import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { AppHeader, Footer } from "@/shared/components";
import styles from "./MainLayout.module.scss";

export function MainLayout() {
  return (
    <Box className={styles.layout}>
      <AppHeader />
      <Box component="main" className={styles.content}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
