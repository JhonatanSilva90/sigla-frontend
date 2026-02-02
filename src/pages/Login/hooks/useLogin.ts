import { useState } from "react";

export function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();

    try {
      setLoading(true);

      // simulação de login (trocar pela API depois)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Email:", email);
      console.log("Senha:", password);
    } catch (error) {
      console.error("Erro no login", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    // state
    email,
    password,
    loading,

    // setters
    setEmail,
    setPassword,

    // actions
    handleSubmit,
  };
}
