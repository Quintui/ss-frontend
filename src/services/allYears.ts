const getAllYears = (earliestYear = 1890, currentYear = new Date().getFullYear()) => {
  const years = [];
  for (let i = currentYear; i >= earliestYear; i--) {
    years.push(i);
  }
  return years;
};

export const createArrayObjectOfAllYears = (
  value: string,
  earliestYear: number = 1890,
  currentYear: number = new Date().getFullYear(),
) => {
  const arrayOfYears = getAllYears(earliestYear, currentYear);

  const createArrayOfObjects = arrayOfYears.map((y) => {
    const data = {
      label: y.toString(),
      id: y.toString(),
      value: value,
    };
    return data;
  });

  return createArrayOfObjects;
};
