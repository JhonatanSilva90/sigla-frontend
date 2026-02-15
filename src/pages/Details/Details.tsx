import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
  Chip,
  Button,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DownloadIcon from "@mui/icons-material/Download";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import HistoryIcon from "@mui/icons-material/History";
import PostAddIcon from "@mui/icons-material/PostAdd";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import { useDetails } from "./hooks/useDetails";
import { useParams } from "react-router-dom";
import styles from "./Details.module.scss";

/* ================= TYPES ================= */
interface InfoFieldProps {
  label: string;
  value: string;
}

interface SectionProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  icon?: React.ReactNode;
}

/* ================= REUSABLE COMPONENTS ================= */
function InfoField({ label, value }: InfoFieldProps) {
  return (
    <Box className={styles.field}>
      <Typography variant="caption" className={styles.label}>
        {label}
      </Typography>

      <Typography variant="body1" fontWeight={600}>
        {value}
      </Typography>
    </Box>
  );
}

function Section({ title, children, defaultExpanded, icon }: SectionProps) {
  return (
    <Accordion
      disableGutters
      defaultExpanded={defaultExpanded}
      className={styles.accordion}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box className={styles.accordionHeader}>
          {icon && <Box className={styles.iconWrapper}>{icon}</Box>}
          <Typography className={styles.accordionTitle}>{title}</Typography>
        </Box>
      </AccordionSummary>

      <AccordionDetails className={styles.accordionDetails}>
        {children}
      </AccordionDetails>
    </Accordion>
  );
}

/* ================= PAGE ================= */
export function Details() {
  // const { id } = { id: "1" };
  const { id } = useParams<{ id: string }>();
  // const { license } = useDetails(id);
  const { license } = useDetails(id ?? "");

  if (!license) {
    return <Typography>Licença não encontrada</Typography>;
  }

  return (
    <Box className={styles.page}>
      <Box className={styles.container}>
        <Typography variant="h5" className={styles.pageTitle}>
          Processo {license.processo}
        </Typography>

        {/* CLIENTE */}
        <Section icon={<PersonOutlineIcon />} title="Cliente" defaultExpanded>
          <Box className={styles.grid}>
            <InfoField label="CPF" value={license.cliente.cpf} />
            <InfoField label="Nome" value={license.cliente.nome} />
            <InfoField label="E-mail" value={license.cliente.email} />
            <InfoField label="Telefone" value={license.cliente.telefone} />
          </Box>
        </Section>

        {/* RESPONSÁVEL TÉCNICO */}
        <Section
          icon={<AssignmentIndIcon />}
          title="Responsável Técnico"
          defaultExpanded
        >
          <Box className={styles.grid}>
            <InfoField label="Nome" value={license.responsavelTecnico.nome} />
            <InfoField
              label="CREA"
              value={license.responsavelTecnico.registroConselho}
            />
            <InfoField
              label="E-mail"
              value={license.responsavelTecnico.email}
            />
            <InfoField
              label="Telefone"
              value={license.responsavelTecnico.telefone}
            />
          </Box>
        </Section>

        {/* HISTÓRICO */}
        <Section
          icon={<HistoryIcon />}
          title="Histórico de Tramitações"
          defaultExpanded
        >
          <Box className={styles.history}>
            {license.tramitacoes.map((item, index) => (
              <Box key={index} className={styles.historyItem}>
                <Typography variant="caption">{item.data}</Typography>
                <Typography>{item.descricao}</Typography>
                <Typography variant="caption" color="text.secondary">
                  {item.orgao}
                </Typography>
              </Box>
            ))}
          </Box>
        </Section>
        <Section
          icon={<PostAddIcon />}
          title="Titulos Emitidos"
          defaultExpanded
        >
          <Box className={styles.documents}>
            {license.documentos.map((doc) => (
              <Box key={doc.id} className={styles.document}>
                <Typography>{doc.nome}</Typography>
                <Button
                  size="small"
                  startIcon={<DownloadIcon />}
                  href={doc.url}
                >
                  Download
                </Button>
              </Box>
            ))}
          </Box>
        </Section>

        {/* DOCUMENTOS */}
        <Section
          icon={<PostAddIcon />}
          title="Documentos Anexados"
          defaultExpanded
        >
          <Box className={styles.documents}>
            {license.documentos.map((doc) => (
              <Box key={doc.id} className={styles.document}>
                <Typography>{doc.nome}</Typography>
                <Button
                  size="small"
                  startIcon={<DownloadIcon />}
                  href={doc.url}
                >
                  Download
                </Button>
              </Box>
            ))}
          </Box>
        </Section>

        {/* ANDAMENTO */}
        <Section
          icon={<ManageHistoryIcon />}
          title="Andamento do Processo"
          defaultExpanded
        >
          <Stack direction="row" spacing={1} flexWrap="wrap">
            {license.andamentoProcesso.map((step, index) => (
              <Chip
                key={index}
                label={step.nome}
                color={step.concluido ? "success" : "default"}
                variant={step.concluido ? "filled" : "outlined"}
              />
            ))}
          </Stack>
        </Section>

        {/* DOWNLOAD ZIP */}
        <Box className={styles.downloadAll}>
          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            href={license.zipDocumentosUrl}
          >
            Baixar todos os documentos (ZIP)
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
