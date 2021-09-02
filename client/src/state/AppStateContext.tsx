import { createContext, useContext, useReducer, FC } from "react";
import { appStateReducer } from "./AppStateReducer";
import { Action } from "./actions";
import { DragItem } from "../dragItem";

type Task = {
  id: string;
  text: string;
};

type List = {
  id: string;
  text: string;
  tasks: Task[];
};

export type AppState = {
  lists: List[];
  draggedItem: DragItem | null;
};

const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ id: "c0", text: "Generate app scaffold" }],
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "c2", text: "Learn Typescript" }],
    },
    {
      id: "2",
      text: "Done",
      tasks: [{ id: "c3", text: "Begin to use static typing" }],
    },
  ],
  draggedItem: null,
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

export const AppStateProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(appStateReducer, appData);
  const { lists, draggedItem } = state;
  const getTasksByListId = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || [];
  };
  return (
    <AppStateContext.Provider
      value={{ lists, draggedItem, getTasksByListId, dispatch }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContext);
};
