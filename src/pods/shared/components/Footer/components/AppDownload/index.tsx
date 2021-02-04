import { FC } from 'react'

import AppStoreButton from './AppStoreButton'
import GooglePlayButton from './GooglePlayButton'

import styles from './AppDownload.module.sass'

const AppDownload: FC = () => {
  return (
    <div className={styles.appDownload}>
      <AppStoreButton />
      <GooglePlayButton />
    </div>
  )
}

export default AppDownload
