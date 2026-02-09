import { Box, Button, Typography } from "@mui/material";
import { FormField, FileUpload, DateField } from "@/shared/components";
import styles from "./TechnicalResponsibleForm.module.scss";
import { useTechnicalResponsibleForm } from "./hooks/useTechnicalResponsibleForm";

export function TechnicalResponsibleForm() {
  const {
    form,
    isFormValid,
    handleChange,
    handleFormattedChange,
    handleFileChange,
    handleSubmit,
    formatCPF,
    formatCEP,
    formatPhone,
  } = useTechnicalResponsibleForm();

  return (
    <Box className={styles.container}>
      <Typography variant="h4" className={styles.title}>
        Cadastro Técnico de Atividade de Defesa Ambiental - CTDAM
      </Typography>

      {/* ===== DADOS PESSOAIS ===== */}
      <Box className={styles.section}>
        <Typography variant="h6">Dados Pessoais</Typography>

        <Box className={styles.attachmentsGrid}>
          <FormField
            id="nome"
            label="Nome Completo"
            value={form.nome}
            onChange={handleChange}
          />

          <FormField
            id="cpf"
            label="CPF"
            value={form.cpf}
            onChange={(e) =>
              handleFormattedChange("cpf", formatCPF(e.target.value))
            }
          />

          <FormField
            id="rg"
            label="RG"
            value={form.rg}
            onChange={handleChange}
          />

          <FormField
            id="sexo"
            label="Sexo"
            value={form.sexo}
            onChange={handleChange}
          />

          <DateField
            label="Data de Nascimento"
            value={form.dataNascimento}
            onChange={(value) => handleFormattedChange("dataNascimento", value)}
          />

          <FormField
            id="naturalidade"
            label="Naturalidade"
            value={form.naturalidade}
            onChange={handleChange}
          />

          <FormField
            id="nacionalidade"
            label="Nacionalidade"
            value={form.nacionalidade}
            onChange={handleChange}
          />
        </Box>
      </Box>

      {/* ===== DADOS PROFISSIONAIS ===== */}
      <Box className={styles.section}>
        <Typography variant="h6">Dados Profissionais</Typography>

        <Box className={styles.attachmentsGrid}>
          <FormField
            id="profissao"
            label="Profissão"
            value={form.profissao}
            onChange={handleChange}
          />

          <FormField
            id="conselho"
            label="Órgão de Classe"
            value={form.conselho}
            onChange={handleChange}
          />

          <FormField
            id="registroConselho"
            label="Nº Registro no Conselho"
            value={form.registroConselho}
            onChange={handleChange}
          />

          <FormField
            id="especializacoes"
            label="Especializações"
            value={form.especializacoes}
            onChange={handleChange}
          />
        </Box>
      </Box>

      {/* ===== CONTATO ===== */}
      <Box className={styles.section}>
        <Typography variant="h6">Contato</Typography>

        <Box className={styles.attachmentsGrid}>
          <FormField
            id="telefone"
            label="Telefone"
            value={form.telefone}
            onChange={(e) =>
              handleFormattedChange("telefone", formatPhone(e.target.value))
            }
          />

          <FormField
            id="celular"
            label="Celular"
            value={form.celular}
            onChange={(e) =>
              handleFormattedChange("celular", formatPhone(e.target.value))
            }
          />

          <FormField
            id="email"
            label="E-mail"
            type="email"
            value={form.email}
            onChange={handleChange}
          />
        </Box>
      </Box>

      {/* ===== ENDEREÇO ===== */}
      <Box className={styles.section}>
        <Typography variant="h6">Endereço</Typography>

        <Box className={styles.attachmentsGrid}>
          <FormField
            id="rua"
            label="Rua/Avenida"
            value={form.rua}
            onChange={handleChange}
          />

          <FormField
            id="numero"
            label="Número"
            type="number"
            value={form.numero}
            onChange={handleChange}
          />

          <FormField
            id="bairro"
            label="Bairro"
            value={form.bairro}
            onChange={handleChange}
          />

          <FormField
            id="municipio"
            label="Município"
            value={form.municipio}
            onChange={handleChange}
          />

          <FormField
            id="cep"
            label="CEP"
            value={form.cep}
            onChange={(e) =>
              handleFormattedChange("cep", formatCEP(e.target.value))
            }
          />
        </Box>
      </Box>

      {/* ===== ANEXOS ===== */}
      <Box className={styles.section}>
        <Typography variant="h6">Anexos Obrigatórios</Typography>

        <Box className={styles.attachmentsGrid}>
          <FileUpload
            label="Certidão de Regularidade do Conselho"
            file={form.anexos.certidaoConselho}
            onChange={(file) => handleFileChange("certidaoConselho", file)}
          />

          <FileUpload
            label="Documento de Identidade (RG)"
            file={form.anexos.rg}
            onChange={(file) => handleFileChange("rg", file)}
          />

          <FileUpload
            label="Cadastro de Pessoa Física (CPF)"
            file={form.anexos.cpf}
            onChange={(file) => handleFileChange("cpf", file)}
          />

          <FileUpload
            label="Diploma"
            file={form.anexos.diploma}
            onChange={(file) => handleFileChange("diploma", file)}
          />
        </Box>
      </Box>

      {/* ===== AÇÕES ===== */}
      <Box className={styles.actions}>
        <Button
          variant="contained"
          disabled={!isFormValid}
          onClick={handleSubmit}
        >
          Salvar Cadastro
        </Button>
      </Box>
    </Box>
  );
}
