import { Box, Button, Typography } from "@mui/material";
import { DataTable, type Column } from "@/shared/components";
import styles from "./LicenseTracker.module.scss";
import { useState } from "react";

type License = {
  id: number;
  protocolo: string;
  status: string;
  dataProtocolo: string;
};

const columns: Column<License>[] = [
  { key: "protocolo", header: "Protocolo", render: (r) => r.protocolo },
  { key: "status", header: "Status", render: (r) => r.status },
  { key: "dataProtocolo", header: "Data", render: (r) => r.dataProtocolo },
  {
    key: "actions",
    header: "Ações",
    render: () => <Button size="small">Ver</Button>,
    align: "center",
  },
];

export function LicenseTracker() {
  const [items] = useState<License[]>([
    {
      id: 1,
      protocolo: "2026-0001",
      status: "Em Análise",
      dataProtocolo: "2026-02-01",
    },
    {
      id: 2,
      protocolo: "2026-0002",
      status: "Aprovado",
      dataProtocolo: "2026-02-05",
    },
  ]);

  return (
    <Box className={styles.container}>
      <Typography variant="h6">Acompanhamento de Licenças</Typography>
      <Box className={styles.tableWrap}>
        <DataTable columns={columns} data={items} rowKey={(r) => r.id} />
      </Box>
    </Box>
  );
}
