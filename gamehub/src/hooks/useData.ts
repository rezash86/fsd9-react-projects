import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchResponse<T>>(endpoint)
      .then((res) => setData(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  return { data, error };
};

export default useData;
