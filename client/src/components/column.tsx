import React from "react";
import styled from "styled-components";

const ColumnWrap = styled.div`
  min-width: 320px;
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

type ColumnProps = {
  text: string,
  children?: React.ReactNode
}

const Column = ({text, children}: ColumnProps) => {
  return (
    <ColumnWrap>
      <ColumnContainer>
      <Title>{text}</Title>
      {children}
      </ColumnContainer>
    </ColumnWrap>
  );
};

export default Column;
