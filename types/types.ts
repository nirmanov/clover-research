import { StaticImageData } from "next/image";

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
