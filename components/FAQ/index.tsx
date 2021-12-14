import React, { useState } from 'react'
import { Div, Text, Image, Icon } from 'atomize'
import { Button, Collapse } from 'react-bootstrap'
import { SectionTitle } from '../SectionTitle'
import { Section } from '../Section'
import { isAppleDevice } from '../../utils/isAppleDevice'

interface ServiceCardProps {
  title: String,
  content: String,
  faqId: String
}

const FAQCard: React.FC<ServiceCardProps> = ({ title, content, faqId }) => {
  const [open, setOpen] = useState(false);

  return(
    <Div onClick={() => setOpen(!open)} p={{ x: '1.2rem', y: '1.5rem' }} m={{ b: '1rem' }} w='90%' h='auto' bg='white' shadow='primary' rounded='30px' d='flex' flexDir='column' justify='center' align='center'>
      <Div d='flex' justify='space-between' align='center' w='100%'>
        <Text textSize='1.3rem'>{ title }</Text>

        <Button
          variant='link'
          onClick={() => setOpen(!open)}
          aria-controls={faqId}
          aria-expanded={open}
        >
          <Icon name={open ? "DownArrow" : "RightArrow"} size="25px" color='primary'/>
        </Button>
      </Div>

      <Div m={{ t: '1rem' }} d={open ? 'block' : 'none'}/>

      <Collapse in={open}>
        <Div id={faqId} d='flex' justify='flex-start' w='100%' p={{ x: '.2rem' }}>
          <Text w='90%' textColor='secondary' textSize='1.1rem' style={{ lineHeight: '30px' }}> {content} </Text>
        </Div>
      </Collapse>
    </Div>
  )
}

export const FAQ: React.FC<void> = () => {
  return(
    <Section>
      <SectionTitle
        title='Contato'
        subtitle='Atendimentos. Dúvidas. Orçamentos.'
      />

      <Div m={{ t: '2rem' }} d='flex' flexDir='column' justify='space-between' align='center' w='100%'>
        <FAQCard
          faqId='faq4'
          title='Como faço um agendamento?'
          content={['Você pode agendar uma avaliação diretamente comigo, ', <a href='https://wa.me/4899468322'>pelo Whatsapp</a>, ' ou ', <a href='https://www.instagram.com/drabeatrizdella'>pelo Instagram</a>, '.']}
        />

        <FAQCard
          faqId='faq1'
          title='Qual minha formação?'
          content='Formei em 2021 pela Unesc e atualmente curso pós-graduação em Endodontia pela ABDC Magic School'
        />

        <FAQCard
          title='Onde eu atendo?'
          content={['Estou atendendo no consultório Dra. Renata Dal Molin, na ', <a href={ isAppleDevice() ? 'http://maps.apple.com/?address=907,Rua+Altamiro+Guimarães,Icara,Santa+Catarina' : 'https://goo.gl/maps/gw2uB9q42LW7E6gU7' }> Rua Altamiro Guimarães, 907, Sala 01, em Içara </a>, '.']}
          faqId='faq2'
        />

        <FAQCard
          faqId='faq3'
          title='Quais os protocolos na pandemia?'
          content='Desde o início de 2020 todos os atendimentos tiveram mudanças! Uso de máscara é obrigatório para entrar no consultório, tem álcool em gel disponível e eu atendo com máscara N95 e face shield para maior segurança de todos!'
        />

        <FAQCard
          faqId='faq4'
          title='É possível parcelar meu tratamento?'
          content='O pagamento pode ser feito no dinheiro à vista, débito, pix ou até parcelar no cartão e boleto.'
        />
      </Div>
    </Section>
  )
}
