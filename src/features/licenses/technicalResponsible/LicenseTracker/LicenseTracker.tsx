import { Box, Button, Typography } from "@mui/material";
import { DataTable, type Column } from "@/shared/components";
import { LicenseStepper } from "../../components";
import type { License } from "../../types";
import styles from "./LicenseTracker.module.scss";
import { useState } from "react";

const columns: Column<License>[] = [
  {
    key: "protocolo",
    header: "Protocolo",
    render: (r) => r.protocolo,
    align: "left",
    width: "15%",
  },
  {
    key: "status",
    header: "Status",
    render: (r) => <LicenseStepper status={r.status} />,
    align: "left",
    width: "55%",
  },
  {
    key: "dataProtocolo",
    header: "Data",
    render: (r) => r.dataProtocolo,
    align: "center",
    width: "15%",
  },
  {
    key: "actions",
    header: "Ações",
    render: () => <Button size="small">Ver</Button>,
    align: "right",
    width: "15%",
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
      status: "Licença Emitida",
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
