import { Flex, Text, Switch } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import Button from "./Button";
import SearchInput from "./SearchInput";
import SortSelect from "./SortSelect";

export interface SearchBarProps {
  query: string;
  sortOrder: string | undefined;
  isOnlyAvailable: boolean;
  setIsOnlyAvailable: Function;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSortSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
  onClearSettingClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const SearchBar = ({
  query,
  sortOrder,
  isOnlyAvailable,
  setIsOnlyAvailable,
  onChange,
  onSortSelect,
  onClearSettingClick,
}: SearchBarProps) => {
  return (
    <Flex h="100%" alignItems="center" gap="40px" pt="40px">
      <SearchInput value={query} onChange={onChange} />
      <SortSelect value={sortOrder} onChange={onSortSelect} />
      <Button w="160px" onClick={onClearSettingClick}>
        Clear Settings
      </Button>
      <Text>Show only Available products</Text>
      <Switch
        id="isOnlyAvailable"
        isChecked={isOnlyAvailable}
        onChange={() => setIsOnlyAvailable((state: boolean) => !state)}
      />
    </Flex>
  );
};

export default SearchBar;
