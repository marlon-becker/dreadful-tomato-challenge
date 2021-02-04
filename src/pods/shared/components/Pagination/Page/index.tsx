import { FC } from 'react'

import styles from './Page.module.sass'

interface Props {
  active: boolean
  page: number
  paginate: any
}

const Page: FC<Props> = (props) => {
  return (
    <li
      className={[styles.page, props.active ? styles.active : ''].join(' ')}
      onClick={() => props.paginate(props.page)}
    >
      <a href={'#'}>{props.page}</a>
    </li>
  )
}

export default Page
