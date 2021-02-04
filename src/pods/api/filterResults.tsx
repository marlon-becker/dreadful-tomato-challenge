import { ApiResponse, Entry, programType } from './fetchFromApi'
import { Filters } from '../shared/hooks/useListFilters'

const RESULTS_PER_PAGE = 10

export interface ProgramResponse {
  entries: Array<Entry>
  pages: number
  total: number
}

const filterResults = (response: ApiResponse) => {
  return (programType: programType, filters: Filters): ProgramResponse => {
    const filteredEntries = response.entries.filter((entry) => {
      //Year filter
      if (filters.filters.year && filters.filters.year !== entry.releaseYear) {
        return false
      }

      // Query filter
      if (
        filters.filters.query &&
        !entry.title
          .toLowerCase()
          .includes(filters.filters.query.toLowerCase()) &&
        !entry.description
          .toLowerCase()
          .includes(filters.filters.query.toLowerCase())
      ) {
        return false
      }

      //Program Type filter
      return entry.programType === programType
    })

    const pages = Math.ceil(filteredEntries.length / RESULTS_PER_PAGE)

    return {
      entries: filteredEntries,
      pages,
      total: filteredEntries.length,
    }
  }
}

export default filterResults
