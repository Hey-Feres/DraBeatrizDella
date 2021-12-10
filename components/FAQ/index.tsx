import React from 'react'
import { Div, Text, Image, Icon } from 'atomize'

interface ServiceCardProps {
  title: String,
  content: String,
  faqId: String
}

const FAQCard: React.FC<ServiceCardProps> = ({ title, content, faqId }) => {
  return(
    <Div p={{ x: '1.2rem' }} m={{ b: '1rem' }} w='90%' h='5rem' bg='white' shadow='primary' rounded='30px' d='flex' flexDir='column' justify='center' align='center'>
      <Div d='flex' justify='space-between' align='center' w='100%'>
        <Text textSize='1.3rem'>{ title }</Text>

        <a data-toggle="collapse" data-target={`#${faqId}`} role="button" aria-expanded="false" aria-controls={faqId}>
          <Icon name="RightArrow" size="25px" color='primary'/>
        </a>
      </Div>

      <div class="collapse" id={faqId}>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Text>
      </div>
    </Div>
  )
}

export const FAQ: React.FC<void> = () => {
  return(
    <Div
      d='flex'
      flexDir='column'
      justify='space-between'
      align='center'
      w='95%'
      m={{ t: '3rem', l: '2.5%' }}
    >
      <Div d='flex' flexDir='column' justify='center' align='center'>
        <Text textAlign='center' textSize='1.7rem' textWeight='900' textColor='primary'>FAQ</Text>
        <Text textAlign='center' m={{ t: '.5rem' }} textSize='1.2rem' textColor='secondary'>Dúvidas Frequentes.</Text>
      </Div>

      <Div m={{ t: '2rem' }} d='flex' flexDir='column' justify='space-between' align='center' w='100%'>
        <FAQCard title='Qual minha formação?' content='' faqId='faq1' />
        <FAQCard title='Onde eu atendo?' content='' faqId='faq2' />
        <FAQCard title='Quais os protocolos na pandemia?' content='' faqId='faq3' />
        <FAQCard title='É possível parcelar meu tratamento?' content='' faqId='faq4' />
      </Div>
    </Div>
  )
}
