import { Box, Flex, Text, Button, Image } from "@chakra-ui/react";
import { AddIcon, MinusIcon, CloseIcon } from "@chakra-ui/icons";
import { useQuery } from "react-query";
import { getProductByIdQuery } from "../service/mariaAPI";
import useCart from "../hooks/useCart";
import Loader from "./Loader";

export interface ProductInCartProps {
  id: string;
  quantity: number;
}

const ProductInCart = ({ id, quantity }: ProductInCartProps) => {
  const { addProduct, removeProduct, deleteProduct } = useCart();
  const { data, isLoading } = useQuery(["fetchProduct", id], async () => {
    if (typeof id === "string") {
      const data = await getProductByIdQuery(id);
      return data;
    }
  });
  return (
    <Box height="60px" bgColor="gray.200" px="40px" py="4px" rounded="4px">
      <Flex alignItems={"center"} h="100%" justifyContent="space-between">
        {isLoading ? (
          <Loader text="Fetching product data..." />
        ) : (
          <>
            <Flex alignItems={"center"} gap="8px">
              <Image
                src={data?.data.productBigImage}
                alt={data?.data.name}
                w="60px"
                h="40px"
                rounded="4px"
              />
              <Text fontSize="18px" as="b">
                {data?.data.name} x {quantity}
              </Text>
            </Flex>
            <Flex gap="20px" alignItems="center">
              <Text fontSize="18px" as="b">
                {data?.data.price * quantity}$
              </Text>
              <Flex gap="6px">
                {quantity < data?.data.stockAmount && (
                  <Button
                    bgColor="green.200"
                    _hover={{ bgColor: "green.300" }}
                    onClick={() => addProduct(data?.data._id)}
                  >
                    <AddIcon />
                  </Button>
                )}
                <Button
                  bgColor="red.200"
                  _hover={{ bgColor: "red.300" }}
                  onClick={() => removeProduct(data?.data._id)}
                >
                  <MinusIcon />
                </Button>
                <Button
                  bgColor="yellow.200"
                  _hover={{ bgColor: "yellow.300" }}
                  onClick={() => deleteProduct(data?.data._id)}
                >
                  <CloseIcon />
                </Button>
              </Flex>
            </Flex>
          </>
        )}
      </Flex>
    </Box>
  );
};

export default ProductInCart;
