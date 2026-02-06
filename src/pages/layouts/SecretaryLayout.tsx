import { Box } from "@mui/material";
import type { FC, ReactNode } from "react";

interface SecretaryLayoutProps {
  children: ReactNode;
}

export const SecretaryLayout: FC<SecretaryLayoutProps> = ({ children }) => (
  <Box
    component="main"
    sx={{
      minHeight: "100vh",
      backgroundColor: "#f5f7fa",
      padding: 3,
    }}
  >
    {children}
  </Box>
);
