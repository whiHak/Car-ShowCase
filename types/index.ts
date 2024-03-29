import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  btnStyles?: string;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarCardProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface CarDetailProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarCardProps;
}

export interface FilterProps {
  manufacturer: string;
  model: string;
  year: number;
  fuel: string;
  limit: number;
  searchParams: FilterProps;
}

export interface FetchProps {
  manufacturer: string;
  model: string;
  year: number;
  fuel: string;
  limit: number;
}

export interface OptionsProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionsProps[];
}

export interface ShowMoreProps{
  pageNumber: number;
  isNext: boolean
}