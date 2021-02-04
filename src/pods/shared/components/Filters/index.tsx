import { FC, useCallback } from 'react'

import styles from './Filters.module.sass'
import { Search16 } from '@carbon/icons-react'
import { Column, Grid, Row } from 'carbon-components-react'

interface Props {
  query: string
  searchByQuery: (query: string) => void
  searchByReleaseYear: (year: number) => void
  releaseYear?: number
}

const FROM_YEAR = 1930
const TO_YEAR = 2021

const Filters: FC<Props> = (props) => {
  const handleSearchQueryChange = useCallback(
    (e) => props.searchByQuery(e.target.value),
    []
  )

  const handleYearChange = useCallback(
    (e) => props.searchByReleaseYear(Number.parseInt(e.target.value)),
    []
  )

  const createOptions = useCallback(() => {
    const options = []

    for (let year = FROM_YEAR; year <= TO_YEAR; year++) {
      options.push(
        <option key={year} value={year}>
          {year}
        </option>
      )
    }

    return options
  }, [])

  return (
    <div className={styles.filters}>
      <Grid>
        <Row>
          <Column className={styles.filtersContainer}>
            <div className={styles.searchContainer}>
              <input
                placeholder={'Name'}
                type={'text'}
                value={props.query}
                onChange={handleSearchQueryChange}
              />
              <Search16 />
            </div>
            <select value={props.releaseYear} onChange={handleYearChange}>
              <option value={''}>Select release year</option>
              {createOptions()}
            </select>
          </Column>
        </Row>
      </Grid>
    </div>
  )
}

export default Filters
