import { useCallback, useEffect, useState } from "react";

export type ApiHealth = "checking" | "online" | "offline";

export function useApiHealth() {
  const [status, setStatus] = useState<ApiHealth>("checking");
  const [refreshing, setRefreshing] = useState(false);

  const requestHealth = useCallback(async () => {
    const apiURL = process.env.EXPO_PUBLIC_API_URL ?? "http://localhost:3003";
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);

    try {
      const response = await fetch(`${apiURL}/health`, {
        cache: "no-store",
        signal: controller.signal,
      });
      setStatus(response.ok ? "online" : "offline");
    } catch {
      setStatus("offline");
    } finally {
      clearTimeout(timeout);
    }
  }, []);

  const check = useCallback(async () => {
    setRefreshing(true);
    await requestHealth();
    setRefreshing(false);
  }, [requestHealth]);

  useEffect(() => {
    const timer = setTimeout(() => void requestHealth(), 0);
    return () => clearTimeout(timer);
  }, [requestHealth]);

  return { check, refreshing, status };
}
