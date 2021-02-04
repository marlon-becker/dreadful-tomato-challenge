import db from './db'

export type programType = 'series' | 'movie'

export interface Entry {
  title: string
  description: string
  programType: programType
  images: {
    'Poster Art': {
      url: string
      width: number
      height: number
    }
  }
  releaseYear: number
}

export interface ApiResponse {
  total: number
  entries: Array<Entry>
}

export const fetchFromApi = (): ApiResponse => {
  return db as ApiResponse
}
