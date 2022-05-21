// @ts-nocheck
import classNames from 'classnames';
import styled from 'styled-components'

export const ToastBootstrap = ({ children, className, ...otherProps }) => (
  <div {...otherProps} className={classNames("toast", className)} role="alert" aria-live="assertive" aria-atomic="true">
    {children}
  </div>
)

export const ToastHeaderBootstrap = ({ children, className, ...otherProps }) => (
  <div {...otherProps} className={classNames("toast-header", className)}>
    {children}
  </div>
)

export const ToastCloseButtonBootstrap = ({ className, ...otherProps }) => (
  <button  type="button" className={classNames("ml-2", "mb-1", "close", className)} data-dismiss="toast" aria-label="Close" {...otherProps}>
    <span aria-hidden="true">&times;</span>
  </button>
)

export const ToastTitleBootstrap = ({ children, className, ...otherProps }) => (
  <strong {...otherProps} className={classNames("mr-auto", className)}>
    {children}
  </strong>
)

export const ToastStatusBootstrap = ({ children, className, ...otherProps }) => (
  <small {...otherProps} className={classNames("text-muted", className)}>
    {children}
  </small>
)

export const ToastBodyBootstrap = ({ children, className, ...otherProps }) => (
  <div {...otherProps} className={classNames("toast-body", className)}>
    {children}
  </div>
)

export const Toast = styled(ToastBootstrap)`
  opacity: 1
`
export const ToastHeader = styled(ToastHeaderBootstrap)``

export const ToastCloseButton = styled(ToastCloseButtonBootstrap)``

export const ToastTitle = styled(ToastTitleBootstrap)``

export const ToastStatus = styled(ToastStatusBootstrap)``

export const ToastBody = styled(ToastBodyBootstrap)``
