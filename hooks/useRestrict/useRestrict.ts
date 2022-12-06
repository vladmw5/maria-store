import { useRouter } from "next/router";
import { useEffect } from "react";
import useLogin from "../useLogin";

const indexPage = "/";

const useRestrict = (redirectPage = indexPage) => {
  const { isLoggedIn } = useLogin();
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.replace(redirectPage);
    }
  }, [isLoggedIn, router, redirectPage]);
};

export default useRestrict;
