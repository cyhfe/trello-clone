export type ColumnDragItem = {
  id: string;
  text: string;
  type: "COLUMN";
};

export type CardDrageItem = {
  id: string;
  text: string;
  columnId: string;
  type: "CARD";
};

export type DragItem = ColumnDragItem | CardDrageItem
