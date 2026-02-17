import { type FC } from "react";
import { useNavigate } from "react-router-dom";
import {
  Stack,
  Typography,
  Button,
  Paper,
  TextField,
  IconButton,
  Box,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// import { SecretaryLayout } from "../../layouts/SecretaryLayout/SecretaryLayout";
import { DataTable, TablePagination, type Column } from "@/shared/components";
import type { UserDTO } from "@/features/users/User/types";
import styles from "./User.module.scss";
import { useUsers } from "@/features/users/User/hooks/useUsers";

/* ----- Colunas ----- */
const userColumns: Column<UserDTO>[] = [
  { key: "nome", header: "Nome", render: (row) => row.nome },
  { key: "cpf", header: "CPF", render: (row) => row.cpf },
  { key: "email", header: "Email", render: (row) => row.email },
  { key: "formacao", header: "Formação", render: (row) => row.formacao },
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

export const User: FC = () => {
  const {
    users,
    totalPages,
    page,
    nomeFilter,
    cpfFilter,
    emailFilter,
    setNomeFilter,
    setCpfFilter,
    setEmailFilter,
    setPage,
  } = useUsers();

  const navigate = useNavigate();

  function handleAdd() {
    navigate("/users/secretary/new");
  }

  return (
    <Box>
      {/* Header */}
      <Stack direction="row" justifyContent="space-between" mb={3}>
        <Typography variant="h5">Gestão de Usuários</Typography>
        <Button variant="contained" onClick={handleAdd}>
          + Adicionar Usuário
        </Button>
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
      <DataTable columns={userColumns} data={users} rowKey={(row) => row.id} />

      {/* Paginação */}
      <TablePagination
        page={page}
        totalPages={totalPages}
        onChange={setPage}
        align="flex-end"
      />
    </Box>
  );
};
