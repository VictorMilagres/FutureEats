import styled from 'styled-components'

export const OrderContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: fixed;
width: 100%;
height: 7rem;
background: #5cb646;
margin-top: calc(100vh - 10rem);
gap: 10px;
`

export const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 5rem 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    "clock label"
    "clock restaurant"
    "clock total";
`;

export const ClockWrapper = styled.div`
  grid-area: clock;
  display: flex;
  flex-direction: column;
`;

export const ClockIcon = styled.div`
  text-align: center;
  margin-top: 2.75rem;
`;

export const Label = styled.div`
  grid-area: label;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #ffffff;
  margin-top: 1.5rem;
`;

export const Restaurant = styled.div`
  grid-area: restaurant;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: black;
  margin-top: 0.5rem;
`;

export const Total = styled.div`
  grid-area: total;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: black;
`;

