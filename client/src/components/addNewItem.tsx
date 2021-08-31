import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-width: 276px;
  padding: 8px;
`;

type AddItemButtomProps = {
  dark?: boolean;
};

const AddItemButton = styled.button<AddItemButtomProps>`
  color: ${(props) => (props.dark ? "#000" : "#fff")};
`;

type AddNewItemProps = {
  toggleButtonText: string;
  onAdd(text: "string"): void;
  dark?: boolean;
};

const AddNewItem = (props: AddNewItemProps) => {
  return (
    <Container>
      <AddItemButton dark>+ addnewitem</AddItemButton>
    </Container>
  );
};

export default AddNewItem;
