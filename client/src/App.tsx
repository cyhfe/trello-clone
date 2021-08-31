import React from "react";
import styled from "styled-components";
import "./App.css";

import Column from "./components/column";
import Card from "./components/card";
import AddNewItem from "./components/addNewItem";

const AppContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex: 0 0 320px;
  padding: 20px;
`;

function App() {
  return (
    <AppContainer>
      <Column text="title">
        <Card />
        <AddNewItem dark onAdd={() => {}} toggleButtonText="add item" />
      </Column>
      <Column text="title">
        <Card />
        <Card />
        <Card />
        <AddNewItem dark onAdd={() => {}} toggleButtonText="add item" />
      </Column>
      <AddNewItem onAdd={() => {}} toggleButtonText="add list" />
    </AppContainer>
  );
}

export default App;
