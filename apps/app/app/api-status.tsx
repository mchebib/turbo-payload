"use client";

import { useEffect, useState } from "react";

type ApiState = "checking" | "online" | "offline";

export function ApiStatus() {
  const [state, setState] = useState<ApiState>("checking");

  useEffect(() => {
    const controller = new AbortController();
    const apiURL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3003";

    fetch(`${apiURL}/health`, {
      cache: "no-store",
      signal: controller.signal,
    })
      .then((response) => {
        setState(response.ok ? "online" : "offline");
      })
      .catch(() => {
        if (!controller.signal.aborted) {
          setState("offline");
        }
      });

    return () => controller.abort();
  }, []);

  return (
    <span data-state={state}>
      <span aria-hidden="true" />
      API {state}
    </span>
  );
}
