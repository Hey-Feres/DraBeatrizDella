import React from 'react'
import { Div } from 'atomize'
import { Navbar } from '../components/Navbar'
import { MainCard } from '../components/MainCard'
import { Services } from '../components/Services'
import { Experience } from '../components/Experience'
import { Gallery } from '../components/Gallery'
import { Contact } from '../components/Contact'
import { FAQ } from '../components/FAQ'

const Home: React.FC = () => {
  return(
    <>
      <Navbar />
      <MainCard />
      <Services />
      <Experience />
      <Gallery />
      <Contact />
      <FAQ />
    </>
  )
}

export default Home
