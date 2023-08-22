import { CustomCheckboxType } from "@/types/types";
import "./Checkbox.css";

const CustomCheckbox: React.FC<CustomCheckboxType> = ({
  id,
  label,
  name,
  checked,
  onChange,
  ...props
}) => {
  const handleCheckboxChangeInternal = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (onChange) {
      onChange(event);
    }
  };
  return (
    <div
      className="custom-checkbox__wrapper"
      data-aos="fade-up"
      data-aos-once="true"
    >
      <input
        type="checkbox"
        checked={checked}
        id={id}
        name={name}
        onChange={handleCheckboxChangeInternal}
        {...props}
        className="custom-checkbox"
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default CustomCheckbox;
