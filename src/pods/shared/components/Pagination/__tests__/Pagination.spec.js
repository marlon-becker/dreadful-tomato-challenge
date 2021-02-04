import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Pagination from '../index'

import * as stubs from './stubs'

describe('Pagination', () => {
  it('should paginate to second page', async () => {
    render(<Pagination {...stubs.paginationProps} />)

    fireEvent.click(screen.getByText('2'))
    expect(stubs.paginationProps.paginate).toHaveBeenCalledWith(2)
  })
})
