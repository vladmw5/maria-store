import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { forceLogout } from "../../redux/auth/auth.operations";

const parseErrorCode = (message: string) => message.slice(message.length - 3);

const useLogoutOnError = (error: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      if (parseErrorCode(error.message) === "401") {
        dispatch(forceLogout());
      }
    }
  }, [error, dispatch]);
};

export default useLogoutOnError;
