import { useState } from "react";

export function useTracker() {
  const [loading, setLoading] = useState(false);

  async function refresh() {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 400));
    setLoading(false);
  }

  return { loading, refresh } as const;
}
