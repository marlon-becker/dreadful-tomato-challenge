import { FC, ReactNode } from 'react'

import styles from './Navigation.module.sass'

interface Props {
  children: ReactNode
}

const Navigation: FC<Props> = (props) => {
  return <ul className={styles.navigations}>{props.children}</ul>
}

export default Navigation
