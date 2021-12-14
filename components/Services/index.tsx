import React from 'react'
import { Div, Text, Image } from 'atomize'
import { SectionTitle } from '../SectionTitle'

interface ServiceCardProps {
  image: string,
  alt: string,
  w: string,
  h: string,
  title: string,
  subtitle: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, alt, w, h, title, subtitle }) => {
  return(
    <Div
      bgImg={image}
      w={w}
      h={h}
      rounded={{
        xs: '30px',
        lg: '50px'
      }}
      alt={alt}
      bgSize='cover'
      bgPos='center'
      m={{b: '1rem'}}
    >
      <Div
        rounded={{
          xs: '30px',
          lg: '50px'
        }}
        bg='overlay'
        w={w}
        h={h}
        p={{
          x: { xs: '1rem', lg: '2rem' },
          t: { xs: '1.5rem', lg: '2.5rem' }
        }}
      >
        <Text
          textSize={{
            xs: '1.3rem',
            lg: '2.5rem'
          }}
          textColor='white'
        >
          { title }
        </Text>
        <Text
          textSize={{
            xs: '.9rem',
            lg: '1.5rem'
          }}
          m={{
            t: { xs: '.3rem', lg: '.4rem' }
          }}
          textColor='white'
        >
          { subtitle }
        </Text>
      </Div>
    </Div>
  )
}

export const Services: React.FC<void> = () => {
  return(
    <Div
      d='flex'
      flexDir='column'
      justify='space-between'
      align='center'
      w={{
        xs: '95%',
        lg: '80%'
      }}
      m={{
        t: { xs: '3rem', lg: '5rem' },
        l: { xs: '2.5%', lg: '10%'}
      }}
    >
      <SectionTitle
        title='Como Posso Ajudar?'
        subtitle={['Atendimento humanizado.', <br/>,  'Focado em sua necessidade.']}
      />

      <Div
        m={{
          t: { xs: '2rem', lg: '5rem' }
        }}
        d='flex'
        justify='space-between'
        align='center'
        w='100%'
      >
        <Div
          d='flex'
          flexDir='column'
          justify='center'
          align={{
            xs: 'space-between',
            lg: 'space-between',
            xl: 'flex-end'
          }}
          m={{
            r: { xl: '1rem' }
          }}
          w='100%'
        >
          <ServiceCard
            image='/images/Person1.jpeg'
            alt='Person1'
            w={{
              xs: '12rem',
              lg: '28rem'
            }}
            h={{
              xs: '12rem',
              lg: '28rem'
            }}
            title='Clareamentos'
            subtitle='Seu sorriso mais branco.'
          />

          <ServiceCard
            image='/images/Person3.jpeg'
            alt='Person3'
            w={{
              xs: '12rem',
              lg: '28rem'
            }}
            h={{
              xs: '20rem',
              lg: '40rem'
            }}
            title='Tratamento de Canal'
            subtitle='Endodontia, com excelência.'
          />

          <ServiceCard
            image='/images/Person5.jpeg'
            alt='Person5'
            w={{
              xs: '12rem',
              lg: '28rem'
            }}
            h={{
              xs: '20rem',
              lg: '40rem'
            }}
            title='Próteses'
            subtitle='Seu sorriso renovado.'
          />
        </Div>

        <Div
          d='flex'
          flexDir='column'
          justify='center'
          align={{
            xs: 'space-between',
            lg: 'space-between',
            xl: 'flex-start'
          }}
          m={{
            l: { xl: '1rem' }
          }}
          w='100%'
        >
          <ServiceCard
            image='/images/Person2.jpeg'
            alt='Person2'
            w={{
              xs: '12rem',
              lg: '28rem'
            }}
            h={{
              xs: '20rem',
              lg: '40rem'
            }}
            title='Limpezas'
            subtitle='Higiene bucal em dia.'
          />

          <ServiceCard
            image='/images/Person4.jpeg'
            alt='Person4'
            w={{
              xs: '12rem',
              lg: '28rem'
            }}
            h={{
              xs: '12rem',
              lg: '28rem'
            }}
            title='Dor Orofacial'
            subtitle='Chega de dor.'
          />

          <ServiceCard
            image='/images/Person6.jpeg'
            alt='Person6'
            w={{
              xs: '12rem',
              lg: '28rem'
            }}
            h={{
              xs: '20rem',
              lg: '40rem'
            }}
            title='Restaurações'
            subtitle='Autoestima restaurada.'
          />
        </Div>
      </Div>
    </Div>
  )
}
