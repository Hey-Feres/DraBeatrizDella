import React from 'react'
import { Div, Text, Image } from 'atomize'

export const MainCard: React.FC<void> = () => {
  return(
    <Div
      d='flex'
      flexDir='column'
      justify='space-between'
      align='center'
      p={{ t: '3rem' }}
      h='40rem'
      w='95%'
      m={{ t: '5rem', l: '2.5%' }}
      shadow='primary'
      rounded='40px'
      style={{ background: "linear-gradient(0deg, rgba(16,183,183,.15) 0%, rgba(255,255,255,1) 50%)" }}
    >
      <Div d='flex' flexDir='column' justify='center' align='center'>
        <Text textSize='1.7rem' textWeight='900' textColor='primary'>Cuidando do seu sorriso.</Text>
        <Text m={{ t: '.5rem' }} textSize='1.6rem' textColor='secondary'>Cuidando da sua autoestima.</Text>
      </Div>
      <Image src="/images/Beatriz.png" alt="Beatriz" w='75%' />
    </Div>
  )
}
