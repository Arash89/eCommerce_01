import {ReactNode} from "react";

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
