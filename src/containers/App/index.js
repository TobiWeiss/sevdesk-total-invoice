import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import GlobalStyles from '../../global-styles'
import NotFoundPage from '../NotFoundPage'
import DeliveryNotePage from '../DeliveryNotePage'
import theme from '../../theme'
import { ThemeProvider } from 'styled-components'
import { ModalProvider } from 'styled-react-modal'
import ModalRoot from '../../components/Modal/ModalRoot'
import { Auth0Provider } from '@auth0/auth0-react'
import LoginPage from '../LoginPage'

const App = () => (
  <>
    <Auth0Provider
      domain='dev-rnpwp6gn.eu.auth0.com'
      clientId='WfO3QUAcqvqaoOYJf6o2mtmUzrejdd8Q'
      redirectUri={window.location.origin}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ModalProvider>
          <ToastContainer pauseOnHover position='bottom-right' />
          <Switch>
            <Route exact path='/' component={DeliveryNotePage} />
            <Route exact path='/logout' component={NotFoundPage} />
            <Route exact path='/login' component={LoginPage} />
            <Route component={NotFoundPage} />
          </Switch>
          <ModalRoot />
        </ModalProvider>
      </ThemeProvider>
    </Auth0Provider>
  </>
)

export default App
