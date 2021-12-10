import React from 'react'
import { Div, Text, Image } from 'atomize'

export const Contact: React.FC<void> = () => {
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
        <Text textAlign='center' textSize='1.7rem' textWeight='900' textColor='primary'>Contato</Text>
        <Text textAlign='center' m={{ t: '.5rem' }} textSize='1.2rem' textColor='secondary'>Atendimentos. Dúvidas. Orçamentos.</Text>
      </Div>

      <Div m={{ t: '2rem' }} d='flex' justify='space-between' align='center' w='75%'>
        <Div w='5rem' h='5rem' bg='white' shadow='primary' rounded='50px' />
        <Div w='5rem' h='5rem' bg='white' shadow='primary' rounded='50px' />
        <Div w='5rem' h='5rem' bg='white' shadow='primary' rounded='50px' />
      </Div>
    </Div>
  )
}
