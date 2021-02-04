import { FC, ReactNode } from 'react'

import styles from './Actions.module.sass'

interface Props {
  children: ReactNode
}

const Actions: FC<Props> = (props) => {
  return <ul className={styles.actions}>{props.children}</ul>
}

export default Actions
