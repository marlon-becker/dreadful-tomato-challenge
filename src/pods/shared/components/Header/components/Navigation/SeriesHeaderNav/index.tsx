import { FC } from 'react'
import NavButton from '../NavButton'
import IconText from '../../../../IconText'

interface Props {
  active?: boolean
}

const SeriesHeaderNav: FC<Props> = (props) => {
  return (
    <NavButton active={props.active} pathname={'/series'}>
      <IconText text={'Series'} icon={'series'} />
    </NavButton>
  )
}

SeriesHeaderNav.defaultProps = {
  active: false,
}

export default SeriesHeaderNav
