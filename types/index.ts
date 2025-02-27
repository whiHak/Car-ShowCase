import { PhoneNumberJSON } from "@clerk/backend";
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  btnStyles?: string;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  disabled?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarCardProps {
  _id: string;
  make: string;
  model: string;
  drive: string;
  fuel: string;
  plate: string;
  price: string;
  cylinder: string;
  year: string;
  imageUrl1: string;
  imageUrl2?: string;
  imageUrl3?: string;
  imageUrl4?: string;
}

export interface CarDetailProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarCardProps;
}

export interface FilterProps {
  searchParams: Promise<{
    manufacturer?: string;
    model?: string;
    year?: string;
    fuel?: string;
    limit?: string;
  }>;
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

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export type CreateuserPrams = {
  clerkId: string;
  email: string;
  username: string;
  firstName?: string | null;
  lastName?: string | null;
  photo?: string;
};

export type UpdateUserParams = {
  firstName?: string | null
  lastName?: string | null
  username?: string
  photo?: string
}

export type Params = {
  params: Promise<{ id: string }>;
}
