import { nanoid } from "nanoid";
import { Action } from "./actions";
import { AppState } from "./AppStateContext";

export const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "ADD_LIST":
      console.log(action.payload)
      // const newLists = state.lists.slice();
      // newLists.push({
      //   id: nanoid(),
      //   text: action.payload,
      //   tasks: [],
      // });
      return {
        ...state,
        lists: newLists,
      };
    default:
      return state;
  }
};
