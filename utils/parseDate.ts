const parseDate = (date: string) => {
  return date
    .slice(0, date.length - 5)
    .split("T")
    .join(" ");
};

export default parseDate;
