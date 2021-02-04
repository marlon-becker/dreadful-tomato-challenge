import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  active: boolean
  children: ReactNode
  pathname: string
}

import styles from './NavButton.module.sass'

const NavButton: FC<Props> = (props) => {
  return (
    <li className={props.active ? styles.active : ''}>
      <Link to={props.pathname}>{props.children}</Link>
    </li>
  )
}

NavButton.defaultProps = {
  active: false,
}

export default NavButton
