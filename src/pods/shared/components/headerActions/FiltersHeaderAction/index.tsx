import { FC } from 'react'

import styles from './FiltersHeaderAction.module.sass'
import IconText from '../../IconText'

interface Props {
  active: boolean
}

const FiltersHeaderAction: FC<Props> = (props) => {
  return (
    <li
      className={[styles.filters, props.active ? styles.active : ''].join(' ')}
    >
      <IconText text={'Filter'} icon={'filter'} />
    </li>
  )
}

export default FiltersHeaderAction
