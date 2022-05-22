import { memo, FC } from 'react';
import User from './User'
import { IUsers } from "./Types";



const UserList: FC<{ users: IUsers }> = ({ users }) => (
  <>
    {users.map(user => <User key={user.id} {...user} />)}
  </>
)

export default memo(UserList)
