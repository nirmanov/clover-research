import { StaticImageData } from "next/image";
import { InputHTMLAttributes, ChangeEventHandler } from "react";

export type SliderItemType = {
  imageSrc: StaticImageData;
  imageAlt: string;
};

export type CustomCheckboxType = {
  id: string;
  label: React.ReactNode;
  name: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

export type FormDataType = {
  name: string;
  phoneNumber: string;
  idea: string;
  files: FileList | null;
  agree: boolean;
};

export type SocialLinksType = {
  iconUrl: StaticImageData;
  name: string;
  link: string;
};

export type TextFieldPropsType = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  type: string;
  value?: string;
  name: string;
  className?: string;
};

export type ButtonPropsType = {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  className: string;
  onClick?: () => void;
  children?: React.ReactNode;
};

export type FileInputPropsType = {
  id: string;
  name: string;
  accept: string;
  multiple: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
};
