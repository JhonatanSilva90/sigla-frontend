import { useState, useMemo } from "react";
import { USER_MOCK } from "../mocks/user.mock";
import type { UserDTO } from "../types";

const ROWS_PER_PAGE = 5;

export function useUsers() {
  const [nomeFilter, setNomeFilter] = useState("");
  const [cpfFilter, setCpfFilter] = useState("");
  const [emailFilter, setEmailFilter] = useState("");

  const [page, setPage] = useState(1);

  const filteredUsers = useMemo(() => {
    return USER_MOCK.filter(
      (u) =>
        u.nome.toLowerCase().includes(nomeFilter.toLowerCase()) &&
        u.cpf.toLowerCase().includes(cpfFilter.toLowerCase()) &&
        u.email.toLowerCase().includes(emailFilter.toLowerCase()),
    );
  }, [nomeFilter, cpfFilter, emailFilter]);

  const totalPages = Math.ceil(filteredUsers.length / ROWS_PER_PAGE);

  const paginatedUsers: UserDTO[] = filteredUsers.slice(
    (page - 1) * ROWS_PER_PAGE,
    page * ROWS_PER_PAGE,
  );

  return {
    // dados
    users: paginatedUsers,
    totalPages,
    page,

    // filtros
    nomeFilter,
    cpfFilter,
    emailFilter,

    // handlers
    setNomeFilter,
    setCpfFilter,
    setEmailFilter,
    setPage,
  };
}
