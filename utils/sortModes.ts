const sortModes = {
  DEF: undefined,
  ASC: "price",
  DESC: "name",
};

export const mapSortModeToText = (sortMode: string) => {
  switch (sortMode) {
    case sortModes.ASC:
      return "Price";
    case sortModes.DESC:
      return "Name";
    default:
      return "Default";
  }
};

export default sortModes;
