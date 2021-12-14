import React from 'react'
import { Div, Text, Button, Image } from 'atomize'

interface Props {}

export const Navbar: React.FC<Props> = () => {
  return(
    <>
    <Div
      d='flex'
      justify='space-between'
      align='center'
      p={{ y: '1rem', x: '1.5rem' }}
      pos='absolute'
      top='0'
      right='0'
      w='100%'
    >
      <Image src='/images/NavLogo.png' w='30px' />

      <a href='https://wa.me/4899468322'>
        <Button
          bg="white"
          hoverBg="white"
          rounded="circle"
          p={{ x: "2rem" }}
          shadow="primary"
          hoverShadow="secondary"
          textColor='primary'
          textSize='1.2rem'
        >
          Agende
        </Button>
      </a>
    </Div>
    </>
  )
}