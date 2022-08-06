import { memo } from 'react';
import { useQuery, gql } from '@apollo/client';
import UserList from './UserList';
import { Col } from "../BootstrapComponents";
import UserInput from './UserInput'
import { GET_USERS_QUERY } from '../../graphql/queries'

const UserListContainer = () => {
  const { data = {getUsers: []} } = useQuery(GET_USERS_QUERY)

  console.log('Arash Data: ', data)

  const { getUsers: users } = data
  return (
    <Col>
      <UserInput />
      <UserList users={users} />
    </Col>
  )
}

export default memo(UserListContainer)
