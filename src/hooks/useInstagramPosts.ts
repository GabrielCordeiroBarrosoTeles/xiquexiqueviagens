"use client";

import { useEffect, useState } from "react";
import type { InstagramFeedState } from "@/types/instagram";

const initialState: InstagramFeedState = {
  posts: [],
  source: "mock",
  loading: true,
  error: null,
};

export function useInstagramPosts() {
  const [state, setState] = useState<InstagramFeedState>(initialState);

  useEffect(() => {
    fetch("/api/instagram")
      .then((r) => r.json())
      .then((data) => setState({ ...data, loading: false, error: null }))
      .catch(() =>
        setState((s) => ({ ...s, loading: false, error: "Erro ao carregar posts" }))
      );
  }, []);

  return state;
}
