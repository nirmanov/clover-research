import React from "react";
import { ButtonPropsType } from "@/types/types";

const Button: React.FC<ButtonPropsType> = ({
  isDisabled,
  btnType,
  className,
  children,
  onClick,
}) => {
  return (
    <button
      disabled={isDisabled}
      type={btnType || "button"}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
};

export default Button;
