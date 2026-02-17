import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { useState } from "react";
import { USER_MOCK } from "@/features/users/User/mocks/user.mock";
import type { UserDTO } from "@/features/users/User/types";

import { LICENSES_MOCK } from "@/shared/components/LicenseTable/mocks/licenses.mock";
import type { License } from "@/shared/components/LicenseTable/types";
import styles from "./RegisteredLicenses.module.scss";

type LicenseWithAnalyst = License & {
  analystId?: number;
};

const analysts: UserDTO[] = USER_MOCK.filter((user) => user.role === "ANALYST");

export function RegisteredLicenses() {
  const [licenses, setLicenses] = useState<LicenseWithAnalyst[]>(LICENSES_MOCK);

  const protocolledLicenses = licenses.filter(
    (license) => license.status === "PROTOCOLADO",
  );

  const handleAssignAnalyst = (licenseId: string, analystId: number) => {
    setLicenses((prev) =>
      prev.map((license) =>
        license.id === licenseId ? { ...license, analystId } : license,
      ),
    );
  };

  const handleSendToAnalysis = (licenseId: string) => {
    setLicenses((prev) =>
      prev.map((license) =>
        license.id === licenseId
          ? { ...license, status: "EM_ANDAMENTO" }
          : license,
      ),
    );
  };

  return (
    <Box className={styles.container}>
      <Box className={styles.header}>
        <Typography variant="h5" className={styles.title}>
          Licenças Protocoladas
        </Typography>

        <Typography variant="body2" className={styles.subtitle}>
          Selecione um analista e envie o processo para análise.
        </Typography>
      </Box>

      <Paper elevation={0} className={styles.paper}>
        {protocolledLicenses.length === 0 ? (
          <Typography variant="body2" className={styles.empty}>
            Nenhuma licença protocolada no momento.
          </Typography>
        ) : (
          <TableContainer className={styles.tableContainer}>
            <Table size="small" className={styles.table}>
              <TableHead className={styles.tableHead}>
                <TableRow>
                  <TableCell>Nº Processo</TableCell>
                  <TableCell>Cliente</TableCell>
                  <TableCell>Empreendimento</TableCell>
                  <TableCell>Tipo</TableCell>
                  <TableCell>Validade</TableCell>
                  <TableCell>Analista</TableCell>
                  <TableCell>Ação</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {protocolledLicenses.map((license) => (
                  <TableRow key={license.id} className={styles.row}>
                    <TableCell>{license.processo}</TableCell>
                    <TableCell>{license.cliente.nome}</TableCell>
                    <TableCell>{license.empreendimento}</TableCell>
                    <TableCell>{license.tipoLicenca}</TableCell>
                    <TableCell>{license.validade}</TableCell>

                    <TableCell>
                      <Select
                        size="small"
                        displayEmpty
                        value={license.analystId || ""}
                        onChange={(e) =>
                          handleAssignAnalyst(
                            license.id,
                            Number(e.target.value),
                          )
                        }
                        className={styles.select}
                      >
                        <MenuItem value="">
                          <em>Selecionar</em>
                        </MenuItem>

                        {analysts.map((analyst) => (
                          <MenuItem key={analyst.id} value={analyst.id}>
                            {analyst.nome}
                          </MenuItem>
                        ))}
                      </Select>
                    </TableCell>

                    <TableCell>
                      <Button
                        variant="contained"
                        size="small"
                        disabled={!license.analystId}
                        onClick={() => handleSendToAnalysis(license.id)}
                        className={styles.actionButton}
                      >
                        Enviar para Análise
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Paper>
    </Box>
  );
}
