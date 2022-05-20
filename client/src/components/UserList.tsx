// @ts-nocheck
import { memo, FC } from 'react';

export interface IUser {
  id: string;
  firstName: string;
  age: number;
  companyId: string;
  companyName: ICompanyName;
}

export interface ICompanyName {
  companyName: string;
  description: string;
}

export type IUsers = IUser[];

const User: FC<IUser> = ({
  id,
  firstName,
  age,
  companyName: companyId,
  companyNameString: {companyName, description} ,
}) => (
  <div>
    <div>id: {id}</div>
    <div>firstName: {firstName}</div>
    <div>age: {age}</div>
    <div>companyName: {companyName}</div>
    <div>companyId: {companyId}</div>
    <div>description: {description}</div>
  </div>
)

const UserList: React.FC<IUser> = ({ users }) => (
  <>
    {users.map(user => <User key={user.id} {...user} />)}
  </>
)

export default memo(UserList)
