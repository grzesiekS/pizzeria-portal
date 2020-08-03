export const mergeEventsOrders = (events, booking) => {
  const mergedArray = [];
  mergedArray.push(
    ...events.map(data => (
      {...data, type:'event'}
    ))
  );

  mergedArray.push(
    ...booking.map(data => (
      {...data, type:'booking'}
    ))
  );
  return mergedArray;
};
