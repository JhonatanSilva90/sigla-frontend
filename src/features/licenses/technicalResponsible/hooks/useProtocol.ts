import { useState } from "react";

export function useProtocol() {
  const [loading, setLoading] = useState(false);

  async function submitProtocol(data: any) {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 500));
    setLoading(false);
    return { success: true };
  }

  return { loading, submitProtocol } as const;
}
