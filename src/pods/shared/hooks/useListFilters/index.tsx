import { useReducer } from 'react'

export interface Filters {
  page: number
  filters: {
    query: string
    year?: number
  }
}

type Action =
  | { type: 'searchByReleaseYear'; year: number }
  | { type: 'paginate'; page: number }
  | { type: 'searchByQuery'; query: string }
  | { type: 'reset' }

const initialState: Filters = {
  page: 1,
  filters: {
    query: '',
    year: undefined,
  },
}

const reducer = (state: Filters, action: Action) => {
  switch (action.type) {
    case 'paginate':
      return { ...state, page: action.page }
    case 'searchByReleaseYear':
      return {
        ...state,
        page: 1,
        filters: { ...state.filters, year: action.year },
      }
    case 'searchByQuery':
      return {
        ...state,
        page: 1,
        filters: { ...state.filters, query: action.query },
      }
    case 'reset':
      return initialState
    default:
      throw new Error()
  }
}

const useListFilters = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const paginate = (page: number) => {
    dispatch({ type: 'paginate', page })
  }

  const searchByReleaseYear = (year: number) => {
    dispatch({ type: 'searchByReleaseYear', year })
  }

  const searchByQuery = (query: string) => {
    dispatch({ type: 'searchByQuery', query })
  }

  const resetFilters = () => {
    dispatch({ type: 'reset' })
  }

  return {
    filters: state,
    paginate,
    resetFilters,
    searchByQuery: searchByQuery,
    searchByReleaseYear: searchByReleaseYear,
  }
}

export default useListFilters
