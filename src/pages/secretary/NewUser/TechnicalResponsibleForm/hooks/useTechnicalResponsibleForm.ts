import { useState } from "react";
import * as Yup from "yup";

import {
  TechnicalResponsibleAttachments,
  TechnicalResponsibleFormValues,
} from "../types";
import { technicalResponsibleSchema } from "../schemas";
import { formatCPF, formatCEP, formatPhone } from "@/shared/utils/Formatters";

export function useTechnicalResponsibleForm() {
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

  const [errors, setErrors] = useState<Record<string, string>>({});

  /* ===== handlers ===== */

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  }

  function handleFormattedChange(
    field: keyof TechnicalResponsibleFormValues,
    value: string,
  ) {
    setForm((prev) => ({ ...prev, [field]: value }));
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
      await technicalResponsibleSchema.validate(form, {
        abortEarly: false,
      });

      setErrors({});
      console.log("Formulário válido:", form);
      // 👉 chamada de API aqui
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const validationErrors: Record<string, string> = {};
        err.inner.forEach((e) => {
          if (e.path) validationErrors[e.path] = e.message;
        });
        setErrors(validationErrors);
      }
    }
  }

  const isFormValid = Object.keys(errors).length === 0;

  return {
    form,
    errors,
    isFormValid,
    setForm,
    handleChange,
    handleFormattedChange,
    handleFileChange,
    handleSubmit,
    formatCPF,
    formatCEP,
    formatPhone,
  };
}
