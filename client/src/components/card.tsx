import React, { useRef } from "react";
import styled from "styled-components";
import { useAppState } from "../state/AppStateContext";
import { DragPreviewContainer } from "../styles";
import { isHidden } from "../utils/isHidden";
import { useItemDrag } from "../utils/useItemGrag";
import { useDrop } from "react-dnd";
import { moveTask, setDraggedItem } from "../state/actions";

const CardContainer = styled(DragPreviewContainer)`
  width: ${(props) => (props.isPreview ? "276px" : null)};
  background-color: #fff;
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 3px;
  box-shadow: #091e4240 0.5px 1px 0px 0px;
`;

type CardProps = {
  id: string;
  columnId: string;
  text: string;
  isPreview?: boolean;
};

const Card = ({ id, text, columnId, isPreview }: CardProps) => {
  const { draggedItem, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);
  const { drag } = useItemDrag({
    id,
    text,
    columnId,
    type: "CARD",
  });

  const [, drop] = useDrop({
    accept: "CARD",
    hover() {
      if (!draggedItem) return;
      if (draggedItem.type !== "CARD") return;
      if (draggedItem.id === id) return;
      dispatch(moveTask(draggedItem.id, id, draggedItem.columnId, columnId));

      // card移动后还保持drag状态，需要更新draggedItem
      dispatch(setDraggedItem({ ...draggedItem, columnId }));
    },
  });

  drag(drop(ref));
  return (
    <CardContainer
      ref={ref}
      isPreview={isPreview}
      isHidden={isHidden(draggedItem, "CARD", id, isPreview)}
    >
      {text}
    </CardContainer>
  );
};

export default Card;
