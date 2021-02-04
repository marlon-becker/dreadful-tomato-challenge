import { FC } from 'react'

interface Props {
  resetFilters: any
}

import styles from './EmptyList.module.sass'

const EmptyList: FC<Props> = (props) => {
  return (
    <section className={styles.container}>
      <h2>No results found</h2>
      <p>
        <a href={'#'} onClick={props.resetFilters}>
          Reset filters
        </a>
      </p>
    </section>
  )
}

export default EmptyList
