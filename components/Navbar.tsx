import NavLink from "./NavLink";
import { Flex } from "@chakra-ui/react";

import useLogin from "../hooks/useLogin";
import { useDispatch } from "react-redux";
import { logout } from "../redux/auth/auth.operations";
import { AnyAction } from "@reduxjs/toolkit";
import Button from "./Button";

const Navbar = () => {
  const { isLoggedIn, isAdmin } = useLogin();
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
      {isAdmin && (
        <NavLink href={"/products/create"} exact>
          Add Product
        </NavLink>
      )}
      {isAdmin && (
        <NavLink href={"/orders/list"} exact>
          Orders
        </NavLink>
      )}
      {isLoggedIn && <Button onClick={onLogoutClick}>Log Out</Button>}
    </Flex>
  );
};

export default Navbar;
