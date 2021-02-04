import { FC } from 'react'

import Button from '../../Button'
import styles from './StartTrialHeaderAction.module.sass'

const StartTrialHeaderAction: FC = () => {
  return (
    <li className={styles.container}>
      <Button
        href={'#start-your-free-trial'}
        title={'Start your free trial'}
        aria-label={'Start your free trial'}
      >
        Start your free trial
      </Button>
    </li>
  )
}

export default StartTrialHeaderAction
