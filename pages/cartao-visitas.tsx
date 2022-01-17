import React from 'react'
import { Div, Image, Text } from 'atomize'
import Link from 'next/link'
import { linkTo } from '../utils/linkTo'

interface ContactRowProps {
  text: string,
  image: string,
  url: string
}

const ContactRow: React.FC<ContactRowProps> = ({ text, image, url }) => {
  return(
    <a style={{ width: '100%' }} href={ url } target="_blank">
      <Div
        d="flex"
        justify="center"
        align="center"
        w="100%"
        bg="#FFF7F1"
        p=".5rem"
        rounded="circle"
        m={{ b: '1rem' }}
      >
        <Div w="25%" d="flex" justify="flex-end" align="center">
          <Image src={ image } w="30px" m={{ r: '.5rem' }} />
        </Div>

        <Div w="75%" d="flex" justify="flex-start" align="center">
          <Text textSize="1.2rem" textColor="#8D8D8D" m={{ l: '.5rem' }}>{ text }</Text>
        </Div>
      </Div>
    </a>
  )
}

const CartaoVisitas: React.FC = () => {
  return(
    <Div
      bg="visitCardBg"
      d="flex"
      justify="center"
      h="100vh"
      w="100vw"
    >
      <Div
        bg="visitCardBg"
        d="flex"
        flexDir="column"
        justify="center"
        align="center"
        p="1.5rem"
        h="100vh"
        w={{ xs: "100vw", lg: "30vw" }}
      >
        <Image src="/images/NavLogoTexto2.png" m={{ b: '5rem' }} />

        <ContactRow text="Agendar uma Avaliação" image="/images/whatsapp.png" url={linkTo("whatsapp")} />
        <ContactRow text="Conheça meu Trabalho" image="/images/instagram.png" url={linkTo("instagram")} />
        <ContactRow text="Atendimento - Criciúma" image="/images/location.png" url={linkTo("criciumaLocation")} />
        <ContactRow text="Atendimento - Içara" image="/images/location.png" url={linkTo("icaraLocation")} />
        <ContactRow text="Mais Sobre Mim - Site" image="/images/globe.png" url={linkTo("site")} />

        <Text m={{ t: '5rem' }} textSize="1.2rem" textColor="#8D8D8D"> CRO/SC 20.616 </Text>
      </Div>
    </Div>
  )
}

export default CartaoVisitas
