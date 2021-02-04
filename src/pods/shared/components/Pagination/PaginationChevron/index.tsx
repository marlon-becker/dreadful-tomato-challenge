import { FC, ReactNode } from 'react'

interface Props {
  active: boolean
  children: ReactNode
  paginate: any
}

import styles from './PaginationChevron.module.sass'

const PaginationChevron: FC<Props> = (props) => {
  return (
    <div
      onClick={props.paginate}
      className={[
        styles.chevron,
        props.active ? styles.active : styles.inactive,
      ].join(' ')}
    >
      <a href={'#'}>{props.children}</a>
    </div>
  )
}

export default PaginationChevron
