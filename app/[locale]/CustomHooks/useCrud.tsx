import useApiRequest from "./useApiRequest";

const useCrud = (endpoint: string, params: string = "") => {
  const get = useApiRequest(`${endpoint}${params}`, "get");
  const post = useApiRequest(endpoint, "post");
  const put = useApiRequest(endpoint, "put");
  const del = useApiRequest(endpoint, "delete");

  const success =
    post.successMessage || put.successMessage || del.successMessage;
  const error = post.errorMessage || put.errorMessage || del.errorMessage;

  return {
    get,
    post,
    put,
    delete: del,
    success,
    error,
  };
};

export default useCrud;
