import { memo } from 'react'
import { Col } from './BootstrapComponents'

const AppPanel = () => (
  <Col>
    <div>Insert User</div>
    <div>Insert Company</div>
  </Col>
)

export default memo(AppPanel)
