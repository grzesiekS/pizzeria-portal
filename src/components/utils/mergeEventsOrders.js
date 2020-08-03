export const mergeEventsOrders = (array1, array2) => {
  const mergedArray = [];
  mergedArray.push(
    ...array1.map(data => (
      {...data, type:'event'}
    ))
  );

  mergedArray.push(
    ...array2.map(data => (
      {...data, type:'booking'}
    ))
  );
  return mergedArray;
};
