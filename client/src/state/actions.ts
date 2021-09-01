const ADD_LIST = "ADD_LIST";
const ADD_TASK = "ADD_TASK";

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
export type Action = AddListAction | AddTaskAction;

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
