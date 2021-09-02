import React, { useRef } from "react";
import styled from "styled-components";
import { useAppState } from "../state/AppStateContext";
import Card from "./card";
import AddNewItem from "./addNewItem";
import { addTask, moveList } from "../state/actions";
import { useItemDrag } from "../utils/useItemGrag";
import { useDrop } from "react-dnd";
import { DragPreviewContainer } from "../styles";
import { isHidden } from "../utils/isHidden";

const ColumnWrap = styled.div`
  min-width: 320px;
  padding-right: 20px;
`;

const ColumnContainer = styled(DragPreviewContainer)`
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
  const { getTasksByListId, dispatch, draggedItem } = useAppState();
  const tasks = getTasksByListId(id);
  const ref = useRef<HTMLDivElement>(null);
  const { drag } = useItemDrag({ id, text, type: "COLUMN" });
  const [, drop] = useDrop({
    accept: "COLUMN",
    hover() {
      if (!draggedItem) return;
      if (draggedItem.type === "COLUMN") {
        if (draggedItem.id === id) return;
        dispatch(moveList(draggedItem.id, id));
      }
    },
  });
  drag(drop(ref));
  return (
    <ColumnWrap>
      <ColumnContainer ref={ref} isHidden={isHidden(draggedItem, "COLUMN", id)}>
        <Title>{text}</Title>
        {tasks.map((task) => {
          return <Card key={task.id} text={task.text} />;
        })}
        <AddNewItem toggleButtonText={"+ add another item"} onAdd={(text) => dispatch(addTask(text, id))} dark />
      </ColumnContainer>
    </ColumnWrap>
  );
};

export default Column;
