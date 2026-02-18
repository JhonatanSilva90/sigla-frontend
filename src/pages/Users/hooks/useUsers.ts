import { useState, useMemo, useEffect } from "react";
import { listUsers, createUser } from "../api";
import type { UserDTO } from "../types";

const ROWS_PER_PAGE = 10;

export function useUsers() {
  const [nomeFilter, setNomeFilter] = useState("");
  const [cpfFilter, setCpfFilter] = useState("");
  const [emailFilter, setEmailFilter] = useState("");

  const [page, setPage] = useState(1);

  const [allUsers, setAllUsers] = useState<UserDTO[]>([]);

  useEffect(() => {
    let mounted = true;
    listUsers().then((u) => mounted && setAllUsers(u));
    return () => {
      mounted = false;
    };
  }, []);

  const filteredUsers = useMemo(() => {
    return allUsers.filter(
      (u) =>
        u.nome.toLowerCase().includes(nomeFilter.toLowerCase()) &&
        u.cpf.toLowerCase().includes(cpfFilter.toLowerCase()) &&
        u.email.toLowerCase().includes(emailFilter.toLowerCase()),
    );
  }, [allUsers, nomeFilter, cpfFilter, emailFilter]);

  const totalPages = Math.ceil(filteredUsers.length / ROWS_PER_PAGE);

  const paginatedUsers: UserDTO[] = filteredUsers.slice(
    (page - 1) * ROWS_PER_PAGE,
    page * ROWS_PER_PAGE,
  );

  async function addUser(user: Partial<UserDTO>) {
    const created = await createUser(user);
    setAllUsers((prev) => [...prev, created]);
  }

  return {
    // dados
    users: paginatedUsers,
    totalPages,
    page,
    addUser,

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
