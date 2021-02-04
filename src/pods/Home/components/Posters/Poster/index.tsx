import { FC } from 'react'

import styles from './Poster.module.sass'

interface Props {
  image: string
  title: string
  href: string
}
const Poster: FC<Props> = (props) => {
  return (
    <a className={styles.posterContainer} href={props.href}>
      <div className={styles.poster}>
        <img src={props.image} alt={props.title} />
        <span className={styles.title}>{props.title}</span>
      </div>
    </a>
  )
}

export default Poster
