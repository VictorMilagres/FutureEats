import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const Container = styled.div `
display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
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

export const P = styled.p `
color: black;
font-weight: bold;
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
export const Header = styled.div `
margin-top: 5px;
width: 100vw;
border-bottom: solid 1px #E8E8E8;
img {
  padding: 10px;
}
`