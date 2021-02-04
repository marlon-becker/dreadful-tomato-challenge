import { FC } from 'react'

import { Entry } from 'pods/api/fetchFromApi'
import Program from './Program'
import EmptyList from './EmptyList'

interface Props {
  elements: Array<Entry>
  resetFilters: any
}

import styles from './Program.module.sass'

const ProgramList: FC<Props> = (props) => {
  if (props.elements.length === 0) {
    return <EmptyList resetFilters={props.resetFilters} />
  }

  return (
    <ul className={styles.gridList}>
      {props.elements.map((element) => (
        <Program key={element.title} element={element} />
      ))}
    </ul>
  )
}

export default ProgramList
