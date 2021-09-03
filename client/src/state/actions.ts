import { DragItem } from "../dragItem";

const ADD_LIST = "ADD_LIST";
const ADD_TASK = "ADD_TASK";
const MOVE_LIST = "MOVE_LIST";
const SET_DRAGGED_ITEM = "SET_DRAGGED_ITEM";
const MOVE_TASK = "MOVE_TASK";

type AddListAction = {
  type: "ADD_LIST";
  payload: string;
};

type AddTaskAction = {
  type: "ADD_TASK";
  payload: {
    listId: string;
    text: string;
  };
};

type MoveListAction = {
  type: "MOVE_LIST";
  payload: {
    draggedId: string;
    hoverId: string;
  };
};

type MoveTaskAction = {
  type: "MOVE_TASK";
  payload: {
    draggedItemId: string;
    hoveredItemId: string | null;
    sourceColumnId: string;
    targetColumnId: string;
  };
};

type SetDraggedItemAction = {
  type: "SET_DRAGGED_ITEM";
  payload: DragItem | null;
};

export type Action =
  | AddListAction
  | AddTaskAction
  | MoveListAction
  | SetDraggedItemAction
  | MoveTaskAction;

export const addList = (text: string): Action => {
  return {
    type: ADD_LIST,
    payload: text,
  };
};

export const addTask = (text: string, listId: string): Action => {
  return {
    type: ADD_TASK,
    payload: {
      text,
      listId,
    },
  };
};

export const moveList = (draggedId: string, hoverId: string): Action => {
  return {
    type: MOVE_LIST,
    payload: {
      draggedId,
      hoverId,
    },
  };
};

export const setDraggedItem = (draggedItem: DragItem | null): Action => {
  return {
    type: SET_DRAGGED_ITEM,
    payload: draggedItem,
  };
};

export const moveTask = (
  draggedItemId: string,
  hoveredItemId: string | null,
  sourceColumnId: string,
  targetColumnId: string
): Action => {
  return {
    type: MOVE_TASK,
    payload: {
      draggedItemId,
      hoveredItemId,
      sourceColumnId,
      targetColumnId,
    },
  };
};
