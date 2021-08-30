import React from "react";
import styled from "styled-components";
import Card from "./card";

const ColumnWrap = styled.div`
  min-width: 300px;
  padding-right: 20px;
`;

const ColumnContainer = styled.div`
  border-radius: 3px;
  padding: 12px;
  background-color: #ebecf0;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;

const Column = () => {
  return (
    <ColumnWrap>
      <ColumnContainer>
      <Title>title</Title>
        <Card />
        <Card />
        <Card />
        <Card />
      </ColumnContainer>
    </ColumnWrap>
  );
};

export default Column;
