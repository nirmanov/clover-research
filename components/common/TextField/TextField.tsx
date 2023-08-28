import { TextFieldPropsType } from "@/types/types";

export function TextField({
  id,
  label,
  type,
  value,
  name,
  className,
  ...props
}: TextFieldPropsType) {
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
