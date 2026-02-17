import { Box, Button, IconButton, Typography } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import { DataTable, type Column } from "../DataTable/";
import { TablePagination } from "../TablePagination/";
import styles from "./LicenseTable.module.scss";
import { useLicenseTable } from "./hooks";
import type { LicenseStatus, StatusFilter } from "./types";
import { STATUS_FILTERS } from "./types";

// ----- Labels -----
const statusLabel: Record<LicenseStatus, string> = {
  LICENCIADA: "Licenciada",
  VENCIDA: "Vencida",
  EM_ANDAMENTO: "Em andamento",
  A_VENCER: "A vencer",
};

function getStatusLabel(status: LicenseStatus | "TODOS") {
  return status === "TODOS" ? "Todos" : statusLabel[status];
}

export function LicenseTable() {
  const navigate = useNavigate();

  const { data, setStatus, page, setPage, totalPages, status } =
    useLicenseTable();

  const columns: Column<(typeof data)[number]>[] = [
    {
      key: "processo",
      header: "Processo",
      render: (row) => (
        <Button
          className={styles.processLink}
          onClick={() => navigate(`/licenses/${row.id}`)}
        >
          {row.processo}
        </Button>
      ),
    },
    {
      key: "empreendimento",
      header: "Empreendimento",
      render: (row) => row.empreendimento,
    },
    {
      key: "tipoLicenca",
      header: "Tipo de Licença",
      render: (row) => row.tipoLicenca,
    },
    {
      key: "status",
      header: "Status",
      render: (row) => (
        <span className={`${styles.status} ${styles[row.status]}`}>
          {statusLabel[row.status]}
        </span>
      ),
    },
    {
      key: "validade",
      header: "Data de Validade",
      render: (row) => row.validade,
    },
    {
      key: "actions",
      header: "Ações",
      align: "center",
      render: () => (
        <>
          <IconButton size="small">
            <EditOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton size="small">
            <MoreVertIcon fontSize="small" />
          </IconButton>
        </>
      ),
    },
  ];

  return (
    <Box className={styles.container}>
      <Typography variant="h6">Acompanhamento de Licenças</Typography>
      <Box className={styles.table}>
        {/* Filtros */}
        <Box className={styles.filters}>
          {STATUS_FILTERS.map((item: StatusFilter) => {
            const isActive = status === item;
            return (
              <Button
                key={item}
                size="small"
                variant={isActive ? "contained" : "outlined"}
                onClick={() => setStatus(item)}
                className={isActive ? styles.filterActive : styles.filter}
              >
                {getStatusLabel(item)}
              </Button>
            );
          })}
        </Box>

        {/* Tabela */}
        <DataTable columns={columns} data={data} rowKey={(row) => row.id} />

        {/* Paginação */}
        {totalPages > 1 && (
          <TablePagination
            page={page}
            totalPages={totalPages}
            onChange={setPage}
            align="flex-end"
          />
        )}
      </Box>
    </Box>
  );
}
