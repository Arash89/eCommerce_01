import { memo, FC } from 'react'
import { IAddUserDropDown } from '../Types'
import { DropDown, DropDownItem } from '../BootstrapComponents'

// import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
// import $ from 'jquery';
// import Popper from 'popper.js';


const AddUserDropDown: FC<IAddUserDropDown> = ({ dropdownProps, companies = [] }) => (
  <DropDown dropdownTitle={dropdownProps?.dropdownTitle}>
    {companies.map(company => <DropDownItem key={company.id}>{company?.companyName}</DropDownItem>)}
  </DropDown>
)

export default memo(AddUserDropDown)
