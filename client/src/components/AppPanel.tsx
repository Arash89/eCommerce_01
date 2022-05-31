import { memo } from 'react'
import { Col } from './BootstrapComponents'
import AddUserPanel from './AddUserPanel/AddUserPanel'
import AddCompanyPanel  from './AddCompanyPanel/AddCompanyPanel'

const AppPanel = () => (
  <Col>
    <AddUserPanel />
    <AddCompanyPanel />
  </Col>
)

export default memo(AppPanel)
