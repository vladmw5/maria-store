import Head from "next/head";
import { Center, Stack, Text } from "@chakra-ui/react";

import Logo from "../components/Logo";
import SignupForm from "../components/SignupForm";

const Signup = () => {
  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      <Center h="100vh" bgColor="gray.50">
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
    </>
  );
};

export default Signup;
