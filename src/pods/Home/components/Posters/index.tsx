import { FC } from 'react'
import Poster from './Poster'

import styles from './Posters.module.sass'

const Posters: FC = () => {
  return (
    <div className={styles.posters}>
      <Poster image={'/home/movies.png'} title={'Movies'} href={'/movies'} />
      <Poster image={'/home/series.png'} title={'Series'} href={'/series'} />
    </div>
  )
}

export default Posters
