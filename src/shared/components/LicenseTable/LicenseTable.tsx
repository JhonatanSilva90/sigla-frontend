// import {
//   Box,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   Button,
//   IconButton,
// } from "@mui/material";
// import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import { TablePagination } from "../TablePagination/TablePagination";
// import styles from "./LicenseTable.module.scss";
// import { useLicenseTable } from "./hooks";
// import type { LicenseStatus, StatusFilter } from "./types";
// import { STATUS_FILTERS } from "./types";

// const statusLabel: Record<LicenseStatus, string> = {
//   LICENCIADA: "Licenciada",
//   VENCIDA: "Vencida",
//   EM_ANDAMENTO: "Em andamento",
//   A_VENCER: "A vencer",
// };

// function getStatusLabel(status: LicenseStatus | "TODOS") {
//   if (status === "TODOS") return "Todos";
//   return statusLabel[status];
// }

// export function LicenseTable() {
//   const { data, setStatus, page, setPage, totalPages, status } =
//     useLicenseTable();

//   return (
//     <Box className={styles.container}>
//       {/* Filtros */}
//       <Box className={styles.filters}>
//         {STATUS_FILTERS.map((item: StatusFilter) => {
//           const isActive = status === item;
//           return (
//             <Button
//               key={item}
//               size="small"
//               color="inherit"
//               onClick={() => setStatus(item)}
//               className={isActive ? styles.filterActive : styles.filter}
//               variant={isActive ? "contained" : "outlined"}
//             >
//               {getStatusLabel(item)}
//             </Button>
//           );
//         })}
//       </Box>

//       {/* Tabela */}
//       <Table className={styles.table}>
//         <TableHead>
//           <TableRow>
//             <TableCell>Processo</TableCell>
//             <TableCell>Empreendimento</TableCell>
//             <TableCell>Tipo de Licença</TableCell>
//             <TableCell>Status</TableCell>
//             <TableCell>Data de Validade</TableCell>
//             <TableCell>Ações</TableCell>
//           </TableRow>
//         </TableHead>

//         <TableBody>
//           {data.map((row) => (
//             <TableRow key={row.id}>
//               {/* <TableCell>{row.processo}</TableCell> */}
//               <TableCell>
//                 <Button
//                   //   variant="text"
//                   //   color="inherit"
//                   className={styles.processLink}
//                   //   onClick={() => handleOpenLicense(row.id)}
//                 >
//                   {row.processo}
//                 </Button>
//               </TableCell>
//               <TableCell>{row.empreendimento}</TableCell>
//               <TableCell>{row.tipoLicenca}</TableCell>
//               <TableCell>
//                 <span className={`${styles.status} ${styles[row.status]}`}>
//                   {statusLabel[row.status]}
//                 </span>
//               </TableCell>
//               <TableCell>{row.validade}</TableCell>
//               <TableCell align="center">
//                 <IconButton size="small">
//                   <EditOutlinedIcon fontSize="small" />
//                 </IconButton>
//                 <IconButton size="small">
//                   <MoreVertIcon fontSize="small" />
//                 </IconButton>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>

//       {/* Paginação */}

//       {totalPages > 1 && (
//         <TablePagination
//           page={page}
//           totalPages={totalPages}
//           onChange={(newPage) => setPage(newPage)}
//           align="flex-end"
//         />
//       )}
//     </Box>
//   );
// }

import { Box, Button, IconButton } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { DataTable } from "../DataTable/DataTable";
import type { Column } from "../DataTable/types";
import { TablePagination } from "../TablePagination/TablePagination";

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
  const { data, setStatus, page, setPage, totalPages, status } =
    useLicenseTable();

  const columns: Column<(typeof data)[number]>[] = [
    {
      key: "processo",
      header: "Processo",
      render: (row) => (
        <Button className={styles.processLink}>{row.processo}</Button>
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
  );
}
