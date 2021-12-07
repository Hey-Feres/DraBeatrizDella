import React from 'react'
import { Div, Text, Image } from 'atomize'

interface ServiceCardProps {
  image: String,
  alt: String,
  w: String,
  h: String,
  title: String,
  subtitle: String
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, alt, w, h, title, subtitle }) => {
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
    >
      <Div rounded='30px' bg='overlay' w={ w } h={ h } p={{ x: '1rem', t: '1.5rem' }}>
        <Text textSize='1.3rem' textColor='white'>{ title }</Text>
        <Text textColor='white'>{ subtitle }</Text>
      </Div>
    </Div>
  )
}

export const Services: React.FC<void> = () => {
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
          <ServiceCard
            image='/images/Person1.jpeg'
            alt='Person1'
            w='12rem'
            h='12rem'
            title='Clareamentos'
            subtitle='Seu sorriso mais branco.'
          />

          <ServiceCard
            image='/images/Person3.jpeg'
            alt='Person3'
            w='12rem'
            h='20rem'
            title='Tratamento de Canal'
            subtitle='Endodontia, com excelência.'
          />

          <ServiceCard
            image='/images/Person5.jpeg'
            alt='Person5'
            w='12rem'
            h='20rem'
            title='Próteses'
            subtitle='Seu sorriso renovado.'
          />
        </Div>

        <Div d='flex' flexDir='column' justify='center' align='space-between' w='100%'>
          <ServiceCard
            image='/images/Person2.jpeg'
            alt='Person2'
            w='12rem'
            h='20rem'
            title='Limpezas'
            subtitle='Higiene bucal em dia.'
          />

          <ServiceCard
            image='/images/Person4.jpeg'
            alt='Person3'
            w='12rem'
            h='12rem'
            title='Dor Orofacial'
            subtitle='Chega de dor.'
          />

          <ServiceCard
            image='/images/Person6.jpeg'
            alt='Person6'
            w='12rem'
            h='20rem'
            title='Restaurações'
            subtitle='Autoestima restaurada.'
          />
        </Div>
      </Div>
    </Div>
  )
}
