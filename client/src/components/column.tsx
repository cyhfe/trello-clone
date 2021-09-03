import React, { useRef } from "react";
import styled from "styled-components";
import { useAppState } from "../state/AppStateContext";
import Card from "./card";
import AddNewItem from "./addNewItem";
import { addTask, moveList, moveTask, setDraggedItem } from "../state/actions";
import { useItemDrag } from "../utils/useItemGrag";
import { useDrop } from "react-dnd";
import { DragPreviewContainer } from "../styles";
import { isHidden } from "../utils/isHidden";

const ColumnWrap = styled.div`
  min-width: 320px;
  width: 320px;
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
  isPreview?: boolean;
};

const Column = ({ id, text, isPreview }: ColumnProps) => {
  const { getTasksByListId, dispatch, draggedItem } = useAppState();
  const tasks = getTasksByListId(id);
  const ref = useRef<HTMLDivElement>(null);
  const { drag } = useItemDrag({ id, text, type: "COLUMN" });
  const [, drop] = useDrop({
    accept: ["COLUMN", "CARD"],
    hover() {
      if (!draggedItem) return;
      if (draggedItem.type === "COLUMN") {
        if (draggedItem.id === id) return;
        dispatch(moveList(draggedItem.id, id));
        return;
      }
      if (draggedItem.type === "CARD") {
        if (draggedItem.columnId === id) return;
        if (tasks.length) return;
        dispatch(moveTask(draggedItem.id, null, draggedItem.columnId, id));
        dispatch(setDraggedItem({ ...draggedItem, columnId: id }));
      }
    },
  });
  drag(drop(ref));
  return (
    <ColumnWrap>
      <ColumnContainer
        ref={ref}
        isHidden={isHidden(draggedItem, "COLUMN", id, isPreview)}
        isPreview={isPreview}
      >
        <Title>{text}</Title>
        {tasks.map((task) => {
          return (
            <Card key={task.id} text={task.text} columnId={id} id={task.id} />
          );
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
