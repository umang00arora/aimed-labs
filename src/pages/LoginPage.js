import React from 'react'
import styled from 'styled-components'
import LoginContainer from '../components/LoginContainer'

const LoginPage = () => {
  return (
    <Page>
      <Photo src="./login.png" alt="" />
      <LoginContainer/>
    </Page>
  )
}

export default LoginPage

const Photo = styled.img`
width: 25vw;
height: 70vh;
margin-top: 15vh;
margin-left: 10vw;

@media (max-width: 992px){
  width: 80vw;
}
`

const Page = styled.div`
display: flex;
flex-wrap: wrap;
overflow: auto;
`
