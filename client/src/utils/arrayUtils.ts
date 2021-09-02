import {cloneDeep} from 'lodash'
type Item = {
  id: string;
};
export const findItemIndexById = <TItem extends Item>(
  items: TItem[],
  id: string
) => {
  return items.findIndex((item) => item.id === id);
};


const removeItemAtIndex = <TItem>(array: TItem[], from:number) => {
  const newArray = cloneDeep(array)
  return newArray.splice(from, 1)
}

const insertItemAtIndex = <TItem>(array:TItem[], item: TItem, index:number) => {
  const newArray = cloneDeep(array)
  return newArray.splice(index - 1, 0, item)
}

export const moveItem = <TItem>(array: TItem[], from: number, to: number) => {
  const item = array[from]
  return insertItemAtIndex(removeItemAtIndex(array, from), item, to)
}
