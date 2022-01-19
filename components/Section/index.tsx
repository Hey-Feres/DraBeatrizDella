import React from 'react'
import { Div } from 'atomize'

interface Props {}

export const Section: React.FC<Props> = (props) => {
  return(
    <Div
      d='flex'
      flexDir='column'
      justify='space-between'
      align='center'
      w={{
        xs: '95%',
        lg: '70%'
      }}
      m={{
        t: { xs: '5rem', lg: '7rem' },
        l: { xs: '2.5%', lg: '15%'}
      }}
    >
      { props.children }
    </Div>
  )
}
