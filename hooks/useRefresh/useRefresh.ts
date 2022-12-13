import { useEffect } from "react";
import { authHeader } from "../../service/mariaAPI";
import useLogin from "../useLogin";

const useRefresh = () => {
  const { token } = useLogin();
  useEffect(() => {
    if (token) {
      authHeader.set(token);
    }
  }, [token]);
};

export default useRefresh;
