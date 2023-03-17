import classNames from 'classnames/bind'

import styles from './Modal.module.scss'

const cx = classNames.bind(styles)

function Modal({ children, onCancel, onOk }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('content')}>{children}</div>
        <div className={cx('action')}>
          <button className={cx('btn-cancel')} onClick={onCancel}>
            Cancel
          </button>
          <button className={cx('btn-ok')} onClick={onOk}>
            Ok
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
