import { FC, ReactNode } from 'react'

import styles from './Button.module.sass'

interface Props {
  'aria-label': string
  children: ReactNode
  href: string
  title?: string
}

const Button: FC<Props> = (props) => {
  return (
    <a
      aria-label={props.title}
      className={styles.button}
      href={props.href}
      title={props.title}
    >
      {props.children}
    </a>
  )
}

export default Button
