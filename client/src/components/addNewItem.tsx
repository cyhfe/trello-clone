import React, { useState } from "react";
import NewItemForm from "./newItemForm";
import styled from "styled-components";

const Container = styled.div`
  min-width: 276px;
  padding: 8px;
  background-color: #ffffff3d;
  &:hover {
    background-color: #ffffff52;
  }
  border-radius: 3px;
  cursor: pointer;
`;

type AddItemButtomProps = {
  dark?: boolean;
};

const AddItemButton = styled.div<AddItemButtomProps>`
  color: ${(props) => (props.dark ? "#000" : "#fff")};
  text-align: left;
  transition: background 85ms ease-in;
`;

type AddNewItemProps = {
  toggleButtonText: string;
  onAdd(text: string): void;
  dark?: boolean;
};

const AddNewItem = (props: AddNewItemProps) => {
  const [showForm, setShowForm] = useState<boolean>(false);

  const handleCancel = () => {
    setShowForm(false);
  };

  const handleAdd = (text: string) => {
    setShowForm(false);
    props.onAdd(text);
  };
  
  if (showForm) {
    return <NewItemForm onCancel={handleCancel} onAdd={handleAdd} />;
  }

  return (
    <Container>
      <AddItemButton
        dark={props.dark}
        onClick={() => {
          setShowForm(true);
        }}
      >
        {props.toggleButtonText}
      </AddItemButton>
    </Container>
  );
};

export default AddNewItem;
