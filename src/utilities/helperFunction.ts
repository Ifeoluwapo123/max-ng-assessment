const sortMoviesByDate = (data: any[]) => {
  const sortedActivities = data.sort((a, b) => {
    const bDate = new Date(b.release_date);
    const aDate = new Date(a.release_date);
    return bDate.getTime() - aDate.getTime();
  });

  return sortedActivities;
};

const mapOutUnwantedFields = (data: any[], allNecessaryKeys: string[]) => {
  let result = {};

  return data.map((each: any) => {
    Object.keys(each).map((key) => {
      if (allNecessaryKeys.includes(key.toLowerCase())) {
        const res = {
          [key]: each[key],
        };

        result = { ...result, ...res };
      }
    });

    return result;
  });
};

export { sortMoviesByDate, mapOutUnwantedFields };
