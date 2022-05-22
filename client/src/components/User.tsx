import { FC, memo } from "react";

import {
  Toast,
  ToastHeader,
  ToastBody,
  ToastStatus,
  ToastTitle,
  ToastCloseButton,
  CompanyLogo,
} from './BootstrapComponents';
import { IUser } from "./Types";
import { getCompaniesColor } from "./utils";

const User: FC<IUser> = ({
  id,
  firstName,
  age,
  companyName: companyId,
  companyNameString: { companyName, description } ,
}) => (
  <Toast>
    <ToastHeader className="toast-header">
      <CompanyLogo {...getCompaniesColor(companyName)} />
      <ToastTitle>{firstName}</ToastTitle>
      <ToastStatus>{companyName}</ToastStatus>
      <ToastCloseButton />
    </ToastHeader>
    <ToastBody>
      {description}
    </ToastBody>
  </Toast>
)

export default memo(User)
