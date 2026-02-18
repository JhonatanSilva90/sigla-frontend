import { Box } from "@mui/material";
import { Menu } from "@/shared/components";
import { Outlet } from "react-router-dom";

type RoleLayoutProps = {
  title: string;
  menuItems: { label: string; path: string }[];
};

export function RoleLayout({ title, menuItems }: RoleLayoutProps) {
  return (
    <Box display="flex">
      <Menu title={title} items={menuItems} />
      <Box flex={1}>
        <Outlet />
      </Box>
    </Box>
  );
}
