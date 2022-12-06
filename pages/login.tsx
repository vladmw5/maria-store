import Head from "next/head";
import { Center, Stack, Text } from "@chakra-ui/react";

import Logo from "../components/Logo";
import LoginForm from "../components/LoginForm";
import Layout from "../components/Layout";
import useRestrict from "../hooks/useRestrict";

const Login = () => {
  useRestrict();
  return (
    <>
      <Head>
        <title>Log In</title>
      </Head>
      <Layout>
        <Center h="calc(100vh) - 80px" bgColor="gray.50" pt={"60px"}>
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
                Authorization
              </Text>
              <Logo />
            </Stack>
            <LoginForm />
          </Stack>
        </Center>
      </Layout>
    </>
  );
};

export default Login;
