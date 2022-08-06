import { memo, FC, useState, Dispatch } from 'react'
import { IAddUserDropDown } from '../Types'
import { DropDown, DropDownItem } from '../BootstrapComponents'
import styled from 'styled-components';


interface IParHandleClickCompany {
  selectedCompanyName: string;
  setSelectedCompanyName: Dispatch<string>
  selectedCompanyId: string;
  setSelectedCompanyId: Dispatch<string>
}


const handleClickCompany = ({
  selectedCompanyName,
  setSelectedCompanyName,
  selectedCompanyId,
  setSelectedCompanyId,
}: IParHandleClickCompany) => {
  setSelectedCompanyName(selectedCompanyName)
  setSelectedCompanyId(selectedCompanyId)
}

const AddUserDropDown: FC<IAddUserDropDown> = ({ dropdownProps, companies = [] }) => {
  const [selectedCompanyName, setSelectedCompanyName] = useState('')
  const [selectedCompanyId, setSelectedCompanyId] = useState('')


  return (
    <AddUserDropDownWrapper dropdownTitle={!selectedCompanyName ? dropdownProps?.dropdownTitle : selectedCompanyName}>
      {
        companies.map(company =>
          <DropDownItem
            onClick={() => handleClickCompany({
              selectedCompanyName: company.companyName,
              setSelectedCompanyName,
              selectedCompanyId: company.id,
              setSelectedCompanyId
            })}
            key={company.id}
          >
            {company?.companyName}
          </DropDownItem>)
      }
    </AddUserDropDownWrapper>
  )
}

export default memo(AddUserDropDown)

const AddUserDropDownWrapper = styled(DropDown)`
  & button {
    min-width: 200px
  }
`
