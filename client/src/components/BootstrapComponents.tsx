import { memo, FC } from 'react';
import classNames from 'classnames';
import styled from 'styled-components'
import { IBootstrapDropDownProps, IBootstrapInputProps, IBootstrapProps, IBootstrapDropDownItem } from './Types'

export const ButtonBootstrap: FC<IBootstrapProps> = memo(({ children, className, ...otherProps }) => (
  <button {...otherProps} type="button" className={classNames("btn", className)}>{children}</button>
))

export const ToastBootstrap: FC<IBootstrapProps> = memo(({ children, className, ...otherProps }) => (
  <div {...otherProps} className={classNames("toast", className)} role="alert" aria-live="assertive" aria-atomic="true">
    {children}
  </div>
))

export const ToastHeaderBootstrap: FC<IBootstrapProps> = memo(({ children, className, ...otherProps }) => (
  <div {...otherProps} className={classNames("toast-header", className)}>
    {children}
  </div>
))

export const ToastCloseButtonBootstrap: FC<IBootstrapProps> = memo(({ className, ...otherProps }) => (
  <button  type="button" className={classNames("ml-2", "mb-1", "close", className)} data-dismiss="toast" aria-label="Close" {...otherProps}>
    <span aria-hidden="true">&times;</span>
  </button>
))

export const ToastTitleBootstrap: FC<IBootstrapProps> = memo(({ children, className, ...otherProps }) => (
  <strong {...otherProps} className={classNames("mr-auto", className)}>
    {children}
  </strong>
))

export const ToastStatusBootstrap: FC<IBootstrapProps> = memo(({ children, className, ...otherProps }) => (
  <small {...otherProps} className={classNames("text-muted", className)}>
    {children}
  </small>
))

export const ToastBodyBootstrap: FC<IBootstrapProps> = memo(({ children, className, ...otherProps }) => (
  <div {...otherProps} className={classNames("toast-body", className)}>
    {children}
  </div>
))

export const ColBootstrap: FC<IBootstrapProps> = memo(({ children, className, ...otherProps }) => (
  <div {...otherProps} className={classNames("col", className)}>
    {children}
  </div>
))

export const FormBootstrap: FC<IBootstrapProps> = memo(({ children, className, ...otherProps }) => (
  <div {...otherProps} className={classNames("row g-3", className)} >
    {children}
  </div>
))

export const InputBootstrap: FC<IBootstrapInputProps> = memo(({ className, ariaLabel, placeholder, ...otherProps }) => (
  <input
    className="form-control"
    type="text"
    aria-label={ariaLabel}
    placeholder={placeholder}
    {...otherProps}
  />
))

export const DropDownBootstrap: FC<IBootstrapDropDownProps> = memo(({
  children,
  className,
  dropdownTitle,
  buttonType = "btn-secondary",
  buttonId,
  ...otherProps
}) => (
  <div {...otherProps} className={classNames("dropdown", className)} >
    <button
      className={classNames("btn", buttonType, "dropdown-toggle")}
      type="button"
      id={buttonId}
      data-toggle="dropdown"
      aria-expanded="false"
    >
      {dropdownTitle}
    </button>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      {children}
    </div>
  </div>
))


export const BootstrapDropDownItem: FC<IBootstrapDropDownItem> = memo(({ children, className, href = "#", onClick, ...otherProps }) => (
  <div onClick={onClick}>
    <a className="dropdown-item" href={href}>
      {children}
    </a>
  </div>
))

export const Form = styled(FormBootstrap)``

export const Button = styled(ButtonBootstrap)``

export const Toast = styled(ToastBootstrap)`
  opacity: 1
`
export const ToastHeader = styled(ToastHeaderBootstrap)``

export const ToastCloseButton = styled(ToastCloseButtonBootstrap)``

export const ToastTitle = styled(ToastTitleBootstrap)``

export const ToastStatus = styled(ToastStatusBootstrap)``

export const ToastBody = styled(ToastBodyBootstrap)``

export const Input = styled(InputBootstrap)``

export const DropDown = styled(DropDownBootstrap)``

export const DropDownItem = styled(BootstrapDropDownItem)``

export const Col = styled(ColBootstrap)``

interface IColor {
  red: number;
  green: number;
  blue: number;
}

export const CompanyLogo = styled.div`
  ${ ({ red = 0, green = 122, blue = 255 }: IColor) => (`
    width: 20px;
    height: 20px;
    border-radius: 4px;
    background: rgb(${red}, ${green}, ${blue});
    margin-right: 5px;
  `)}
`
