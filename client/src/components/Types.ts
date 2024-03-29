import { ReactNode, MouseEventHandler } from "react";

export interface IUser {
  id: string;
  firstName: string;
  age: number;
  companyName: string;
  companyNameString: ICompanyName;
}

export interface ICompanyName {
  companyName: string;
  description: string;
}

export type IUsers = IUser[];

export interface IBootstrapProps {
  children?: ReactNode;
  className?: string;
  otherProps?: any;
}

export interface IBootstrapInputProps extends IBootstrapProps{
  type?: string;
  placeholder?: string;
  ariaLabel?: string;
}

export interface IBootstrapDropDownProps extends IBootstrapProps{
  dropdownTitle?: string;
  buttonType?: string;
  buttonId?: string;
}

export interface IBootstrapDropDownItem extends IBootstrapProps {
  href?: string;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
}

export interface ICompany extends IBootstrapDropDownItem {
  id: string;
  companyName: string;
  description: string;
}

export interface IAddUserDropDown {
  dropdownProps?: IBootstrapDropDownProps;
  companies: ICompany[];
}
