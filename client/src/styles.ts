import styled from "styled-components";

type DragPreviewContainerProps = {
  isHidden?: boolean;
};

export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
  opacity: ${(props) => (props.isHidden ? 0.3 : 1)};
`;
