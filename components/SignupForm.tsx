import { useState, ChangeEvent } from "react";
import { FormControl, Stack, FormErrorMessage, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import NextLink from "./NextLink";
import PasswordInput from "../components/PasswordInput";
import Input from "../components/Input";
import Button from "../components/Button";
import useLogin from "../hooks/useLogin";
import { register } from "../redux/auth/auth.operations";

const SignupForm = () => {
  const dispatch = useDispatch();
  const { hasRegisterError: hasFailedToLogin } = useLogin();

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

    dispatch(register({ email, password }) as unknown as AnyAction);
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
          <Button type="submit" boxShadow="md" w="100%" onClick={handleSubmit}>
            Sign Up
          </Button>
          {hasFailedToLogin && (
            <FormErrorMessage>Registration Error</FormErrorMessage>
          )}
        </Stack>
        <Text fontSize="sm">
          Already have an account? <NextLink href={"/login"}>Log In</NextLink>
        </Text>
      </Stack>
    </FormControl>
  );
};

export default SignupForm;
