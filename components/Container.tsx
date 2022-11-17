import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <Box w="1200px" px="15px" mx="auto" h="100%">
      {children}
    </Box>
  );
};

export default Container;
