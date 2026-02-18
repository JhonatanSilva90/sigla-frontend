import { Box, Typography, Button, CircularProgress } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { useState } from "react";
import styles from "./StandardDocuments.module.scss";
import { STANDARD_DOCUMENTS } from "./mocks/mockDocuments";

export function StandardDocuments() {
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const handleDownload = async (id: string, fileUrl: string) => {
    try {
      setLoadingId(id);

      // Simulação de download
      await new Promise((resolve) => setTimeout(resolve, 1500));

      window.open(fileUrl, "_blank");
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <Box className={styles.container}>
      <Typography variant="h6">Documentos Padrão para Licenciamento</Typography>

      <Box className={styles.documentsGrid}>
        {STANDARD_DOCUMENTS.map((doc) => (
          <Box key={doc.id} className={styles.documentCard}>
            <Typography variant="body1">{doc.name}</Typography>

            <Button
              variant="contained"
              fullWidth
              disabled={loadingId === doc.id}
              onClick={() => handleDownload(doc.id, doc.fileUrl)}
              startIcon={
                loadingId === doc.id ? (
                  <CircularProgress size={16} color="inherit" />
                ) : (
                  <DownloadIcon />
                )
              }
            >
              {loadingId === doc.id ? "Baixando..." : "Baixar"}
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
