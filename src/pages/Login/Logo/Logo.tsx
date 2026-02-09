import CompostSharpIcon from "@mui/icons-material/CompostSharp";
import { Box, Typography } from "@mui/material";
import styles from "./Logo.module.scss";

export function Logo() {
  return (
    <Box className={styles.logo}>
      <Box className={styles.logoMain}>
        <CompostSharpIcon fontSize="inherit" className={styles.iconLarge} />
        <Typography variant="h2">SIGLA</Typography>
      </Box>
      <Typography>
        Sistema Integrado de Gestão de Licenças Ambientais{" "}
      </Typography>
    </Box>
  );
}

export function LogoSmall() {
  return (
    <Box className={styles.logoSmall}>
      <CompostSharpIcon fontSize="inherit" className={styles.iconSmall} />
      <Typography variant="h3">SIGLA</Typography>
    </Box>
  );
}
