import {
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  IconButton,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Pagination from "@mui/material/Pagination";
import styles from "./LicenseTable.module.scss";
import { useLicenseTable } from "./hooks";
import type { LicenseStatus } from "./types";
import { STATUS_FILTERS } from "./types";

const statusLabel: Record<LicenseStatus, string> = {
  LICENCIADA: "Licenciada",
  VENCIDA: "Vencida",
  EM_ANDAMENTO: "Em andamento",
  A_VENCER: "A vencer",
};

function getStatusLabel(status: LicenseStatus | "TODOS") {
  if (status === "TODOS") return "Todos";
  return statusLabel[status];
}

export function LicenseTable() {
  const { data, setStatus, page, setPage, totalPages } = useLicenseTable();

  return (
    <Box className={styles.container}>
      {/* Filtros */}
      <Box className={styles.filters}>
        {STATUS_FILTERS.map((item) => (
          <Button key={item} onClick={() => setStatus(item)}>
            {getStatusLabel(item)}
          </Button>
        ))}
      </Box>

      {/* Tabela */}
      <Table className={styles.table}>
        <TableHead>
          <TableRow>
            <TableCell>Processo</TableCell>
            <TableCell>Empreendimento</TableCell>
            <TableCell>Tipo de Licença</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Data de Validade</TableCell>
            <TableCell align="center">Ações</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.processo}</TableCell>
              <TableCell>{row.empreendimento}</TableCell>
              <TableCell>{row.tipoLicenca}</TableCell>
              <TableCell>
                <span className={`${styles.status} ${styles[row.status]}`}>
                  {statusLabel[row.status]}
                </span>
              </TableCell>
              <TableCell>{row.validade}</TableCell>
              <TableCell align="center">
                <IconButton size="small">
                  <EditOutlinedIcon fontSize="small" />
                </IconButton>
                <IconButton size="small">
                  <MoreVertIcon fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Paginação */}
      {totalPages > 1 && (
        <Box className={styles.pagination}>
          <Pagination
            count={totalPages}
            page={page}
            shape="rounded"
            variant="outlined"
            onChange={(_, value) => setPage(value)}
          />
        </Box>
      )}
    </Box>
  );
}
