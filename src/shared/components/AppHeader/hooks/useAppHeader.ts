import { useState } from "react";
import type { MouseEvent } from "react";

export function useAppHeader() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleOpenMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return {
    anchorEl,
    open,
    handleOpenMenu,
    handleCloseMenu,
  };
}
