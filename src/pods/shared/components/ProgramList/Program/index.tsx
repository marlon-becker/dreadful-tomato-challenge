import { FC } from 'react'
import { Calendar16 } from '@carbon/icons-react'

import { Entry } from '../../../../api/fetchFromApi'
import styles from './Program.module.sass'

interface Props {
  element: Entry
}

const Program: FC<Props> = (props) => {
  return (
    <div
      className={styles.gridListElement}
      style={{
        backgroundImage: `url(${props.element.images['Poster Art'].url})`,
      }}
    >
      <div className={styles.content}>
        <h2 title={props.element.title}>{props.element.title}</h2>
        {props.element.releaseYear > 0 && (
          <p className={styles.date}>
            <Calendar16 /> {props.element.releaseYear}
          </p>
        )}
        <span>{props.element.description}</span>
      </div>
    </div>
  )
}

export default Program
