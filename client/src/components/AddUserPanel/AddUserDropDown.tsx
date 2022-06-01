import { memo, FC, useState } from 'react'
import { IAddUserDropDown } from '../Types'
import { DropDown, DropDownItem } from '../BootstrapComponents'
import styled from 'styled-components';


const handleClickCompany = ({ selectedCompanyName,  setSelectedCompanyName, selectedCompanyId, setSelectedCompanyId }) => {
  setSelectedCompanyName(selectedCompanyName)
  setSelectedCompanyId(selectedCompanyId)
}

const AddUserDropDown: FC<IAddUserDropDown> = ({ dropdownProps, companies = [] }) => {
  const [selectedCompanyName, setSelectedCompanyName] = useState('')
  const [selectedCompanyId, setSelectedCompanyId] = useState('')


  return (
    <AddUserDropDownWrapper dropdownTitle={!selectedCompanyName ? dropdownProps?.dropdownTitle : selectedCompanyName}>
      {companies.map(company => <DropDownItem onClick={() => handleClickCompany({ selectedCompanyName: company.companyName, setSelectedCompanyName, selectedCompanyId: company.id, setSelectedCompanyId })} key={company.id}>{company?.companyName}</DropDownItem>)}
    </AddUserDropDownWrapper>
  )
}

export default memo(AddUserDropDown)

const AddUserDropDownWrapper = styled(DropDown)`
  & button {
    min-width: 200px
  }
`
