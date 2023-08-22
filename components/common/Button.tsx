import React from "react";

export interface Props {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  className: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<Props> = ({
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
