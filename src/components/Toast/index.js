import classNames from 'classnames/bind'
import { useState, forwardRef, useImperativeHandle, useRef, memo, useEffect } from 'react'

import styles from './Toast.module.scss'
import ToastItem from './ToastItem'

const cx = classNames.bind(styles)

function Toast(props, ref) {
  const [toasts, setToasts] = useState([])
  const toastRef = useRef()
  const intervalRef = useRef()

  useImperativeHandle(ref, () => ({
    addToast({ title, message, type }) {
      setToasts((prev) => [
        ...prev,
        {
          title,
          message,
          type,
        },
      ])
    },
  }))

  // intervalRef.current = setInterval(() => {
  //   setToasts((prev) => {
  //     prev.shift()
  //     return [...prev]
  //   })
  // }, 5000)
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setToasts((prev) => {
        prev.shift()
        return [...prev]
      })
    }, 5000)
    return () => clearInterval(intervalRef.current)
  }, [])

  return (
    <div className={cx('wrapper')} ref={toastRef}>
      {toasts.map((toast, index) => (
        <ToastItem key={index} type={toast.type} message={toast.message + index} />
      ))}
    </div>
  )
}

export default memo(forwardRef(Toast))
