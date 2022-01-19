import React from 'react'
import { Div, Text, Image } from 'atomize'

interface Props {}

export const MainCard: React.FC<Props> = () => {
  return(
    <Div
      d='flex'
      flexDir='column'
      justify='space-between'
      align='center'
      p={{ t: '3rem' }}
      h={{
        xs: '40rem',
        lg: '50rem'
      }}
      w={{
        xs: '95%',
        lg: '70%'
      }}
      m={{
        t: {
          xs: '5rem',
          lg: '5rem'
        },
        l: {
          xs: '2.5%',
          lg: '15%'
        }
      }}
      shadow='primary'
      rounded='40px'
      overflow='hidden'
      bg={{
        xs: 'linear-gradient(0deg, rgba(16,183,183,.15) 0%, rgba(255,255,255,1) 50%)',
        lg: 'linear-gradient(355deg, rgba(16,183,183,.15) 0%, rgba(255,255,255,1) 40%)'
      }}
    >
      <Div d='flex' flexDir='column' justify='center' align='center'>
        <Text
          textSize={{
            xs: '1.7rem',
            lg: '3rem'
          }}
          textWeight='900'
          textColor='primary'
        >
          Cuidando do seu sorriso.
        </Text>
        <Text
          m={{ t: '.5rem' }}
          textSize={{
            xs: '1.6rem',
            lg: '2.5rem'
          }}
          textColor='secondary'
          >
            Cuidando da sua autoestima.
          </Text>
      </Div>

      <Image
        src='/images/Beatriz.png'
        alt='Beatriz'
        loading='eager'
        placeholder='blur'
        w={{
          xs: '80%',
          lg: '40%'
        }}
      />
    </Div>
  )
}
