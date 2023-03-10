import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import { generatePath } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import routers from '../../configs/baseRoutes'
import styles from './Home.module.scss'

const Aside = lazy(() => import('../../components/Aside'))

const cx = classNames.bind(styles)

function Home() {
  return (
    <div className={cx('home')}>
      <div className={cx('main')}></div>
      <aside className={cx('aside')}>
        <Suspense>
          <Aside />
        </Suspense>
      </aside>
    </div>
  )
}

export default Home
