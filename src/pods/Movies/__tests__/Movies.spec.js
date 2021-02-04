import { fireEvent, render, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import Movies from '../MoviesContainer'

describe('Movies page', () => {
  test('render Movies Page', () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <Movies />
      </Router>
    )

    expect(screen.getByText('Series').closest('a')).toHaveAttribute(
      'href',
      '/series'
    )
    expect(screen.getByText('Movies').closest('a')).toHaveAttribute(
      'href',
      '/movies'
    )

    expect(screen.getByText('4').closest('a')).toHaveAttribute('href', '#')

    expect(screen.getByText('Start your free trial')).toBeInTheDocument()
    expect(screen.getByText('Filter')).toBeInTheDocument()
    expect(screen.queryByText('Login')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Popular movies/i }))
    expect(screen.getByRole('heading', { name: /U2: Live in Paris/i }))
    expect(screen.getByRole('heading', { name: /Under The Gun/i }))
  })

  test('paginate movies', () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <Movies />
      </Router>
    )

    const paginationLink = screen.getByText('4')
    fireEvent.click(paginationLink)

    expect(screen.getByRole('heading', { name: /Tracers/i }))
    expect(screen.getByRole('heading', { name: /I am Legend/i }))
    expect(screen.getByRole('heading', { name: /How To Train Your Dragon/i }))
  })

  test('filter movies by name', () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <Movies />
      </Router>
    )

    const searchInput = screen.getByPlaceholderText('Name')
    fireEvent.change(searchInput, { target: { value: 'hunger' } })

    expect(screen.getByRole('heading', { name: /^The hunger Games$/i }))

    expect(
      screen.getByRole('heading', { name: /The Hunger Games: Catching Fire/i })
    )
    expect(
      screen.getByRole('heading', {
        name: /The Hunger Games: Mockingjay - Part 2/i,
      })
    )

    expect(screen.queryByText(/U2: Live in Paris/i)).not.toBeInTheDocument()
  })

  test('filter movies by year', () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <Movies />
      </Router>
    )

    const yearSelector = screen
      .getByText('Select release year')
      .closest('select')
    fireEvent.change(yearSelector, { target: { value: '2013' } })

    expect(
      screen.getByRole('heading', { name: /The Hunger Games: Catching Fire/i })
    )

    expect(screen.queryByText(/U2: Live in Paris/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/^The hunger Games$/i)).not.toBeInTheDocument()
  })
})
