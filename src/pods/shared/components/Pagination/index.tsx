import { FC } from 'react'
import { ChevronLeft24 } from '@carbon/icons-react'
import { ChevronRight24 } from '@carbon/icons-react'

import Page from './Page'
import styles from './Pagination.module.sass'
import PaginationChevron from './PaginationChevron'

interface Props {
  currentPage: number
  pages: number
  paginate: any
}

const Pagination: FC<Props> = (props) => {
  if (props.pages <= 1) return null

  return (
    <ul className={styles.pagination}>
      <PaginationChevron
        paginate={() => props.paginate(props.currentPage - 1)}
        active={props.currentPage > 1}
      >
        <ChevronLeft24 />
      </PaginationChevron>
      {Array(props.pages)
        .fill('')
        .map((_, idx) => (
          <Page
            active={props.currentPage === idx + 1}
            key={idx + 1}
            page={idx + 1}
            paginate={props.paginate}
          />
        ))}
      <PaginationChevron
        paginate={() => props.paginate(props.currentPage + 1)}
        active={props.currentPage < props.pages}
      >
        <ChevronRight24 />
      </PaginationChevron>
    </ul>
  )
}

export default Pagination
