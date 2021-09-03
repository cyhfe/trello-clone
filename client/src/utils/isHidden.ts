import { DragItem } from "../dragItem";

export const isHidden = (
  draggedItem: DragItem | null,
  itemType: string,
  id: string,
  isPreview?: boolean
): boolean => {
  return Boolean(
    !isPreview && draggedItem && draggedItem.id === id && draggedItem.type === itemType
  );
};
