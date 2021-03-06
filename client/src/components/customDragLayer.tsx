import { useDragLayer } from "react-dnd";
import Column from "../components/column";
import { CustomDragLayerContainer } from "../styles";
import { useAppState } from "../state/AppStateContext";
import { DragPreviewWrap } from "../styles";
import Card from "./card";

export const CustomDragLayer = () => {
  const { draggedItem } = useAppState();
  const { currentOffset } = useDragLayer((monitor) => {
    return {
      currentOffset: monitor.getSourceClientOffset(),
    };
  });
  // return (
  //   <CustomDragLayerContainer>
  //     <DragPreviewWrap position={currentOffset}>
  //       <Column id={"0"} text={"s"} isPreview />
  //     </DragPreviewWrap>
  //   </CustomDragLayerContainer>
  // );
  return draggedItem && currentOffset ? (
    draggedItem.type === "COLUMN" ? (
      <CustomDragLayerContainer>
        <DragPreviewWrap position={currentOffset}>
          <Column
            id={draggedItem.id}
            text={draggedItem.text}
            isPreview
          />
        </DragPreviewWrap>
      </CustomDragLayerContainer>
    ) : (
      <CustomDragLayerContainer>
        <DragPreviewWrap position={currentOffset}>
          <Card
            id={draggedItem.id}
            text={draggedItem.text}
            columnId={draggedItem.columnId}
            isPreview
          />
        </DragPreviewWrap>
      </CustomDragLayerContainer>
    )
  ) : null;
};
