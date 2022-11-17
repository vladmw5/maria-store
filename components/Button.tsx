import { Button as ChakraButton } from "@chakra-ui/react";

const hoverAndFocusStyles = {
  bg: "blue.50",
};

const Button = ({ children, ...props }: any) => {
  return (
    <ChakraButton
      {...props}
      bg="gray.100"
      _hover={hoverAndFocusStyles}
      _focus={hoverAndFocusStyles}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
