import { memo, FC } from 'react'
import { IAddUserDropDown } from '../Types'
import { DropDown, DropDownItem } from '../BootstrapComponents'

const AddUserDropDown: FC<IAddUserDropDown> = ({ dropdownProps, companies = [] }) => (
  <DropDown dropdownTitle={dropdownProps?.dropdownTitle}>
    {companies.map(company => <DropDownItem key={company.id}>{company?.companyName}</DropDownItem>)}
  </DropDown>
)

export default memo(AddUserDropDown)
