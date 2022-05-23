import { memo, FC } from 'react';
import classNames from 'classnames';
import styled from 'styled-components'
import { IBootstrapProps } from './Types'

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

export const Toast = styled(ToastBootstrap)`
  opacity: 1
`
export const ToastHeader = styled(ToastHeaderBootstrap)``

export const ToastCloseButton = styled(ToastCloseButtonBootstrap)``

export const ToastTitle = styled(ToastTitleBootstrap)``

export const ToastStatus = styled(ToastStatusBootstrap)``

export const ToastBody = styled(ToastBodyBootstrap)``

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
