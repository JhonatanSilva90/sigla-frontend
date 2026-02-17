import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import styles from "./Menu.module.scss";

export interface MenuItem {
  label: string;
  path: string;
}

interface MenuProps {
  title: string;
  items: MenuItem[];
}

export function Menu({ title, items }: MenuProps) {
  return (
    <Box className={styles.sidebar}>
      <Typography variant="body2" className={styles.title}>
        {title}
      </Typography>

      <nav className={styles.nav}>
        {items.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </Box>
  );
}
