import React from 'react'
import { Div, Image, Text } from 'atomize'
import Link from 'next/link'

const CartaoVisitas: React.FC = () => {
  return(
    <Div
      d='flex'
      flexDir='column'
      justify='center'
      align='center'
      m={{
        x: { xs: '5%', lg: '0' }
      }}
      w={{
        xs: '90%',
        lg: '100%'
      }}
      h='100vh'
    >
      <Text
        textAlign='center'
        textSize={{
          xs: '1.8rem',
          lg: '1.5rem'
        }}
      >
        Ops! Essa tela não está pronta ainda. 🥲
      </Text>
      <Link href='/'>
        <Text
          textAlign='center'
          style={{ cursor: 'pointer' }}
          textColor='primary'
          m={{
            t: { xs: '1.5rem', lg: '1rem' }
          }}
          textSize={{
            xs: '1.4rem',
            lg: '1.2rem'
          }}
        >
          Que tal voltar pra tela inicial?
        </Text>
      </Link>
      <Image
        src='/images/WIP_Image.png'
        w={{
          xs: '100%',
          lg: '50%'
        }}
      />
    </Div>
  )
}

export default CartaoVisitas
