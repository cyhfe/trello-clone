type AddListAction = {
  type: string;
  payload: string
};

type AddTaskAction = {
  type: string;
  payload: {
    listId: string;
    text: string;
  };
};
export type Action = AddListAction | AddTaskAction;

export const addList = (text: string): Action => {
  return {
    type: "ADD_LIST",
    payload: text,
  };
};

export const addTask = (text: string, listId: string): Action => {
  return {
    type: "ADD_TASK",
    payload: {
      text,
      listId,
    },
  };
};
