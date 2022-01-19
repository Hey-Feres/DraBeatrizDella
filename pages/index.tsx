import React from 'react'
import Head from 'next/head'
import { Div } from 'atomize'
import { Navbar } from '../components/Navbar'
import { MainCard } from '../components/MainCard'
import { Services } from '../components/Services'
import { Experience } from '../components/Experience'
import { Gallery } from '../components/Gallery'
import { Contact } from '../components/Contact'
import { FAQ } from '../components/FAQ'
import { Footer } from '../components/Footer'

const Home: React.FC = () => {
  return(
    <>
      <Head>
        <meta property="og:title" content="Dra. Beatriz Della" />
        <meta property="og:type" content="business.business" />
        <meta property="og:image" content="https://akns-images.eonline.com/eol_images/Entire_Site/2014212/rs_1024x759-140312104515-1024.Elsa-Frozen-Disney.jl.031214_copy.jpg" />
        <meta property="og:url" content="https://www.drabeatrizdella.com" />
        <meta name="twitter:card" content="https://akns-images.eonline.com/eol_images/Entire_Site/2014212/rs_1024x759-140312104515-1024.Elsa-Frozen-Disney.jl.031214_copy.jpg" />
        <meta property="og:description" content="Serviços de Odonto" />
        <meta property="og:site_name" content="Doutora Beatriz Della" />
        <meta name="twitter:image:alt" content="Doutora Beatriz Della" />
      </Head>
      <Navbar />
      <MainCard />
      <Services />
      <Experience />
      <Gallery />
      <Contact />
      <FAQ />
      <Footer />
    </>
  )
}

export default Home
