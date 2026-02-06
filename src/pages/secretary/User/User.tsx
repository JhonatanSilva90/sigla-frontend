import { type FC, useState, useMemo } from "react";
import {
  Stack,
  Typography,
  Button,
  Paper,
  TextField,
  IconButton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { SecretaryLayout } from "../../layouts/SecretaryLayout";
import { DataTable } from "../../../shared/components/DataTable/DataTable";
import type { Column } from "../../../shared/components/DataTable/types";
import { TablePagination } from "../../../shared/components/TablePagination/TablePagination";
import { USER_MOCK } from "./mocks/user.mock";
import type { UserDTO } from "./types";
import styles from "./User.module.scss";

// ----- Colunas -----
const userColumns: Column<UserDTO>[] = [
  {
    key: "nome",
    header: "Nome",
    render: (row) => row.nome,
  },
  {
    key: "cpf",
    header: "CPF",
    render: (row) => row.cpf,
  },
  {
    key: "email",
    header: "Email",
    render: (row) => row.email,
  },
  {
    key: "formacao",
    header: "Formação",
    render: (row) => row.formacao,
  },
  {
    key: "numeroRegistro",
    header: "Número Registro",
    render: (row) => row.numeroRegistro,
  },
  {
    key: "actions",
    header: "Ações",
    align: "center",
    render: () => (
      <IconButton size="small">
        <MoreVertIcon />
      </IconButton>
    ),
  },
];

// ----- Página -----
export const User: FC = () => {
  const [nomeFilter, setNomeFilter] = useState("");
  const [cpfFilter, setCpfFilter] = useState("");
  const [emailFilter, setEmailFilter] = useState("");

  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const filteredUsers = useMemo(() => {
    return USER_MOCK.filter(
      (u) =>
        u.nome.toLowerCase().includes(nomeFilter.toLowerCase()) &&
        u.cpf.toLowerCase().includes(cpfFilter.toLowerCase()) &&
        u.email.toLowerCase().includes(emailFilter.toLowerCase()),
    );
  }, [nomeFilter, cpfFilter, emailFilter]);

  const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);
  const paginatedUsers = filteredUsers.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage,
  );

  return (
    <SecretaryLayout>
      {/* Header */}
      <Stack direction="row" justifyContent="space-between" mb={3}>
        <Typography variant="h5">Gestão de Usuários</Typography>
        <Button variant="contained">+ Adicionar Usuário</Button>
      </Stack>

      {/* Filtros */}
      <Paper className={styles.filters}>
        <TextField
          size="small"
          placeholder="Buscar por nome..."
          value={nomeFilter}
          onChange={(e) => setNomeFilter(e.target.value)}
        />
        <TextField
          size="small"
          placeholder="Buscar por CPF..."
          value={cpfFilter}
          onChange={(e) => setCpfFilter(e.target.value)}
        />
        <TextField
          size="small"
          placeholder="Buscar por Email..."
          value={emailFilter}
          onChange={(e) => setEmailFilter(e.target.value)}
        />
      </Paper>

      {/* Tabela */}
      <DataTable
        columns={userColumns}
        data={paginatedUsers}
        rowKey={(row) => row.id}
      />

      {/* Paginação */}
      <TablePagination
        page={page}
        totalPages={totalPages}
        onChange={setPage}
        align="flex-end"
      />
    </SecretaryLayout>
  );
};
