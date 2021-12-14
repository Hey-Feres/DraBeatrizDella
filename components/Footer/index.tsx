import React from 'react'
import { Div, Text, Image, Icon } from 'atomize'
import Link from 'next/link'

interface Props {}

export const Footer: React.FC<Props> = () => {
  return(
    <Div
      d='flex'
      flexDir='column'
      justify='space-between'
      align='center'
      w='100%'
      bg='#F9F9F9'
      m={{
        t: { xs: '3rem', lg: '7rem' }
      }}
      p={{
        x: { xs: '5%', lg: '15%' }
      }}
    >
      <Div
        d='flex'
        justify='space-between'
        align='center'
        w='100%'
        p={{ x: '1rem' }}
        h='15rem'
      >
        <Image
          src='/images/FooterLogo.png'
          w={{
            xs: '170px',
            lg: '200px'
          }}
        />

        <Div>
          <Link href='/cartao-visitas'>
            <Text style={{ cursor: 'pointer' }} textAlign='center' textSize='1rem' textColor='secondary'> Cartão de Visitas Digital </Text>
          </Link>
        </Div>
      </Div>

      <Div
        d='flex'
        justify='center'
        align='center'
        w='100%'
        p={{
          x: '1rem',
          b: { lg: '2rem' }
        }}
        h='3rem'
      >
        <Text textSize='1.1rem' textColor='secondary'>
          Feito com ❤️ por <a target='_blank' href='https://br.linkedin.com/in/bruno-feres-villela-5232b0157'>Feres</a>
        </Text>
      </Div>
    </Div>
  )
}
