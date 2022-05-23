import { memo } from 'react';
import { useQuery, gql } from '@apollo/client';
import UserList from './UserList';
import { ColBootstrap } from "./BootstrapComponents";
import Input from "./Input";

const GET_USERS_QUERY = gql`
  query GetUsers {
    getUsers {
      id
      firstName
      age
      companyName
      companyNameString {
        companyName
        description
      }
    }
  }
`

export const UserListContainer = () => {
  const { data = {getUsers: []} } = useQuery(GET_USERS_QUERY)

  const { getUsers: users } = data
  return (
    <ColBootstrap>
      <Input />
      <UserList users={users} />
    </ColBootstrap>
  )
}

export default memo(UserListContainer)
