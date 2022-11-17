import { useState, ChangeEvent } from "react";
import { FormControl, Stack, FormErrorMessage, Text } from "@chakra-ui/react";
import NextLink from "./NextLink";
import PasswordInput from "../components/PasswordInput";
import Input from "../components/Input";
import Button from "../components/Button";

const LoginForm = () => {
  const hasFailedToLogin = false; //TODO add Redux auth state

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    //TODO add Redux Dispatch
  };

  return (
    <FormControl isInvalid={hasFailedToLogin}>
      <Stack spacing={4} align="center">
        <Input
          placeholder="Enter Email"
          value={email}
          onChange={handleChange}
          name="email"
        />
        <PasswordInput value={password} onChange={handleChange} />
        <Stack spacing={2} align="center" w="100%">
          <Button type="submit" boxShadow="md" w="100%" onSubmit={handleSubmit}>
            Log In
          </Button>
          {hasFailedToLogin && (
            <FormErrorMessage>Invalid Credentials provided</FormErrorMessage>
          )}
        </Stack>
        <Text fontSize="sm">
          Don&apos;t have an account?{" "}
          <NextLink href={"/signup"}>Sign Up</NextLink>
        </Text>
      </Stack>
    </FormControl>
  );
};

export default LoginForm;
