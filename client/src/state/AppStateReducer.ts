import { nanoid } from "nanoid";
import { Action } from "./actions";
import { AppState } from "./AppStateContext";
import { findItemIndexById, moveItem } from "../utils/arrayUtils";
import { cloneDeep } from "lodash";
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
      let newLists = cloneDeep(state.lists);
      const targetIndex = findItemIndexById(newLists, action.payload.listId);
      const targetTasks = newLists[targetIndex].tasks;
      targetTasks.push({
        id: nanoid(),
        text: action.payload.text,
      });
      return {
        ...state,
        lists: newLists,
      };
    }

    case "MOVE_LIST": {
      const { draggedId, hoverId } = action.payload;
      const dragIndex = findItemIndexById(state.lists, draggedId);
      const hoverIndex = findItemIndexById(state.lists, hoverId);
      const newLists = moveItem(state.lists, dragIndex, hoverIndex);
      return {
        ...state,
        lists: newLists,
      };
    }

    case "SET_DRAGGED_ITEM": {
      const draggedItem = action.payload;
      return {
        ...state,
        draggedItem,
      };
    }

    default:
      return state;
  }
};
