import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import { FormField, DateField, FileUpload } from "@/shared/components";
import styles from "./ProtocolForm.module.scss";
import { useState } from "react";
import { ATIVIDADES, LICENSE_TYPES } from "@/shared/data/licenciamentoCatalog";
import type {
  AtividadeLicenciada,
  TipoLicenca,
} from "@/shared/types/licenciamento.types";

export function ProtocolForm() {
  const [form, setForm] = useState({ protocolo: "", data: "", descricao: "" });
  const [licenseType, setLicenseType] = useState<TipoLicenca | "">("");
  const [activityId, setActivityId] = useState<string>("");
  const [files, setFiles] = useState<Record<string, File | null>>({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = e.target;
    setForm((p) => ({ ...p, [id]: value }));
  }

  function handleSubmit() {
    console.log("Protocolo salvo", form, { licenseType, activityId, files });
  }

  function handleFileChange(docId: string, file: File | null) {
    setFiles((p) => ({ ...p, [docId]: file }));
  }

  const atividade: AtividadeLicenciada | undefined = ATIVIDADES.find(
    (a) => a.id === activityId,
  );

  const documentos =
    atividade?.licencas.find((l) => l.tipo === licenseType)?.documentos || [];

  return (
    <Box className={styles.container}>
      <Typography variant="h6">Protocolo de Licença</Typography>

      {/* GRID SOMENTE DOS SELECTS */}
      <Box className={styles.selectsGrid}>
        <FormControl variant="outlined" size="small">
          <InputLabel id="activity-label" sx={{ color: "var(--grey-700)" }}>
            Tipo de Atividade
          </InputLabel>
          <Select
            labelId="activity-label"
            label="Tipo de Atividade"
            value={activityId}
            onChange={(e) => setActivityId(e.target.value as string)}
          >
            <MenuItem value="" disabled>
              Selecione a atividade
            </MenuItem>
            {ATIVIDADES.map((a) => (
              <MenuItem key={a.id} value={a.id}>
                {a.nome}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl variant="outlined" size="small">
          <InputLabel id="license-type-label" sx={{ color: "var(--grey-700)" }}>
            Tipo de Licença
          </InputLabel>
          <Select
            labelId="license-type-label"
            label="Tipo de Licença"
            value={licenseType}
            onChange={(e) => setLicenseType(e.target.value as TipoLicenca | "")}
          >
            <MenuItem value="" disabled>
              Selecione o tipo de licença
            </MenuItem>
            {LICENSE_TYPES.map((t) => (
              <MenuItem key={t} value={t}>
                {t}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* DATA */}
      <Box className={styles.dateField}>
        <DateField
          label="Data de Protocolo"
          value={form.data}
          onChange={(v) => setForm((p) => ({ ...p, data: v }))}
          labelColor="var(--grey-700)"
        />
      </Box>

      {/* DESCRIÇÃO */}
      <Box className={styles.descriptionField}>
        <FormField
          id="descricao"
          label="Descrição"
          value={form.descricao}
          onChange={handleChange}
          labelColor="var(--grey-700)"
          multiline
          minRows={5}
        />
      </Box>

      {/* DOCUMENTOS */}
      <Box mt={4}>
        <Typography variant="subtitle1">Documentos necessários</Typography>

        <Box className={styles.documentsSection}>
          {documentos.length === 0 && (
            <Typography variant="body2">
              Nenhum documento obrigatório para esta combinação.
            </Typography>
          )}

          {documentos.map((doc) => (
            <Box key={doc.id} className={styles.documentRow}>
              <Typography variant="h6" className={styles.documentLabel}>
                {doc.nome} {doc.obrigatorio ? "*" : ""}
              </Typography>

              <Box className={styles.uploadWrapper}>
                <FileUpload
                  label="Anexo"
                  file={files[doc.id] || null}
                  onChange={(f) => handleFileChange(doc.id, f)}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Box className={styles.actions}>
        <Button variant="contained" onClick={handleSubmit}>
          Protocolar
        </Button>
      </Box>
    </Box>
  );
}
