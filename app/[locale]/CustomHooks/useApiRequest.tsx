import { useState } from "react";
import baseApi from "../../../api/baseApi";

type MethodType = "get" | "post" | "put" | "delete" | "patch";

const useApiRequest = (endPoint: string, method: MethodType = "get") => {
  const [data, setData] = useState([]);
  const [fullData, setFullData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleRequest = (
    body: any,
    id: string | number,
    setSentIndices?: any,
    index?: number
  ) => {
    const endPointWithId = id ? `${endPoint}/${id}` : endPoint;
    setLoading(true);
    baseApi[method](endPointWithId, body)
      .then((res) => {
        setSuccessMessage(res?.data?.message);
        setLoading(false);
        setData(res.data?.data || res?.data || []);
        setFullData(res?.data);
        setSentIndices && setSentIndices((prev: any) => [...prev, index]);
        setSuccessMessage(res?.data?.message || "تمت العملية بنجاح");
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      })
      .catch((err) => {
        setLoading(false);
        if (err?.response?.data) {
          const message = err?.response?.data?.message;
          setErrorMessage(message || "هنالك خطأ ما");
        } else {
          setErrorMessage("الخادم لايستجيب تاكد من اتصالك بالانترنت");
        }
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      });
  };

  return {
    data,
    loading,
    request: handleRequest,
    successMessage,
    errorMessage,
    fullData,
    setData,
    setFullData,
  };
};

export default useApiRequest;
