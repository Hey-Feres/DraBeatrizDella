import React from 'react'
import { Div, Text } from 'atomize'

interface SectionTitleProps {
  title: string,
  subtitle: React.ReactNode
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return(
    <Div
      d='flex'
      flexDir='column'
      justify='center'
      align='center'
      m={{
        b: { xs: '1rem', lg: '2rem' }
      }}
    >
      <Text
        textAlign='center'
        textWeight='900'
        textColor='primary'
        textSize={{
          xs: '1.7rem',
          lg: '2.2rem'
        }}
      >
        { title }
      </Text>

      <Text
        textAlign='center'
        m={{ t: '.5rem' }}
        textSize={{
          xs: '1.2rem',
          lg: '1.7rem'
        }}
        textColor='secondary'
      >
        { subtitle }
      </Text>
    </Div>
  )
}
