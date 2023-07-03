import React, { FC } from "react";

interface CardProps {
  id: number;
  title: string;
}
const Card: FC<CardProps> = ({ id, title }) => {
  return (
    <div key={id}>
      <p>{title}</p>
    </div>
  );
};

export default Card;
