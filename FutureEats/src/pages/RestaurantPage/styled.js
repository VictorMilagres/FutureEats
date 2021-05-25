import styled from 'styled-components'

export const Container = styled.div`
  font-family: 'Roboto', sans-serif;
`

export const Header = styled.div `
    display: flex;
    margin-top: 5px;
    width: 100vw;
    border-bottom: solid 1px #E8E8E8;

img {
    padding: 10px;
}
p {
    margin-left: 30%;
}
`

export const P = styled.p `
    color: black;
    font-weight: bold;
    text-align: center;
`

export const Subtitle = styled.h3`
    width: 90%;
    border-bottom: 1px solid black;
    margin-left: 20px;
`

export const Restaurant = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(8, 1fr);
    grid-template-areas:
        "img img img"
        "img img img"
        "img img img"
        "img img img"
        "nme nme nme"
        "cat cat cat"
        "dlv shi shi"
        "adr adr adr";
    height: 15rem;
    width: 90%;
    border-radius: 8px;
    margin-top: 3.75rem;
    margin: 5px auto;
`

export const Img = styled.img`
  grid-area: img;
  width: 100%;
  height: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const Name = styled.div`
  grid-area: nme;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #5cb646;
  display: flex;
  align-items: center;
  margin-top: 1.125rem;
`;

export const Category = styled.div`
  font-family: 'Roboto', sans-serif;
  grid-area: cat;
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #b8b8b8;
`;

export const Delivery = styled.div`
  font-family: 'Roboto', sans-serif;
  grid-area: dlv;
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #b8b8b8;
`;

export const Shipping = styled.div`
  font-family: 'Roboto', sans-serif;
  grid-area: shi;
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #b8b8b8;
`;

export const Address = styled.div`
  font-family: 'Roboto', sans-serif;
  grid-area: adr;
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #b8b8b8;
`;

export const Product = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(2, 2.5rem) 2rem;
  grid-template-areas:
    "img img img nme nme nme nme nme nme qtd"
    "img img img des des des des des des des"
    "img img img brl brl ... ... btn btn btn";
  width: 90%;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  margin-bottom: 0.5rem;
  margin: 5px auto;
`;

export const PdtImg = styled.img`
  grid-area: img;
  width: 100%;
  height: 100%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const PdtName = styled.div`
  grid-area: nme;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #5cb646;
  display: flex;
  align-items: center;
  margin-top: 1.125rem;
  margin-left: 1rem;
`;


export const PdtDescription = styled.div`
  font-family: 'Roboto', sans-serif;
  grid-area: des;
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #b8b8b8;
  margin-left: 1rem;
`;

export const PdtPrice = styled.div`
  font-family: Roboto;
  grid-area: brl;
  margin-left: 1rem;
`;

export const Button = styled.div`
  color: #5cb646;
  font-family: 'Roboto', sans-serif;
  grid-area: btn;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border: solid 1px #5cb646;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: -1px;
  margin-bottom: -1px;
`;

export const Qtd = styled.div`
    background-color: #5cb646;
    text-align: center;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin: 5px;
    border: 1px solid #fff;
    box-shadow: 1px 1px 5px grey;

    p {
      margin-top: 7px;
      font-weight: bold;
      color: #fff;
    }
`

export const WhiteDiv = styled.div`
  height: 4rem;
`