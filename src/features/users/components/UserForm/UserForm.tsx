import {
  Box,
  Button,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { FormField } from "@/shared/components";
import styles from "./UserForm.module.scss";
import { useEffect, useState } from "react";
import { TechnicalResponsibleForm } from "../TechnicalResponsibleForm";
import { Role, ROLE_LABELS } from "@/shared/auth/roles";
import { allowedTargetsForCreator } from "@/shared/auth/roleUtils";
import { useCurrentUser } from "@/shared/auth/useCurrentUser";

export function UserForm() {
  const { role: currentUserRole } = useCurrentUser();

  const allowed = allowedTargetsForCreator(currentUserRole);

  const defaultTarget: Role | null = allowed.length > 0 ? allowed[0] : null;

  const [targetRole, setTargetRole] = useState<Role | null>(defaultTarget);

  useEffect(() => {
    setTargetRole(defaultTarget);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUserRole]);

  const [form, setForm] = useState({
    nome: "",
    email: "",
    cpf: "",
    formacao: "",
    numeroRegistro: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = e.target;
    setForm((p) => ({ ...p, [id]: value }));
  }

  function handleSubmit() {
    if (!targetRole) return console.warn("Sem permissão para criar usuários");
    console.log("Salvar usuário:", { ...form, role: targetRole });
  }

  const isFormValid = !!form.nome && !!form.email;

  if (!targetRole) {
    return (
      <Box className={styles.container}>
        <Typography variant="h5">
          Você não tem permissão para criar usuários.
        </Typography>
      </Box>
    );
  }

  return (
    <Box className={styles.container}>
      <Typography variant="h4" className={styles.title}>
        Cadastro de Usuário
      </Typography>

      <Box className={styles.section}>
        <FormControl fullWidth>
          <InputLabel id="target-role-label">Tipo de usuário</InputLabel>
          <Select
            labelId="target-role-label"
            label="Tipo de usuário"
            value={targetRole}
            onChange={(e) => setTargetRole(e.target.value as Role)}
          >
            {allowed.map((r) => (
              <MenuItem key={r} value={r}>
                {ROLE_LABELS[r]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {targetRole === "TECHNICAL_RESPONSIBLE" ? (
        <TechnicalResponsibleForm />
      ) : (
        <>
          <Box className={styles.section}>
            <FormField
              id="nome"
              label="Nome"
              value={form.nome}
              onChange={handleChange}
              labelColor="var(--grey-700)"
            />
            <FormField
              id="email"
              label="E-mail"
              value={form.email}
              onChange={handleChange}
              labelColor="var(--grey-700)"
            />
            <FormField
              id="cpf"
              label="CPF"
              value={form.cpf}
              onChange={handleChange}
              labelColor="var(--grey-700)"
            />
            <FormField
              id="formacao"
              label="Formação"
              value={form.formacao}
              onChange={handleChange}
              labelColor="var(--grey-700)"
            />
            <FormField
              id="numeroRegistro"
              label="Número de Registro"
              value={form.numeroRegistro}
              onChange={handleChange}
              labelColor="var(--grey-700)"
            />
          </Box>

          <Box className={styles.actions}>
            <Button
              variant="contained"
              disabled={!isFormValid}
              onClick={handleSubmit}
              size="large"
            >
              Salvar
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}
