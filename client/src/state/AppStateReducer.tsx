import { nanoid } from "nanoid";
import { Action } from "./actions";
import { AppState } from "./AppStateContext";

export const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "ADD_LIST": {
      const newLists = state.lists.slice();
      newLists.push({
        id: nanoid(),
        text: action.payload,
        tasks: [],
      });
      return {
        ...state,
        lists: newLists,
      };
    }

    case "ADD_TASK": {
      let newLists = state.lists.slice();
      newLists = newLists.map((list) => {
        if (list.id === action.payload.listId) {
          const newTasks = list.tasks.slice();
          newTasks.push({
            id: nanoid(),
            text: action.payload.text,
          });
          const newList = {
            ...list,
            tasks: newTasks,
          };
          return newList;
        } else {
          return list;
        }
      });
      return {
        ...state,
        lists: newLists,
      };
    }

    default:
      return state;
  }
};
