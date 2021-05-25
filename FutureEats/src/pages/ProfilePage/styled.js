import styled from 'styled-components';

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  position: relative;
  font-family: 'Roboto', sans-serif;
`

export const P = styled.p `
color: black;
font-weight: bold;
text-align: center;
font-family: 'Roboto', sans-serif;
`
export const P1 = styled.p `
color: black;
font-weight: bold;
margin-left: 1rem;
font-family: 'Roboto', sans-serif;
`


export const Header = styled.div `
display: flex;
margin-top: 5px;
width: 100vw;
border-bottom: solid 1px #E8E8E8;
justify-content: center;
`

export const Button = styled.button`
  width: 90%;
  height: 42px;
  border-radius: 2px;
  background-color: #e02020;
  color: #fff;
  display: flex;
  justify-content: center;
  font-weight: bold;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  letter-spacing: -0.39px;
  text-align: center;
  margin-left: 1rem;
  margin-top: 1.5rem;
  border: 0;
`;

export const ProfileContainer = styled.div`
  span {
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    letter-spacing: -0.39px;
    margin-left: 16px;
    margin-top: 6px;
  }
`;

export const IconEdit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 60px;
  margin-top: 16px;
  width: 90vw;
`;

export const AddressContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 16px;
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  padding-bottom: 6px;
`;

export const Title = styled.p`
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  color: #b8b8b8;
  margin: 0;
  padding-top: 16px;
  margin-left: 1rem;
`;

export const Address = styled.div`
  margin-left: 1em;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
`;

export const WhiteDiv = styled.div`
  height: 4rem;
`