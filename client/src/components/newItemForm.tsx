import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useFocus } from "../utils/useFocus";
const Container = styled.div`
  min-width: 276px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ced4da;
  border-radius: 3px;

  &:focus {
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
  }
  margin-bottom: 0.5rem;
`;

type ButtonProps = {
  primary?: boolean;
  danger?: boolean;
};

const Button = styled.button<ButtonProps>`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  border-radius: 3px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  padding: 0.15rem 0.35rem;
  margin-left: 10px;
  ${(props) =>
    props.primary &&
    css`
      color: #fff;
      background-color: #1890ff;
      border-color: #1890ff;
    `}
  ${(props) =>
    props.danger &&
    css`
      color: #fff;
      background-color: #ff4d4f;
      border-color: #ff4d4f;
    `}
`;

const Control = styled.div`
  display: flex;
  justify-content: flex-end;
`;

type NewItemFormProps = {
  onCancel(): void;
  onAdd(text: string): void;
};

const NewItemForm = ({ onCancel, onAdd }: NewItemFormProps) => {
  const [text, setText] = useState("");
  const inputRef = useFocus();
  const handleAddText = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onAdd(text);
    }
  };
  return (
    <Container>
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        ref={inputRef}
        onKeyPress={handleAddText}
      />
      <Control>
        <Button primary onClick={() => onAdd(text)}>
          Create
        </Button>
        <Button danger onClick={onCancel}>
          Cancel
        </Button>
      </Control>
    </Container>
  );
};

export default NewItemForm;
