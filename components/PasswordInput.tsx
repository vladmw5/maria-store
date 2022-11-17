import { useState, ChangeEvent } from "react";
import { InputGroup, InputRightAddon } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import Input from "./Input";
import Button from "./Button";

interface PasswordInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput = ({ value, onChange }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPasswordBtnClick = () => {
    setShowPassword((state) => !state);
  };

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={showPassword ? "text" : "password"}
        placeholder="Enter password"
        roundedBottomRight={0}
        roundedTopRight={0}
        value={value}
        name="password"
        onChange={onChange}
      />
      <InputRightAddon
        p={0}
        roundedBottomLeft={0}
        roundedTopLeft={0}
        boxShadow="md"
      >
        <Button
          onClick={handleShowPasswordBtnClick}
          roundedBottomLeft={0}
          roundedTopLeft={0}
        >
          {showPassword ? <ViewOffIcon /> : <ViewIcon />}
        </Button>
      </InputRightAddon>
    </InputGroup>
  );
};

export default PasswordInput;
