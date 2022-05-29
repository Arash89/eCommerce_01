import { memo } from 'react';
import { useQuery, gql } from '@apollo/client';
import UserList from './UserList';
import { Col } from "../BootstrapComponents";
import UserInput from "./UserInput";

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

const UserListContainer = () => {
  const { data = {getUsers: []} } = useQuery(GET_USERS_QUERY)

  const { getUsers: users } = data
  return (
    <Col>
      <UserInput />
      <UserList users={users} />
    </Col>
  )
}

export default memo(UserListContainer)
