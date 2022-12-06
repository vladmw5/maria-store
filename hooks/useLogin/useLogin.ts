import { useSelector } from "react-redux";
import * as authSelectors from "../../redux/auth/auth.selectors";

const useLogin = () => {
  const token = useSelector(authSelectors.getToken);
  const isLoggingIn = useSelector(authSelectors.getIsLoggingIn);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isLoggingOut = useSelector(authSelectors.getIsLoggingOut);
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);
  const hasLoginError = useSelector(authSelectors.getHasLoginError);
  const hasLogoutError = useSelector(authSelectors.getHasLogoutError);
  const hasRegisterError = useSelector(authSelectors.getHasRegisterError);

  return {
    token,
    isLoggedIn,
    isLoggingIn,
    isLoggingOut,
    isRefreshing,
    hasLoginError,
    hasLogoutError,
    hasRegisterError,
  };
};

export default useLogin;
