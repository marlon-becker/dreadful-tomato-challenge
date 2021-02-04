import { FC } from 'react'
import NavButton from '../NavButton'
import IconText from '../../../../IconText'

interface Props {
  active?: boolean
}

const MoviesHeaderNav: FC<Props> = (props) => {
  return (
    <NavButton active={props.active} pathname={'/movies'}>
      <IconText text={'Movies'} icon={'movies'} />
    </NavButton>
  )
}

export default MoviesHeaderNav
