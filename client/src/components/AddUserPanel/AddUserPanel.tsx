import { memo } from 'react'
import { Form, Input } from '../BootstrapComponents'
import AddUserDropDown from './AddUserDropDown'
import { CONSTANTS } from '../CONSTANTS'
import { useQuery } from '@apollo/client'
import { GET_COMPANIES_QUERY } from '../../graphql/queries'

const AddUserPanel = () => {
  const { data: { getCompanies: companies } = {} } = useQuery(GET_COMPANIES_QUERY)

  console.log(companies)

  return (
    <Form>
      <Input placeholder={CONSTANTS.userName} />
      <Input placeholder={CONSTANTS.userAge} type={CONSTANTS.number} />
      <AddUserDropDown dropdownProps={{dropdownTitle: "Companies"}} companies={companies} />
    </Form>
  )
}

export default memo(AddUserPanel)
