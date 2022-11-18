import { ChangeEvent } from "react";
import { Flex } from "@chakra-ui/react";
import Select from "./Select";
import sortModes, { mapSortModeToText } from "../utils/sortModes";

export interface SortSelectProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const SortSelect = ({ value, onChange }: SortSelectProps) => {
  return (
    <Select
      w="180px"
      placeholder="Sort by Price"
      value={value}
      onChange={onChange}
    >
      <option value={sortModes.ASC}>{mapSortModeToText(sortModes.ASC)}</option>
      <option value={sortModes.DESC}>Descending</option>
    </Select>
  );
};

export default SortSelect;
