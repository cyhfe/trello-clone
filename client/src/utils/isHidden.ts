import { DragItem } from "../dragItem";

export const isHidden = (
  draggedItem: DragItem | null,
  itemType: string,
  id: string,
  isPriew?: boolean
): boolean => {
  return Boolean(
    !isPriew && draggedItem && draggedItem.id === id && draggedItem.type === itemType
  );
};
