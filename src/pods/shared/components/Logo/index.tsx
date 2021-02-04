import { FC } from 'react'

import styles from './Logo.module.sass'

interface Props {
  variant?: 'small' | 'default'
}

const Logo: FC<Props> = (props) => {
  return (
    <img
      className={props.variant ? styles[props.variant] : ''}
      src={'/images/logo.png'}
      alt={'Dreadful Tomato'}
    />
  )
}

Logo.defaultProps = {
  variant: 'default',
}

export default Logo
