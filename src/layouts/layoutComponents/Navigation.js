import { useState, useEffect } from 'react'
import classNames from 'classnames/bind'

import styles from './scss/Navigation.module.scss'
import { NavLink } from 'react-router-dom'
import routes from '../../configs/baseRoutes'

const cx = classNames.bind(styles)

function Navigation() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    setCategories([
      { id: 1, slug: 'tai-chinh', data: 'Tài chính' },
      { id: 2, slug: 'the-thao', data: 'Thể thao' },
    ])
  }, [])

  return (
    <div className={cx('wrapper')}>
      <nav className={cx('navigation')}>
        {categories.map((item) => {
          return (
            <NavLink
              key={item.id}
              to={routes.category.replace(':slug', item.slug)}
              className={(nav) => cx('nav-item', { active: nav.isActive })}
            >
              <span className={cx('nav-title')}>{item.data}</span>
            </NavLink>
          )
        })}
      </nav>
    </div>
  )
}

export default Navigation
