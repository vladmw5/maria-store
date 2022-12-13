import { Flex } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import Button from "./Button";
import SearchInput from "./SearchInput";
import SortSelect from "./SortSelect";

export interface SearchBarProps {
  query: string;
  sortOrder: string | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSortSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
  onClearSettingClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const SearchBar = ({
  query,
  sortOrder,
  onChange,
  onSortSelect,
  onClearSettingClick,
}: SearchBarProps) => {
  return (
    <Flex h="120px" alignItems="center" gap="40px">
      <SearchInput value={query} onChange={onChange} />
      <SortSelect value={sortOrder} onChange={onSortSelect} />
      <Button w="180px" onClick={onClearSettingClick}>
        Clear Settings
      </Button>
    </Flex>
  );
};

export default SearchBar;
