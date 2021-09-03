import { createContext, useContext, useReducer, useEffect } from "react";
import { appStateReducer } from "./AppStateReducer";
import { Action } from "./actions";
import { DragItem } from "../dragItem";
import { save } from "../api";
import { withInitialState } from "./withInitialState";

type Task = {
  id: string;
  text: string;
};

export type List = {
  id: string;
  text: string;
  tasks: Task[];
};

export type AppState = {
  lists: List[];
  draggedItem: DragItem | null;
};

type AppStateContextProps = {
  lists: List[];
  getTasksByListId(id: string): Task[];
  dispatch: React.Dispatch<Action>;
  draggedItem: DragItem | null;
};

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

type AppStateProviderProps = {
  children: React.ReactNode
  initialState: AppState
}

export const AppStateProvider = withInitialState<AppStateProviderProps>(
  ({ children, initialState }) => {
    const [state, dispatch] = useReducer(appStateReducer, initialState);
    const { lists, draggedItem } = state;
    const getTasksByListId = (id: string) => {
      return lists.find((list) => list.id === id)?.tasks || [];
    };

    useEffect(() => {
      save({
        lists: state.lists,
      });
    }, [state]);

    return (
      <AppStateContext.Provider
        value={{ lists, draggedItem, getTasksByListId, dispatch }}
      >
        {children}
      </AppStateContext.Provider>
    );
  }
);

export const useAppState = () => {
  return useContext(AppStateContext);
};
