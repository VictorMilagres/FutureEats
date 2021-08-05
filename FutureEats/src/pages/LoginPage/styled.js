import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const Container = styled.div `
display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
height: 100%;
margin-top: 10vh;
font-family: 'Roboto', sans-serif;
`

export const InputContainer = styled.div `
display: flex;
flex-direction: column;
align-items: center;
width: 80vw;
max-width: 450px;
margin-bottom: 20px;
`
export const LoginFormContainer = styled.div `
display: flex;
flex-direction: column;
align-items: center;
width: 80vw;
max-width: 450px;
margin-bottom: 20px;
`

export const RegisterButtonContainer = styled.div `
width: 80vw;
max-width: 450px;
`

export const P = styled.p `
color: black;
font-weight: bold;
`

export const Img = styled.img `
width: 104px;
height: 58px;
margin-bottom: 30px;
`
export const ButtonEats = styled(Button) `
  width: 328px;
  height: 42px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000000;
`