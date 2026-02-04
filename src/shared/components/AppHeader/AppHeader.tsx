import {
  AppBar,
  Toolbar,
  Box,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Container,
} from "@mui/material";

import { LogoSmall } from "../../../pages/Login/Logo/Logo";
import { useAppHeader } from "../AppHeader/hooks";
import styles from "./AppHeader.module.scss";

interface User {
  name: string;
  avatarUrl?: string;
}

interface AppHeaderProps {
  user?: User;
  onLogout?: () => void;
}

export function AppHeader({ onLogout }: AppHeaderProps) {
  const { anchorEl, open, handleOpenMenu, handleCloseMenu } = useAppHeader();

  return (
    <AppBar position="static" elevation={0} className={styles.appBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters className={styles.toolbar}>
          <Box className={styles.logoWrapper}>
            <LogoSmall />
          </Box>
          <Box className={styles.userWrapper}>
            <IconButton onClick={handleOpenMenu} size="small">
              <Avatar {...stringAvatar("Jhonatan Silva")} />
            </IconButton>
          </Box>

          {/* Menu */}
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleCloseMenu}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MenuItem onClick={handleCloseMenu}>Perfil</MenuItem>
            <MenuItem onClick={handleCloseMenu}>Configurações</MenuItem>
            <MenuItem
              onClick={() => {
                handleCloseMenu();
                onLogout?.();
              }}
              sx={{ color: "error.main" }}
            >
              Sair
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: "var(--green-light)",
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}
