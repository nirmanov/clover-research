import { InputHTMLAttributes } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type: string;
  value?: string;
  name: string;
  className?: string;
}

export function TextField({
  id,
  label,
  type,
  value,
  name,
  className,
  ...props
}: TextFieldProps) {
  return (
    <label htmlFor={id}>
      {label}
      <input
        id={id}
        type={type}
        value={value}
        name={name}
        {...props}
        className={className}
      />
    </label>
  );
}
