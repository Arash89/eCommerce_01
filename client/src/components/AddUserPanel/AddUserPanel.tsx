import { memo } from 'react'
import { Form, Input } from '../BootstrapComponents'
import AddUerDropDown from './AddUerDropDown'

const AddUserPanel = () => (
  <Form>
    <Input placeholder="User Name" />
    <Input placeholder="User Age" type="number" />
    <AddUerDropDown />
  </Form>
)

export default memo(AddUserPanel)
