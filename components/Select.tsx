import { Select as ChakraSelect, SelectProps } from "@chakra-ui/react";

const Select = ({ children, ...props }: SelectProps) => {
  return (
    <ChakraSelect
      cursor="pointer"
      bgColor="white"
      boxShadow="md"
      borderColor="white"
      {...props}
    >
      {children}
    </ChakraSelect>
  );
};

export default Select;
