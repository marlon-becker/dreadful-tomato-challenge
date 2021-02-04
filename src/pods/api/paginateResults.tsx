import { ProgramResponse } from './filterResults'

const RESULT_PER_PAGE = 10

const paginateResults = (page: number, results: ProgramResponse) => {
  return {
    ...results,
    entries: results.entries.slice(
      (page - 1) * RESULT_PER_PAGE,
      page * RESULT_PER_PAGE
    ),
  }
}

export default paginateResults
