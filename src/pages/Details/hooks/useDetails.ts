import { LICENSES_MOCK } from "@/shared/components/LicenseTable/mocks/licenses.mock";

export function useDetails(id: string) {
  const license = LICENSES_MOCK.find((item) => item.id === id);

  return {
    license,
  };
}
