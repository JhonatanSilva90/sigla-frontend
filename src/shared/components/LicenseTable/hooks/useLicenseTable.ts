import { useMemo, useState } from "react";
import { LICENSES_MOCK } from "../mocks/licenses.mock";
import type { LicenseStatus } from "../types";

const ROWS_PER_PAGE = 10;

export function useLicenseTable() {
  const [status, setStatus] = useState<LicenseStatus | "TODOS">("TODOS");
  const [page, setPage] = useState(1);

  const filteredData = useMemo(() => {
    return status === "TODOS"
      ? LICENSES_MOCK
      : LICENSES_MOCK.filter((item) => item.status === status);
  }, [status]);

  const totalPages = Math.ceil(filteredData.length / ROWS_PER_PAGE);

  const data = useMemo(() => {
    const start = (page - 1) * ROWS_PER_PAGE;
    return filteredData.slice(start, start + ROWS_PER_PAGE);
  }, [filteredData, page]);

  function handleSetStatus(value: LicenseStatus | "TODOS") {
    setStatus(value);
    setPage(1);
  }

  return {
    data,
    status,
    setStatus: handleSetStatus,
    page,
    setPage,
    totalPages,
  };
}
