export const getItems = async ({ version = "11" }: { version?: string }) => {
  const itemsData = await import(`@/data/items/${version}.json`);
  return itemsData.data;
};
