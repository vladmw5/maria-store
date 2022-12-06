import Head from "next/head";
import { Center, Stack, Text } from "@chakra-ui/react";

import Logo from "../components/Logo";
import SignupForm from "../components/SignupForm";
import Layout from "../components/Layout";
import useRestrict from "../hooks/useRestrict";

const Signup = () => {
  useRestrict();
  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      <Layout>
        <Center h="calc(100vh) - 80px" bgColor="gray.50" pt="60px">
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
                Registration
              </Text>
              <Logo />
            </Stack>
            <SignupForm />
          </Stack>
        </Center>
      </Layout>
    </>
  );
};

export default Signup;
