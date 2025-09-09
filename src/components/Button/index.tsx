import React from "react";

interface Props {
  icon?: string;
  className?: string;
  text: string;
  variant?: "primary" | "secondary" | "danger";
  onClick?: () => void;
}

import "./styles.css";

const Button: React.FC<Props> = ({
  icon,
  text,
  className,
  variant = "primary",
  onClick,
}) => {
  return (
    <button className={`button ${variant} ${className}`} onClick={onClick}>
      {icon && <img src={icon} alt={text} height={20} width={20} />}
      {text}
    </button>
  );
};

export default Button;
