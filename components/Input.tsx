import { Input as ChakraInput } from "@chakra-ui/react";

const Input = ({ ...props }) => {
  return (
    <ChakraInput
      {...props}
      bgColor="white"
      boxShadow="md"
      borderColor="white"
    ></ChakraInput>
  );
};

export default Input;
