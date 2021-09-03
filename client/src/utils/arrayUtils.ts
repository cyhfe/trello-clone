import { cloneDeep } from "lodash";
type Item = {
  id: string;
};
export const findItemIndexById = <TItem extends Item>(items: TItem[], id: string) => {
  return items.findIndex((item) => item.id === id);
};

const removeItemAtIndex = <TItem>(array: TItem[], index: number) => {
  // return [...array.slice(0, index), ...array.slice(index + 1)];
  const copiedArray = cloneDeep(array)
  copiedArray.splice(index, 1)
  return copiedArray
};

const insertItemAtIndex = <TItem>(array: TItem[], item: TItem, index: number) => {
  // return [...array.slice(0, index), item, ...array.slice(index)];
  const copiedArray = cloneDeep(array)
  copiedArray.splice(index, 0, item)
  return copiedArray
};

export const moveItem = <TItem>(array: TItem[], from: number, to: number) => {
  const item = array[from];
  return insertItemAtIndex(removeItemAtIndex(array, from), item, to);
};

