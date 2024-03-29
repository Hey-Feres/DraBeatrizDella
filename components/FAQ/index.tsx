import React, { useState } from 'react'
import { Div, Text, Image, Icon } from 'atomize'
import { Button, Collapse } from 'react-bootstrap'
import { SectionTitle } from '../SectionTitle'
import { Section } from '../Section'
import { linkTo } from '../../utils/linkTo'

interface Props {}

interface ServiceCardProps {
  title: string,
  content: React.ReactNode,
  faqId: string
}

const FAQCard: React.FC<ServiceCardProps> = ({ title, content, faqId }) => {
  const [open, setOpen] = useState(false);

  return(
    <Div style={{ cursor: 'pointer' }} onClick={() => setOpen(!open)} p={{ x: '1.2rem', y: '1.5rem' }} m={{ b: '1rem' }} w='90%' h='auto' bg='white' shadow='primary' rounded='30px' d='flex' flexDir='column' justify='center' align='center'>
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
          <Text w='90%' textColor='secondary' style={{ lineHeight: '30px' }}> {content} </Text>
        </Div>
      </Collapse>
    </Div>
  )
}

export const FAQ: React.FC<Props> = () => {
  return(
    <Section>
      <SectionTitle
        title='FAQ'
        subtitle='Perguntas Frequentes.'
      />

      <Div m={{ t: '2rem' }} d='flex' flexDir='column' justify='space-between' align='center' w='100%'>
        <FAQCard
          faqId='faq4'
          title='Como faço um agendamento?'
          content={<p style={{ fontSize: "1.2rem" }}>Você pode agendar uma avaliação diretamente comigo, <a href={ linkTo("whatsapp") }>pelo Whatsapp</a> ou <a href={ linkTo("instagram") }>pelo Instagram</a>.</p>}
        />

        <FAQCard
          faqId='faq1'
          title='Qual minha formação?'
          content={<p style={{ fontSize: "1.2rem" }}>Formei em 2021 pela Unesc e atualmente curso pós-graduação em Endodontia pela ABDC Magic School</p>}
        />

        <FAQCard
          title='Onde eu atendo?'
          content={<p style={{ fontSize: "1.2rem" }}>Estou atendendo no consultório Dra. Renata Dal Molin, na <a href={ linkTo("icaraLocation") }> Rua Altamiro Guimarães, 907, Sala 01, em Içara </a>. <br/> Também atendo na Gold Dent na, <a href={ linkTo("icaraLocation") }> Rua Valentin Pizzetti, 321, em Criciúma. </a> </p>}
          faqId='faq2'
        />

        <FAQCard
          faqId='faq3'
          title='Quais os protocolos na pandemia?'
          content={<p style={{ fontSize: "1.2rem" }}>Desde o início de 2020 todos os atendimentos tiveram mudanças! Uso de máscara é obrigatório para entrar no consultório, tem álcool em gel disponível e eu atendo com máscara N95 e face shield para maior segurança de todos!</p>}
        />

        <FAQCard
          faqId='faq4'
          title='É possível parcelar meu tratamento?'
          content={
            <p style={{ fontSize: "1.2rem" }}>O pagamento pode ser feito no dinheiro à vista, débito, pix ou até parcelar no cartão e boleto.</p>
          }
        />
      </Div>
    </Section>
  )
}
