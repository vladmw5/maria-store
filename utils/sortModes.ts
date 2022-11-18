const sortModes = {
  DEF: "",
  ASC: "asc",
  DESC: "desc",
};

export const mapSortModeToText = (sortMode: string) => {
  switch (sortMode) {
    case sortModes.ASC:
      return "Ascending";
    case sortModes.DESC:
      return "Descending";
    default:
      return "Default";
  }
};

export default sortModes;
