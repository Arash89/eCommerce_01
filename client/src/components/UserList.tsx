// @ts-nocheck
import { memo, FC } from 'react';
import styled from 'styled-components'

export interface IUser {
  id: string;
  firstName: string;
  age: number;
  companyId: string;
  companyName: ICompanyName;
}

export interface ICompanyName {
  companyName: string;
  description: string;
}

export type IUsers = IUser[];

export const CompanyLogo = styled.div`
  ${ ({ red = 0, green = 122, blue = 255 }) => (`
    width: 20px;
    height: 20px;
    border-radius: 4px;
    background: rgb(${red}, ${green}, ${blue});
    margin-right: 5px;
  `)}
`

const getCompaniesColor = (companyName) => {
  switch (companyName) {
    case "Google":
      return { red: 255, green: 122, blue: 0 }
    case "Adobe":
      return { red: 255, green: 40, blue: 70 }
    case "Intuit":
      return { red: 160, green: 122, blue: 255 }
    case "Amazon":
      return {red: 122, green: 255, blue: 0}
    default:
      return {red: 0, green: 122, blue: 255}
  }
}


const User: FC<IUser> = ({
  id,
  firstName,
  age,
  companyName: companyId,
  companyNameString: {companyName, description} ,
}) => (
  <div>

    <div style={{opacity: 1}} className="toast" role="alert" aria-live="assertive" aria-atomic="true">

    <div className="toast-header">
          <CompanyLogo {...getCompaniesColor(companyName)} />
          <strong className="mr-auto">{firstName}</strong>
          <small className="text-muted">{companyName}</small>
          <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
      </div>
      <div className="toast-body">
        {description}
      </div>
    </div>

  </div>
)

const UserList: React.FC<IUser> = ({ users }) => (
  <>
    {users.map(user => <User key={user.id} {...user} />)}
  </>
)

export default memo(UserList)
