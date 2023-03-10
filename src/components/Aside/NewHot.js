import classNames from 'classnames/bind'

import { type as asideType } from './type'
import styles from './Aside.module.scss'
import { useLayoutEffect, useState } from 'react'
import AsideItem from './AsideItem'

const cx = classNames.bind(styles)

function NewHot({ type }) {
  const [title, setTitle] = useState('')
  const [data, setData] = useState([])
  // console.log(process.env.REACT_APP_API_URL + `/post/new`)
  useLayoutEffect(() => {
    switch (type) {
      case asideType.new:
        setTitle('MỚI')

        fetch(process.env.REACT_APP_API_URL + `/post/new`)
          .then((res) => res.json())
          .then((res) => {
            console.log(res.data)
            setData((prev) => res.data)
          })

        break
      case asideType.hot:
        setTitle('HOT')
        setData((prev) => [
          {
            id: 1,
            title:
              'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm',
            image: 'https://photo-baomoi.bmcdn.me/w300_r1x1_sm/2022_06_30_115_43036870/bf4c6ba68ce465ba3cf5.jpg',
            time: 1678354152476,
          },
          {
            id: 2,
            title: 'item-2',
            image: 'https://photo-baomoi.bmcdn.me/w300_r1x1_sm/2022_06_30_115_43036870/bf4c6ba68ce465ba3cf5.jpg',
            time: 1678354152476,
          },
          {
            id: 3,
            title: 'item-3',
            image: 'https://photo-baomoi.bmcdn.me/w300_r1x1_sm/2022_06_30_115_43036870/bf4c6ba68ce465ba3cf5.jpg',
            time: 1678354152476,
          },
          {
            id: 4,
            title: 'item-4',
            image: 'https://photo-baomoi.bmcdn.me/w300_r1x1_sm/2022_06_30_115_43036870/bf4c6ba68ce465ba3cf5.jpg',
            time: 1678354152476,
          },
        ])
        break
      default:
        setTitle('')
        setData((prev) => [])
        break
    }
  }, [type])
  return (
    <div className={cx('new-hot-wrapper')}>
      <h3 className={cx('title')}>{title}</h3>
      <div className={cx('content')}>
        {data.map((item) => {
          return <AsideItem key={item.id} data={item} />
        })}
      </div>
    </div>
  )
}

export default NewHot
