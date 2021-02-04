import { FC, ReactNode } from 'react'

import styles from './Content.module.sass'

interface Props {
  children: ReactNode
}

const ContentContainer: FC<Props> = (props) => {
  return <section className={styles.content}>{props.children}</section>
}

export default ContentContainer
