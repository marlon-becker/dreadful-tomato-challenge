import { FC } from 'react'

import Logo from '../Logo'
import FooterLinks from './components/FooterLinks'
import Copyright from './components/Copyright'
import AppDownload from './components/AppDownload'
import styles from './Footer.module.sass'

const Footer: FC = () => (
  <footer className={styles.footer}>
    <Logo variant={'small'} />
    <FooterLinks />
    <AppDownload />
    <Copyright />
  </footer>
)

export default Footer
