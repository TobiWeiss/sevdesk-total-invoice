import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Text from '../../components/Text'
Text

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0()
  loginWithRedirect();

  return (
    <Container>
    </Container>
  )
}
export default LoginPage
