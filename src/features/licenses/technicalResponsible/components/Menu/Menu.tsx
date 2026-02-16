import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import styles from "./Menu.module.scss";

export function Menu() {
  return (
    <Box className={styles.sidebar}>
      <Typography variant="body2" className={styles.title}>
        RESPONSÁVEL TÉCNICO
      </Typography>

      <nav className={styles.nav}>
        <NavLink
          to="tracker"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Acompanhar Licenças
        </NavLink>
        <NavLink
          to="protocol"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Protocolar Licença
        </NavLink>

        <NavLink
          to="standard-documents"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Documentos Padrão
        </NavLink>
      </nav>
    </Box>
  );
}
