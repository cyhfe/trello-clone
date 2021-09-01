import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background-color: #fff;
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  max-width: 320px;
  border-radius: 3px;
  box-shadow: #091e4240 0.5px 1px 0px 0px;
`;

type CardProps = {
  text: string;
};

const Card = ({ text }: CardProps) => {
  return <CardContainer>{text}</CardContainer>;
};

export default Card;
