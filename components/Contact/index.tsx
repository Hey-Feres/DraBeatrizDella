import React from 'react'
import { Div, Text, Image } from 'atomize'
import { SectionTitle } from '../SectionTitle'
import { Section } from '../Section'

interface ContactIconProps {
  image: string,
  link: string
}

const ContactIcon: React.FC<ContactIconProps> = ({ image, link }) => {
  return(
    <a href={link}>
      <Div
        w='5rem'
        h='5rem'
        bg='white'
        shadow='primary'
        rounded='50px'
        d='flex'
        justify='center'
        align='center'
      >
        <Image src={image} w='40px' />
      </Div>
    </a>
  )
}

export const Contact: React.FC<void> = () => {
  return(
    <Section>
      <SectionTitle
        title='Contato'
        subtitle='Atendimentos. Dúvidas. Orçamentos.'
      />

      <Div
        m={{ t: '2rem' }}
        d='flex'
        justify='space-between'
        align='center'
        w={{
          xs: '75%',
          lg: '30%'
        }}
      >
        <ContactIcon image='/images/whatsapp.png' link='https://wa.me/4899468322' />
        <ContactIcon image='/images/instagram.png' link='https://www.instagram.com/drabeatrizdella' />
        <ContactIcon image='/images/phone.png' link='tel:4899468322' />
      </Div>
    </Section>
  )
}
