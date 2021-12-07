import React from 'react'
import { Div, Text, Button } from 'atomize'

export const Experience: React.FC<void> = () => {
  return(
    <Div
      d='flex'
      flexDir='column'
      justify='space-between'
      align='center'
      p={{ b: '1rem', x: '1rem' }}
      w='95%'
      m={{ t: '3rem', l: '2.5%' }}
    >
      <Text textSize='2.5rem' textColor='primary' style={{ lineHeight: '50px' }}>
        Dezenas de pacientes atendidos, dezenas de vidas transformadas.
      </Text>
      <Text textSize='2.5rem' textColor='secondary' style={{ lineHeight: '50px' }}>
        Atendo desde 2019 no Centro de Especialidades Odontológicas da UNESC, devolvendo sorrisos e amenizando dores.
      </Text>

      <Div w='100%' m={{ t: '3rem' }}>
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
      </Div>
    </Div>
  )
}
