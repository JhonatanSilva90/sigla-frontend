import { type FC } from "react";
import { Box, Pagination } from "@mui/material";
import styles from "./TablePagination.module.scss";

interface TablePaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
  align?: "flex-start" | "center" | "flex-end";
}

export const TablePagination: FC<TablePaginationProps> = ({
  page,
  totalPages,
  onChange,
}) => {
  if (totalPages <= 1) return null;

  return (
    <Box className={styles.pagination}>
      <Pagination
        count={totalPages}
        page={page}
        shape="rounded"
        variant="outlined"
        onChange={(_, value) => onChange(value)}
      />
    </Box>
  );
};
