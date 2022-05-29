import { memo, FC } from 'react';
import User from './User'
import { IUsers } from "../Types";
import styled from "styled-components";



const UserList: FC<{ users: IUsers }> = ({ users }) => (
  <UserListWrapper>
    {users.map(user => <User key={user.id} {...user} />)}
  </UserListWrapper>
)

export default memo(UserList)

const UserListWrapper = styled.div`
  padding: 20px 20px 5px 5px ;
  height: 400px;
  overflow: auto;
  border: solid 1px lightgray;
  border-radius: 3px;
`
