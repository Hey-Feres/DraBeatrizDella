import React from 'react'
import { Div, Text, Button } from 'atomize'

interface Props {}

const MobileExperienceText: React.FC = () => {
  return(
    <>
      <Text
        d={{ xs: 'block', lg: 'none' }}
        textSize='2.5rem'
        textColor='primary'
        style={{ lineHeight: '55px' }}
      >
        Dezenas de pacientes atendidos, dezenas de vidas transformadas.
      </Text>
      <Text
        d={{ xs: 'block', lg: 'none' }}
        textSize='2.5rem'
        textColor='secondary'
        style={{ lineHeight: '55px' }}
      >
        Atendo desde 2019 no Centro de Especialidades Odontológicas da UNESC, devolvendo sorrisos e amenizando dores.
      </Text>
    </>
  )
}

const DesktopExperienceText: React.FC = () => {
  return(
    <>
      <Text
        d={{ xs: 'none', lg: 'block' }}
        textSize='4rem'
        textColor='primary'
        style={{ lineHeight: '75px' }}
      >
        Dezenas de pacientes atendidos, dezenas de vidas transformadas.
      </Text>
      <Text
        d={{ xs: 'none', lg: 'block' }}
        textSize='4rem'
        textColor='secondary'
        style={{ lineHeight: '75px' }}
      >
        Atendo desde 2019 no Centro de Especialidades Odontológicas da UNESC, devolvendo sorrisos e amenizando dores.
      </Text>
    </>
  )
}

export const Experience: React.FC<Props> = () => {
  return(
    <Div
      d='flex'
      flexDir='column'
      justify='space-between'
      align='center'
      p={{ b: '1rem', x: '1rem' }}
      w={{
        xs: '95%',
        lg: '80%'
      }}
      m={{
        t: { xs: '3rem', lg: '5rem' },
        l: { xs: '2.5%', lg: '10%'}
      }}
    >
      <MobileExperienceText />
      <DesktopExperienceText />

      <Div w='100%' m={{ t: '3rem' }}>
        <a href='https://wa.me/4899468322'>
          <Button
            bg="#F9F9F9"
            hoverBg='#F1F1F1'
            rounded="circle"
            p={{ x: "3rem", y: '1.5rem' }}
            textColor='primary'
            textSize='1.3rem'
          >
            Agende uma Avaliação
          </Button>
        </a>
      </Div>
    </Div>
  )
}
