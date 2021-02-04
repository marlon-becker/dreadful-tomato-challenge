import { FC, ReactNode } from 'react'
import { Column, Grid, Row } from 'carbon-components-react'

import { Link } from 'react-router-dom'

import Logo from '../Logo'
import styles from './Header.module.sass'
import Actions from './components/Actions'
import Navigation from './components/Navigation'

interface Props {
  actions?: ReactNode
  navigation?: ReactNode
}

const Header: FC<Props> = (props) => {
  return (
    <header className={styles.header}>
      <Grid>
        <Row>
          <Column className={styles.headerContainer}>
            <Link to={'/'}>
              <Logo />
            </Link>
            {props.navigation && (
              <nav className={styles.navBar}>
                <Navigation>{props.navigation}</Navigation>
              </nav>
            )}
            {props.actions && (
              <aside className={styles.actionBar}>
                <Actions>{props.actions}</Actions>
              </aside>
            )}
          </Column>
        </Row>
      </Grid>
    </header>
  )
}

export default Header
