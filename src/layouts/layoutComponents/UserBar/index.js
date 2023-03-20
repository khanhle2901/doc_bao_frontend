import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Menu from './Menu'

import styles from './UserBar.module.scss'

const cx = classNames.bind(styles)

function UserBar() {
  const user = useSelector((state) => state.user)
  const [isShowMenu, setIsShowMenu] = useState(false)

  useEffect(() => {
    setIsShowMenu(false)
  }, [user.id])

  return (
    <div className={cx('wrapper')} onClick={() => setIsShowMenu(!isShowMenu)}>
      {user.id ? (
        <div className={cx('user')}>
          <img className={cx('user-avartar')} src={user.avartarCDN} alt={user.name} />
        </div>
      ) : (
        <div className={cx('action-button', { active: isShowMenu })}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      )}
      {isShowMenu && <Menu />}
    </div>
  )
}

export default UserBar
