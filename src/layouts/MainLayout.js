import classNames from 'classnames/bind'

import Header from './layoutComponents/Header'
import styles from './MainLayout.module.scss'

const cx = classNames.bind(styles)

function MainLayout({ children }) {
  return (
    <div className='main'>
      <Header />
      <div className={cx('content')}>{children}</div>
    </div>
  )
}

export default MainLayout
