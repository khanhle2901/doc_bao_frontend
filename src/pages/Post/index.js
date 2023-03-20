import { faArrowUpFromBracket, faEye, faRotate, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Aside from '../../components/Aside'
import axiosCt from '../../configs/axiosCT'

import styles from './Post.module.scss'

const cx = classNames.bind(styles)

function Post() {
  const { id } = useParams()
  const [post, setPost] = useState({})
  useEffect(() => {
    const controller = new AbortController()
    const fetchPost = async () => {
      const response = await axiosCt.get('/post/' + id)
      console.log(response)
      if (response !== 'fail' && response.code === 200) {
        setPost(() => response.data)
      } else {
        setPost(() => ({}))
      }
    }
    fetchPost()
    return () => {
      controller.abort()
    }
  }, [id])

  const createdDate = new Date(post.created_at)
  let updatedTime
  post.updated_at && (updatedTime = new Date(post.updated_at))
  console.log(updatedTime)
  return (
    <div className={cx('wrapper')}>
      <div className={cx('content')}>
        <h1 className={cx('title')}>{post.title}</h1>
        <img className={cx('avartar')} src={post.avartar_cdn} alt={post.title} />
        <div className={cx('post-content')} dangerouslySetInnerHTML={{ __html: post.content }} />
        <div className={cx('info')}>
          <div className={cx('viewed')} title='Lươt xem'>
            <FontAwesomeIcon icon={faEye} />
            {post.viewed}
          </div>
          <div className={cx('created-time')} title='Thời gian đăng'>
            <FontAwesomeIcon icon={faArrowUpFromBracket} />
            {`${createdDate.getDay()}/${
              createdDate.getMonth() + 1
            }/${createdDate.getFullYear()} ${createdDate.getHours()}:${createdDate.getMinutes()}`}
          </div>
          {post.updated_at && (
            <div className={cx('updated-time')} title='Thời gian cập nhật'>
              <FontAwesomeIcon icon={faRotate} />
              {`${updatedTime.getDay()}/${
                updatedTime.getMonth() + 1
              }/${updatedTime.getFullYear()} ${updatedTime.getHours()}:${updatedTime.getMinutes()}`}
            </div>
          )}
          <div className={cx('author')} title='Tác giả'>
            <FontAwesomeIcon icon={faUser} />
            {post.author_name}
          </div>
        </div>
        <div className={cx('action')}>action</div>
      </div>
      <Aside />
    </div>
  )
}
export default Post
