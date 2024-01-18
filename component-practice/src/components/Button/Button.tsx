import React from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger"; //you need to make it optional
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
