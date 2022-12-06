import { useRouter } from "next/router";
import { useEffect } from "react";
import useLogin from "../useLogin";

const loginPage = "/login";

const useAuth = (redirectPage = loginPage) => {
  const { isLoggedIn } = useLogin();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace(redirectPage);
    }
  }, [isLoggedIn, router, redirectPage]);
};

export default useAuth;
