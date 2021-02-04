import { FC, useEffect, useState } from 'react'
import { Column, Grid, Row } from 'carbon-components-react'

import Header from '../shared/components/Header'
import Footer from '../shared/components/Footer'
import { Entry } from '../api/fetchFromApi'
import ProgramList from '../shared/components/ProgramList'
import { fetchSeries } from './api/fetchSeries'
import useListFilters from '../shared/hooks/useListFilters'
import Filters from '../shared/components/Filters'
import FiltersHeaderAction from '../shared/components/headerActions/FiltersHeaderAction'
import LoginHeaderAction from '../shared/components/headerActions/LoginHeaderAction'
import StartTrialHeaderAction from '../shared/components/headerActions/StartTrialHeaderAction'
import MoviesHeaderNav from '../shared/components/Header/components/Navigation/MoviesHeaderNav'
import SeriesHeaderNav from '../shared/components/Header/components/Navigation/SeriesHeaderNav'
import Pagination from '../shared/components/Pagination'
import ContentContainer from '../shared/components/ContentContainer'

const Series: FC = () => {
  const [series, setSeries] = useState<Array<Entry>>([])
  const [totalPages, setTotalPages] = useState<number>(0)
  const {
    filters,
    paginate,
    resetFilters,
    searchByQuery,
    searchByReleaseYear,
  } = useListFilters()

  useEffect(() => {
    const result = fetchSeries(filters)
    setSeries(result.entries)
    setTotalPages(result.pages)
  }, [filters])

  return (
    <>
      <Header
        navigation={
          <>
            <MoviesHeaderNav />
            <SeriesHeaderNav active />
          </>
        }
        actions={
          <>
            <FiltersHeaderAction
              active={!!(filters.filters.query || filters.filters.year)}
            />
            <LoginHeaderAction />
            <StartTrialHeaderAction />
          </>
        }
      />
      <ContentContainer>
        <Filters
          query={filters.filters.query}
          releaseYear={filters.filters.year}
          searchByQuery={searchByQuery}
          searchByReleaseYear={searchByReleaseYear}
        />
        <Grid>
          <Row>
            <Column>
              <h1>Popular series</h1>
              <ProgramList resetFilters={resetFilters} elements={series} />
              <Pagination
                currentPage={filters.page}
                pages={totalPages}
                paginate={paginate}
              />
            </Column>
          </Row>
        </Grid>
      </ContentContainer>
      <Footer />
    </>
  )
}

export default Series
