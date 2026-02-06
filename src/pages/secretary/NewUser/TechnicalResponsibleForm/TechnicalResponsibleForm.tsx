import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import * as Yup from "yup";

import { FormField, FileUpload, DateField } from "@/shared/components";
import styles from "./TechnicalResponsibleForm.module.scss";
import { formatCPF, formatCEP, formatPhone } from "@/shared/utils/Formatters";
import type {
  TechnicalResponsibleAttachments,
  TechnicalResponsibleFormValues,
} from "./types";
import { technicalResponsibleSchema } from "./schemas";

export function TechnicalResponsibleForm() {
  const [form, setForm] = useState<TechnicalResponsibleFormValues>({
    nome: "",
    cpf: "",
    rg: "",
    sexo: "",
    dataNascimento: "",
    naturalidade: "",
    nacionalidade: "",
    profissao: "",
    conselho: "",
    registroConselho: "",
    especializacoes: "",
    telefone: "",
    celular: "",
    email: "",
    rua: "",
    numero: "",
    bairro: "",
    municipio: "",
    cep: "",
    anexos: {
      certidaoConselho: null,
      rg: null,
      cpf: null,
      diploma: null,
    },
  });

  /* ===== handlers ===== */

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  }

  function handleFileChange(
    field: keyof TechnicalResponsibleAttachments,
    file: File | null,
  ) {
    setForm((prev) => ({
      ...prev,
      anexos: {
        ...prev.anexos,
        [field]: file,
      },
    }));
  }

  async function handleSubmit() {
    try {
      // validação completa
      await technicalResponsibleSchema.validate(form, { abortEarly: false });

      console.log("Formulário válido:", form);
      // aqui você envia para API ou continua o fluxo
      setErrors({}); // limpa erros anteriores
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const validationErrors: Record<string, string> = {};
        err.inner.forEach((e) => {
          if (e.path) validationErrors[e.path] = e.message;
        });
        setErrors(validationErrors);
        console.log("Erros de validação:", validationErrors);
      }
    }
  }

  /* ===== validações ===== */
  const [errors, setErrors] = useState<Record<string, string>>({});

  const isFormValid = Object.keys(errors).length === 0;

  /* ===== render ===== */

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
            labelColor="var(--grey-700)"
          />
          <FormField
            id="cpf"
            label="CPF"
            value={form.cpf}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, cpf: formatCPF(e.target.value) }))
            }
            labelColor="var(--grey-700)"
          />
          <FormField
            id="rg"
            label="RG"
            value={form.rg}
            onChange={handleChange}
            labelColor="var(--grey-700)"
          />
          <FormField
            id="sexo"
            label="Sexo"
            value={form.sexo}
            onChange={handleChange}
            labelColor="var(--grey-700)"
          />
          <DateField
            label="Data de Nascimento"
            value={form.dataNascimento}
            onChange={(value) =>
              setForm((prev) => ({ ...prev, dataNascimento: value }))
            }
          />

          <FormField
            id="naturalidade"
            label="Naturalidade"
            value={form.naturalidade}
            onChange={handleChange}
            labelColor="var(--grey-700)"
          />
          <FormField
            id="nacionalidade"
            label="Nacionalidade"
            value={form.nacionalidade}
            onChange={handleChange}
            labelColor="var(--grey-700)"
          />
        </Box>
      </Box>

      {/* ===== DADOS PROFISSIONAIS ===== */}
      <section className={styles.section}>
        <Typography variant="h6">Dados Profissionais</Typography>

        <Box className={styles.attachmentsGrid}>
          <FormField
            id="profissao"
            label="Profissão"
            value={form.profissao}
            onChange={handleChange}
            labelColor="var(--grey-700)"
          />
          <FormField
            id="conselho"
            label="Órgão de Classe"
            value={form.conselho}
            onChange={handleChange}
            labelColor="var(--grey-700)"
          />
          <FormField
            id="registroConselho"
            label="Nº Registro no Conselho"
            value={form.registroConselho}
            onChange={handleChange}
            labelColor="var(--grey-700)"
          />
          <FormField
            id="especializacoes"
            label="Especializações"
            value={form.especializacoes}
            onChange={handleChange}
            labelColor="var(--grey-700)"
          />
        </Box>
      </section>

      {/* ===== CONTATO ===== */}
      <Box className={styles.section}>
        <Typography variant="h6">Contato</Typography>

        <Box className={styles.attachmentsGrid}>
          <FormField
            id="telefone"
            label="Telefone"
            value={form.telefone}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                telefone: formatPhone(e.target.value),
              }))
            }
            labelColor="var(--grey-700)"
          />
          <FormField
            id="celular"
            label="Celular"
            value={form.celular}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                celular: formatPhone(e.target.value),
              }))
            }
            labelColor="var(--grey-700)"
          />
          <FormField
            id="email"
            label="E-mail"
            type="email"
            value={form.email}
            onChange={handleChange}
            labelColor="var(--grey-700)"
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
            labelColor="var(--grey-700)"
          />
          <FormField
            id="numero"
            label="Número"
            value={form.numero}
            type="number"
            onChange={handleChange}
            labelColor="var(--grey-700)"
          />
          <FormField
            id="bairro"
            label="Bairro"
            value={form.bairro}
            onChange={handleChange}
            labelColor="var(--grey-700)"
          />
          <FormField
            id="municipio"
            label="Município"
            value={form.municipio}
            onChange={handleChange}
            labelColor="var(--grey-700)"
          />
          <FormField
            id="cep"
            label="CEP"
            value={form.cep}
            // onChange={handleChange}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, cep: formatCEP(e.target.value) }))
            }
            labelColor="var(--grey-700)"
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
          color="primary"
          disabled={!isFormValid}
          onClick={handleSubmit}
        >
          Salvar Cadastro
        </Button>
      </Box>
    </Box>
  );
}
