import { FC } from 'react'

import styles from './IconText.module.sass'

interface Props {
  text: string
  icon: 'series' | 'movies' | 'filter' | 'login'
}

const IconText: FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <span>{props.text}</span>
      <img src={`/icons/icon-${props.icon}.png`} alt={props.text} />
    </div>
  )
}

export default IconText
