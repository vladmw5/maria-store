import { Text } from "@chakra-ui/react";

export interface LoaderProps {
  text?: string;
  fz?: string | number;
}

const Loader = ({ text = "Loading...", fz = "10px" }: LoaderProps) => {
  return <Text fontSize={fz}>{text}</Text>;
};

export default Loader;
