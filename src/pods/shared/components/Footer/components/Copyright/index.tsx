import { FC } from 'react'

import styles from './Copyright.module.sass'

const Copyright: FC = () => {
  return (
    <p className={styles.copyright}>
      {'Copyright 2020 Dreadful Tomato Streaming. All Rights Reserved'}
    </p>
  )
}

export default Copyright
