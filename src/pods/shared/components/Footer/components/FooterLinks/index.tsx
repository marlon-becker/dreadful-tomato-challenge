import { FC } from 'react'

import styles from './FooterLinks.module.sass'

const footerLinks = [
  { title: 'Home', href: '/' },
  { title: 'Terms of use', href: '#terms-of-use' },
  { title: 'Legal Notices', href: '#legal-notices' },
  { title: 'Help', href: '#help' },
  { title: 'Manage Account', href: '#manage-account' },
]

const FooterLinks: FC = () => {
  return (
    <ul className={styles.footerLinks}>
      {footerLinks.map((link) => (
        <li key={link.title}>
          <a href={link.href}>{link.title}</a>
        </li>
      ))}
    </ul>
  )
}

export default FooterLinks
