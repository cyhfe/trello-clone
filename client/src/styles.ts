import styled from "styled-components";

type DragPreviewContainerProps = {
  isHidden?: boolean;
  isPreview?: boolean;
};

export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
  opacity: ${(props) => (props.isHidden ? 0 : 1)};
  transform: ${(props) => (props.isPreview ? `rotate(5deg)` : null)};
`;

export const CustomDragLayerContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  pointer-events: none;
  z-index: 100;
`;

type DragPreviewWrapProps = {
  position: {
    x: number;
    y: number;
  };
};

export const DragPreviewWrap = styled.div.attrs<DragPreviewWrapProps>(
  (props) => ({
    style: {
      transform: `translate(${props.position.x}px,${props.position.y}px)`,
    },
  })
)<DragPreviewWrapProps>``;
