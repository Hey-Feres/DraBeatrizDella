import React from 'react'
import { Div, Text, Image } from 'atomize'

interface GalleryCardProps {
  image: String,
  alt: String,
  w: String,
  h: String,
  title: String,
  subtitle: String
}

const GalleryCard: React.FC<ServiceCardProps> = ({ image, alt, w, h, title, subtitle }) => {
  return(
    <Div
      bgImg={ image }
      w={ w }
      h={ h }
      rounded='30px'
      alt={ alt }
      bgSize='cover'
      bgPos='center'
      m={{ b: '1rem' }}
    />
  )
}

export const Gallery: React.FC<void> = () => {
  return(
    <Div
      d='flex'
      flexDir='column'
      justify='space-between'
      align='center'
      w='95%'
      m={{ t: '3rem', l: '2.5%' }}
    >
      <Div d='flex' flexDir='column' justify='center' align='center'>
        <Text textAlign='center' textSize='1.7rem' textWeight='900' textColor='primary'>Como Posso Ajudar?</Text>
        <Text textAlign='center' m={{ t: '.5rem' }} textSize='1.2rem' textColor='secondary'>Atendimento humanizado. <br/> Focado em sua necessidade.</Text>
      </Div>

      <Div m={{ t: '2rem' }} d='flex' justify='space-between' align='center' w='100%'>
        <Div d='flex' flexDir='column' justify='center' align='space-between' w='100%'>
          <GalleryCard
            image='/images/Gallery1.jpeg'
            alt='Gallery1'
            w='12rem'
            h='12rem'
          />

          <GalleryCard
            image='/images/Gallery3.jpeg'
            alt='Gallery3'
            w='12rem'
            h='20rem'
          />

          <GalleryCard
            image='/images/Gallery5.jpeg'
            alt='Gallery5'
            w='12rem'
            h='20rem'
          />
        </Div>

        <Div d='flex' flexDir='column' justify='center' align='space-between' w='100%'>
          <GalleryCard
            image='/images/Gallery2.jpeg'
            alt='Gallery2'
            w='12rem'
            h='20rem'
          />

          <GalleryCard
            image='/images/Gallery4.jpeg'
            alt='Gallery4'
            w='12rem'
            h='12rem'
          />

          <GalleryCard
            image='/images/Gallery6.jpeg'
            alt='Gallery6'
            w='12rem'
            h='20rem'
          />
        </Div>
      </Div>
    </Div>
  )
}
