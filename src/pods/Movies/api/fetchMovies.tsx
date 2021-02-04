import { fetchFromApi } from 'pods/api/fetchFromApi'
import { Filters } from 'pods/shared/hooks/useListFilters'
import filterResults, { ProgramResponse } from 'pods/api/filterResults'
import paginateResults from 'pods/api/paginateResults'

export const fetchMovies = (filters: Filters | any): ProgramResponse => {
  const filteredResults = filterResults(fetchFromApi())('movie', filters)

  return paginateResults(filters.page, filteredResults)
}
