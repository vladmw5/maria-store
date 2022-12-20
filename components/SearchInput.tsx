import { ChangeEvent } from "react";
import { InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Input from "./Input";

export interface SearchInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <InputGroup size="md" w="fit-content">
      <InputLeftAddon roundedBottomRight={0} roundedTopRight={0} boxShadow="md">
        <SearchIcon />
      </InputLeftAddon>
      <Input
        value={value}
        onChange={onChange}
        placeholder="Search"
        roundedBottomLeft={0}
        roundedTopLeft={0}
        name="searchQuery"
        w="320px"
      />
    </InputGroup>
  );
};

export default SearchInput;
