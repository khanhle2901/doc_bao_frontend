import { faCheck, faExclamation, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'

import styles from './Toast.module.scss'

const cx = classNames.bind(styles)

function ToastItem({ type, message }) {
  return (
    <div className={cx('item', { error: type === 'error' })}>
      {type === 'success' && (
        <div className={cx('icon')}>
          <FontAwesomeIcon icon={faCheck} />
        </div>
      )}
      {type === 'warn' && (
        <div className={cx('icon')}>
          <FontAwesomeIcon icon={faExclamation} />
        </div>
      )}
      {type === 'error' && (
        <div className={cx('icon')}>
          <FontAwesomeIcon icon={faTriangleExclamation} />
        </div>
      )}
      <div className={cx('message')}>{message}</div>
    </div>
  )
}

export default ToastItem
