import { useQuery, gql } from '@apollo/client';
import UserList from './UserList';

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
  return <UserList users={users} />
}
