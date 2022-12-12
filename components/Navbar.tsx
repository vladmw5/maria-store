import NavLink from "./NavLink";
import { Flex } from "@chakra-ui/react";

import useLogin from "../hooks/useLogin";
import { useDispatch } from "react-redux";
import { logout } from "../redux/auth/auth.operations";
import { AnyAction } from "@reduxjs/toolkit";
import Button from "./Button";

const Navbar = () => {
  const { isLoggedIn } = useLogin();
  const dispatch = useDispatch();

  const onLogoutClick = () => {
    dispatch(logout() as unknown as AnyAction);
  };

  return (
    <Flex alignItems="center" h="100%">
      <NavLink href={"/"} exact>
        Home
      </NavLink>
      {!isLoggedIn && (
        <NavLink href={"/signup"} exact>
          Sign Up
        </NavLink>
      )}
      {!isLoggedIn && (
        <NavLink href={"/login"} exact>
          Log In
        </NavLink>
      )}
      {isLoggedIn && (
        <NavLink href={"/cart"} exact>
          Cart
        </NavLink>
      )}
      {isLoggedIn && (
        <Button href={""} exact onClick={onLogoutClick}>
          Log Out
        </Button>
      )}
    </Flex>
  );
};

export default Navbar;
