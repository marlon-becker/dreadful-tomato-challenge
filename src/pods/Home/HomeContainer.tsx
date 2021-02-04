import { FC } from 'react'

import Header from '../shared/components/Header'
import Footer from '../shared/components/Footer'
import Posters from './components/Posters'
import LoginHeaderAction from '../shared/components/headerActions/LoginHeaderAction'
import StartTrialHeaderAction from '../shared/components/headerActions/StartTrialHeaderAction'

const Home: FC = () => {
  return (
    <>
      <Header
        actions={
          <>
            <LoginHeaderAction />
            <StartTrialHeaderAction />
          </>
        }
      />
      <Posters />
      <Footer />
    </>
  )
}

export default Home
