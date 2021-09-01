import React from "react";
import styled from "styled-components";
import { useAppState } from "../state/AppStateContext";
import Card from "./card";
import AddNewItem from "./addNewItem";
import { addTask } from "../state/actions";
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
  id: string;
  text: string;
};

const Column = ({ id, text }: ColumnProps) => {
  const { getTasksByListId, dispatch } = useAppState();
  const tasks = getTasksByListId(id);
  return (
    <ColumnWrap>
      <ColumnContainer>
        <Title>{text}</Title>
        {tasks.map((task) => {
          return <Card key={task.id} text={task.text} />;
        })}
        <AddNewItem
          toggleButtonText={"+ add another item"}
          onAdd={(text) => dispatch(addTask(text, id))}
          dark
        />
      </ColumnContainer>
    </ColumnWrap>
  );
};

export default Column;
