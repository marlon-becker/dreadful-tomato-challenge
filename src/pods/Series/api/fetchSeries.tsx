import { fetchFromApi } from '../../api/fetchFromApi'
import { Filters } from '../../shared/hooks/useListFilters'
import filterResults, { ProgramResponse } from '../../api/filterResults'
import paginateResults from '../../api/paginateResults'

export const fetchSeries = (filters: Filters): ProgramResponse => {
  const filteredResults = filterResults(fetchFromApi())('series', filters)

  return paginateResults(filters.page, filteredResults)
}
