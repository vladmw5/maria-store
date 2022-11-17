import NavLink from "./NavLink";
import { Flex } from "@chakra-ui/react";

const Navbar = () => {
  const isLoggedIn = false; //TODO Add Auth selector

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
        <NavLink href={"/logout"} exact>
          Log Out
        </NavLink>
      )}
    </Flex>
  );
};

export default Navbar;
