const ADD_LIST = "ADD_LIST";
const ADD_TASK = "ADD_TASK";
const MOVE_LIST = "MOVE_LIST";

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
export type Action = AddListAction | AddTaskAction | MoveListAction;

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
