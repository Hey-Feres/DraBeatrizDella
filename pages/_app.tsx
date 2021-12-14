import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider, StyleReset } from 'atomize'
import { Provider as StyletronProvider } from 'styletron-react'
import { styletron } from '../styletron'
import { Theme } from '../theme.ts'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../store'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const theme = Theme
toast.configure()

const Main: React.FC<AppProps> = ({ Component, pageProps }) => {
  return(
    <ThemeProvider theme={theme}>
      <StyletronProvider value={styletron}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <StyleReset />
            <Head>
              <title>Dra. Beatriz Della</title>
              <meta name='viewport' content='initial-scale=1.0, width=device-width' />
              <link rel='preconnect' href='https://fonts.gstatic.com' />
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
              <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
              <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
              <link rel='preload' href='/fonts/Madegra.ttf' as='font' crossOrigin='' />
            </Head>

            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </StyletronProvider>
    </ThemeProvider>
  )
}

export default Main
