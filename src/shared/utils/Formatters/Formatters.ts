function onlyNumbers(value?: string | number): string {
  return String(value ?? "").replace(/\D/g, "");
}

/* CPF */

export function formatCPF(value?: string | number): string {
  const digits = onlyNumbers(value).slice(0, 11);

  return digits
    .replace(/^(\d{3})(\d)/, "$1.$2")
    .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1-$2");
}

/* CEP */

export function formatCEP(value?: string | number): string {
  const digits = onlyNumbers(value).slice(0, 8);

  return digits.replace(/^(\d{5})(\d)/, "$1-$2");
}

/* TELEFONE (fixo ou celular) */

export function formatPhone(value?: string | number): string {
  const digits = onlyNumbers(value).slice(0, 11);

  if (digits.length <= 10) {
    // (99) 9999-9999
    return digits
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  }

  // (99) 99999-9999
  return digits
    .replace(/^(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2");
}
