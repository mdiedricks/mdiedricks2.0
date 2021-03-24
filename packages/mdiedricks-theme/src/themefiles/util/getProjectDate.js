const getProjectDate = (date, option) => {
  const dateStr = new Date(date.toString());
  const getYear = dateStr.getFullYear();
  const getMonth = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
    dateStr
  );
  const getDate = dateStr.getDate();

  if (option === "year") {
    return `${getYear}`;
  }

  return `${getDate} ${getMonth} ${getYear}`;
};

export default getProjectDate;
