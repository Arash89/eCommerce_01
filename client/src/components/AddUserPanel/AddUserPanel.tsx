import { memo, useState } from 'react'
import { Button, Form, Input } from '../BootstrapComponents'
import AddUserDropDown from './AddUserDropDown'
import { CONSTANTS } from '../CONSTANTS'
import { useQuery, useMutation } from '@apollo/client'
import { GET_COMPANIES_QUERY, ADD_USER_MUTATION } from '../../graphql/queries'
import styled from 'styled-components'

export interface IHandleClick {
  firstName: string,
  age: number,
  companyName: string,
}

const useHandleClickAddUser = ({ firstName, age, companyName } : IHandleClick) => {
  useMutation(ADD_USER_MUTATION, {
    variables: {
      firstName,
      age,
      companyName,
    }
  })
  return undefined
}

const AddUserPanel = () => {
  const { data: { getCompanies: companies } = {} } = useQuery(GET_COMPANIES_QUERY)
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>(0);

  console.log(companies)

  return (
    <Form>
      <Input placeholder={CONSTANTS.userName} />
      <Input placeholder={CONSTANTS.userAge} type={CONSTANTS.number} />
      <AddUserDropDown dropdownProps={{dropdownTitle: "Companies"}} companies={companies} />
      <AddUserButton className="btn-primary" onClick={() => useHandleClickAddUser({})}>Add User</AddUserButton>
    </Form>
  )
}

export const AddUserButton = styled(Button)`
  margin-left: 20px;
`

export default memo(AddUserPanel)
