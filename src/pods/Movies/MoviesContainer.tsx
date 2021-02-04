import { FC, useEffect, useState } from 'react'
import { Column, Grid, Row } from 'carbon-components-react'

import Header from '../shared/components/Header'
import Footer from '../shared/components/Footer'
import { fetchMovies } from './api/fetchMovies'
import { Entry } from '../api/fetchFromApi'
import ProgramList from '../shared/components/ProgramList'
import useListFilters from '../shared/hooks/useListFilters'
import Filters from '../shared/components/Filters'
import StartTrialHeaderAction from '../shared/components/headerActions/StartTrialHeaderAction'
import LoginHeaderAction from '../shared/components/headerActions/LoginHeaderAction'
import FiltersHeaderAction from '../shared/components/headerActions/FiltersHeaderAction'
import MoviesHeaderNav from '../shared/components/Header/components/Navigation/MoviesHeaderNav'
import SeriesHeaderNav from '../shared/components/Header/components/Navigation/SeriesHeaderNav'
import Pagination from '../shared/components/Pagination'
import ContentContainer from '../shared/components/ContentContainer'

const Movies: FC = () => {
  const [movies, setMovies] = useState<Array<Entry>>([])
  const [totalPages, setTotalPages] = useState<number>(0)
  const {
    filters,
    paginate,
    resetFilters,
    searchByQuery,
    searchByReleaseYear,
  } = useListFilters()

  useEffect(() => {
    const result = fetchMovies(filters)
    setMovies(result.entries)
    setTotalPages(result.pages)
  }, [filters])

  return (
    <>
      <Header
        navigation={
          <>
            <MoviesHeaderNav active />
            <SeriesHeaderNav />
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
      <Filters
        query={filters.filters.query}
        releaseYear={filters.filters.year}
        searchByQuery={searchByQuery}
        searchByReleaseYear={searchByReleaseYear}
      />
      <ContentContainer>
        <Grid>
          <Row>
            <Column>
              <h1>Popular movies</h1>
              <ProgramList resetFilters={resetFilters} elements={movies} />
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

export default Movies
