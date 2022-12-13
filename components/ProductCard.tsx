import { Stack, Box, Text, Image, Flex, Button } from "@chakra-ui/react";
import { AddIcon, MinusIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { Product } from "../service/model";
import Link from "next/link";
import mapMeasurement from "../utils/mapMeasurement";
import useLogin from "../hooks/useLogin";
import useCart from "../hooks/useCart";
import { useMutation, useQueryClient } from "react-query";
import { deleteProductQuery } from "../service/mariaAPI";

export interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { isAdmin } = useLogin();
  const queryClient = useQueryClient();
  const {
    addProduct,
    removeProduct,
    doesCartHaveTheItem,
    getQuantityOfTheItem,
  } = useCart();
  const deleteProductMutation = useMutation(
    async (id: string) => {
      await deleteProductQuery(id);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("getProducts");
      },
    }
  );
  return (
    <Stack
      height="280px"
      bgColor="white"
      boxShadow="md"
      rounded="4px"
      position="relative"
      overflow="hidden"
    >
      <Link href={`products/detail?_id=${product?._id}`}>
        <Image
          src={product?.productBigImage}
          alt={product?.name}
          width="100%"
          height="120px"
          cursor="pointer"
        />
      </Link>

      <Stack
        px="4px"
        pt="4px"
        pb="16px"
        height="100%"
        justifyContent="space-between"
      >
        <Flex alignItems="center">
          <Text fontSize="24px" mr="auto" as="b">
            {product?.name}{" "}
            {doesCartHaveTheItem(product?._id) &&
              `(${getQuantityOfTheItem(product?._id)})`}
          </Text>
          <Text fontSize="16px" as="b">
            {product?.price}$/{mapMeasurement(product?.measurement)}
          </Text>
        </Flex>
        <Flex justifyContent="flex-end" gap="6px">
          {product?.stockAmount > 0 &&
            getQuantityOfTheItem(product?._id) < product?.stockAmount && (
              <Button
                bgColor="green.100"
                _hover={{ bgColor: "green.200" }}
                onClick={() => addProduct(product?._id)}
              >
                <AddIcon />
              </Button>
            )}
          {doesCartHaveTheItem(product?._id) && (
            <Button
              bgColor="red.100"
              _hover={{ bgColor: "red.200" }}
              onClick={() => removeProduct(product?._id)}
            >
              <MinusIcon />
            </Button>
          )}
          {isAdmin && (
            <Link href={`products/change?_id=${product?._id}`}>
              <Button bgColor="blue.100" _hover={{ bgColor: "blue.200" }}>
                <EditIcon />
              </Button>
            </Link>
          )}
          {isAdmin && (
            <Button
              bgColor="purple.100"
              _hover={{ bgColor: "purple.200" }}
              onClick={() => deleteProductMutation.mutate(product?._id)}
            >
              <DeleteIcon />
            </Button>
          )}
        </Flex>
      </Stack>
      <Box
        position="absolute"
        bottom={0}
        height="4px"
        width="100%"
        bgColor={
          product?.stockAmount === 0 ||
          getQuantityOfTheItem(product?._id) >= product?.stockAmount
            ? "red.300"
            : "green.300"
        }
      ></Box>
    </Stack>
  );
};

export default ProductCard;
