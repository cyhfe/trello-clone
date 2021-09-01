import React from "react";
import styled from "styled-components";
import "./App.css";

import Column from "./components/column";
import AddNewItem from "./components/addNewItem";

import { useAppState } from "./state/AppStateContext";

const AppContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex: 0 0 320px;
  padding: 20px;
`;

function App() {
  const { lists } = useAppState();
  return (
    <AppContainer>
      {lists.map((list) => {
        return (
          <Column text={list.text} id={list.id} key={list.id}/>
        );
      })}
      <AddNewItem
        onAdd={(text) => console.log(text)}
        toggleButtonText="+ add another list"
      />
    </AppContainer>
  );
}

export default App;
