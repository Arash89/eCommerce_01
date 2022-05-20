// @ts-nocheck
import { useQuery, gql } from '@apollo/client';
import UserList, { IUsers } from './UserList';

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
  console.log(data?.getUsers)

  const { getUsers: users } = data
  return <UserList users={users} />
}
