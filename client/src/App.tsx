import React from "react";
import styled from "styled-components";
import "./App.css";

import Column from "./components/column";

const AppContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex: 0 0 300px;
  padding: 20px;
`;

function App() {
  return (
    <AppContainer>
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
    </AppContainer>
  );
}

export default App;
