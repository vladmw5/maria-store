import Head from "next/head";
import { Center, Stack, Text } from "@chakra-ui/react";

import Layout from "../../components/Layout";
import useAuth from "../../hooks/useAuth";
import ProductForm from "../../components/ProductForm";

const ProductsCreatePage = () => {
  useAuth();
  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <Layout>
        <Center h="calc(100vh) - 80px" bgColor="gray.50" py={"8px"}>
          <Stack
            align="center"
            bgColor="gray.200"
            py={10}
            px={14}
            rounded="3xl"
            boxShadow="lg"
            spacing={8}
          >
            <Stack align="center">
              <Text fontSize="3xl" as="b" color="blackAlpha.800">
                Create New Product
              </Text>
            </Stack>
            <ProductForm />
          </Stack>
        </Center>
      </Layout>
    </>
  );
};

export default ProductsCreatePage;
