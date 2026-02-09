import { Logo } from "./Logo/Logo";
import { Box, Button, Link } from "@mui/material";
import styles from "./Login.module.scss";
import { FormField } from "@/shared/components/FormField";
import { useLogin } from "./hooks";

export function Login() {
  const { email, password, loading, setEmail, setPassword, handleSubmit } =
    useLogin();

  return (
    <Box className={styles.container}>
      <Box className={styles.box}>
        <Logo />

        <Box className={styles.containerInput}>
          <Box component="form" className={styles.form} onSubmit={handleSubmit}>
            <FormField
              id="email"
              label="E-mail"
              type="email"
              autoComplete="email"
              placeholder="joao@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <FormField
              id="password"
              label="Senha"
              type="password"
              placeholder="••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              variant="contained"
              color="success"
              disabled={loading}
              fullWidth
            >
              {loading ? "Entrando..." : "Entrar"}
            </Button>
          </Box>

          <Link
            component="button"
            onClick={() => console.log("Esqueceu senha")}
            sx={{ color: "white" }}
            underline="always"
          >
            Esqueceu sua senha?
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
