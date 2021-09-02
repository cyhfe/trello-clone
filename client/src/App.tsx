import React from "react";

import styled from "styled-components";

import Column from "./components/column";
import AddNewItem from "./components/addNewItem";
import { CustomDragLayer } from "./components/customDragLayer";

import { useAppState } from "./state/AppStateContext";
import { addList } from "./state/actions";

const AppContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex: 0 0 320px;
  padding: 20px;
`;

const AddListContainer = styled.div`
  padding-right: 20px;
`;

function App() {
  const { lists, dispatch } = useAppState();
  return (
    <AppContainer>
      <CustomDragLayer />
      {lists.map((list) => {
        return <Column text={list.text} id={list.id} key={list.id} />;
      })}
      <AddListContainer>
        <AddNewItem
          onAdd={(text) => dispatch(addList(text))}
          toggleButtonText="+ add another list"
        />
      </AddListContainer>
    </AppContainer>
  );
}

export default App;
