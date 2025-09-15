// hooks/useMultiGet.ts
import { useEffect, useRef } from "react";
import useGet from "./useGet";

type RequestConfig = {
  key: string;
  endpoint: string;
};

export const useMultiGet = (configs: RequestConfig[]) => {
  const resultsRef = useRef<Record<string, any>>({});

  configs.forEach(({ key, endpoint }) => {
    const [data, loading, getData] = useGet(endpoint);
    resultsRef.current[key] = {
      data,
      loading,
      getData,
    };
  });

  useEffect(() => {
    configs.forEach(({ key }) => {
      resultsRef.current[key]?.getData();
    });
  }, []);

  return resultsRef.current;
};
