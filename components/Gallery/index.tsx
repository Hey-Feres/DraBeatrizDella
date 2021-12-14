import React from 'react'
import { Div, Text, Image } from 'atomize'
import { SectionTitle } from '../SectionTitle'
import { Section } from '../Section'

interface GalleryCardProps {
  image: string,
  alt: string,
  w: string,
  h: string,
  title: string,
  subtitle: string
}

const GalleryCard: React.FC<ServiceCardProps> = ({ image, alt, w, h, title, subtitle }) => {
  return(
    <Div
      bgImg={ image }
      w={ w }
      h={ h }
      rounded={{
        xs: '30px',
        lg: '50px'
      }}
      alt={ alt }
      bgSize='cover'
      bgPos='center'
      m={{ b: '1rem' }}
    />
  )
}

export const Gallery: React.FC<void> = () => {
  return(
    <Section>
      <SectionTitle
        title='Galeria de Atendimentos'
        subtitle={['O único jeito de fazer um ótimo', <br/>, 'trabalho, é amando o que você faz.']}
      />

      <Div m={{ t: '2rem' }} d='flex' justify='space-between' align='center' w='100%'>
        <Div
          d='flex'
          flexDir='column'
          justify='center'
          align={{
            xs: 'space-between',
            lg: 'space-between',
            xl: 'flex-end'
          }}
          m={{
            r: { xl: '1rem' }
          }}
          w='100%'
        >
          <GalleryCard
            image='/images/Gallery1.jpeg'
            alt='Gallery1'
            w={{
              xs: '12rem',
              lg: '28rem'
            }}
            h={{
              xs: '12rem',
              lg: '28rem'
            }}
          />

          <GalleryCard
            image='/images/Gallery3.jpeg'
            alt='Gallery3'
            w={{
              xs: '12rem',
              lg: '28rem'
            }}
            h={{
              xs: '20rem',
              lg: '40rem'
            }}
          />

          <GalleryCard
            image='/images/Gallery5.jpeg'
            alt='Gallery5'
            w={{
              xs: '12rem',
              lg: '28rem'
            }}
            h={{
              xs: '20rem',
              lg: '40rem'
            }}
          />
        </Div>

        <Div
          d='flex'
          flexDir='column'
          justify='center'
          align={{
            xs: 'space-between',
            lg: 'space-between',
            xl: 'flex-start'
          }}
          m={{
            l: { xl: '1rem' }
          }}
          w='100%'
        >
          <GalleryCard
            image='/images/Gallery2.jpeg'
            alt='Gallery2'
            w={{
              xs: '12rem',
              lg: '28rem'
            }}
            h={{
              xs: '20rem',
              lg: '40rem'
            }}
          />

          <GalleryCard
            image='/images/Gallery4.jpeg'
            alt='Gallery4'
            w={{
              xs: '12rem',
              lg: '28rem'
            }}
            h={{
              xs: '12rem',
              lg: '28rem'
            }}
          />

          <GalleryCard
            image='/images/Gallery6.jpeg'
            alt='Gallery6'
            w={{
              xs: '12rem',
              lg: '28rem'
            }}
            h={{
              xs: '20rem',
              lg: '40rem'
            }}
          />
        </Div>
      </Div>
    </Section>
  )
}
