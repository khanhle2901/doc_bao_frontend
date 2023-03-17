import { faPenToSquare, faTrashCan, faTrashCanArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'

import styles from './CategoryItem.module.scss'

const cx = classNames.bind(styles)

function CategoryItem({ name, onEdit, onDelete, trash }) {
  return (
    <div className={cx('category')}>
      <div className={cx('category-name')}>{name}</div>
      <div className={cx('category-action')}>
        <button className={cx('btn-category-update')} onClick={onEdit}>
          <FontAwesomeIcon icon={trash ? faTrashCanArrowUp : faPenToSquare} />
        </button>
        <button className={cx('btn-category-delete')} onClick={onDelete}>
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </div>
  )
}

export default CategoryItem
