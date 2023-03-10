import classNames from 'classnames/bind'
import { Link, generatePath } from 'react-router-dom'
import routers from '../../configs/baseRoutes'

import styles from './Aside.module.scss'

const cx = classNames.bind(styles)

function AsideItem({ data }) {
  const date = new Date(data.created_at)
  return (
    <div className={cx('item')}>
      <Link to={generatePath(routers.post, { id: data.id, slug: data.title })} className={cx('link-img')}>
        <img src={data.avartar_cdn} alt={data.title} className={cx('image')} />
      </Link>
      <div className={cx('item-info')}>
        <Link to={generatePath(routers.post, { id: data.id, slug: data.title })} className={cx('link')}>
          {data.title}
        </Link>
        <span className={cx('time')}>
          {date.getHours() +
            ':' +
            date.getMinutes() +
            ' ' +
            date.getUTCDate() +
            '/' +
            (date.getUTCMonth() + 1) +
            '/' +
            date.getFullYear()}
        </span>
      </div>
    </div>
  )
}

export default AsideItem
