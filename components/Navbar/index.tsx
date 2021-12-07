import React from 'react'
import { Div, Text, Button } from 'atomize'

export const Navbar: React.FC<void> = () => {
  return(
    <>
    <Div
      d='flex'
      justify='space-between'
      align='center'
      p={{ y: '1rem', x: '1rem' }}
      pos='absolute'
      top='0'
      right='0'
      w='100%'
    >
      <Text textSize='title'> LOGO </Text>
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
    </Div>
    </>
  )
}