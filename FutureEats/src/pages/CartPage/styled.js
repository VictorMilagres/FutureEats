import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  position: relative;
  font-family: 'Roboto', sans-serif;
`;

export const P = styled.p`
  color: black;
  font-weight: bold;
  text-align: center;
`;

export const Header = styled.div`
  display: flex;
  margin-top: 5px;
  width: 100vw;
  border-bottom: solid 1px #e8e8e8;
  justify-content: center;
`;
export const Payment = styled.div`
  width: 90vw;
  border-bottom: 1px solid black;
  margin-left: 18px;
`;

export const PaymentMethod = styled.p`
  text-align: start;
  margin-right: 0;
  font-weight: normal;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
`;

export const SubTotalText = styled.p`
  font-weight: normal;
  font-size: 1rem;
  font-weight: 600;
  text-align: end;
  margin-right: 3rem;
`;

export const FreteText = styled.p`
  font-size: 1rem;
  font-weight: 600;
  text-align: end;
  margin-right: 3rem;
`;

export const CheckBoxContainer = styled.div`
  margin-top: 1rem;
  height: 30vh;
`;

export const LabelCheckBox = styled.label`
  font-weight: normal;
  font-size: 1rem;
  margin-left: 10px;
`;

export const Button = styled.button`
  width: 90vw;
  height: 42px;
  border-radius: 2px;
  background-color: #5cb646;
  display: flex;
  justify-content: center;
  font-weight: bold;
  align-items: center;
  font-family: 'Roboto', 'Open Sans', sans-serif;
  font-size: 16px;
  letter-spacing: -0.39px;
  text-align: center;
  margin-left: 1.5rem;
  margin-top: 1.5rem;
  border: 0;
`;
export const InputCheck = styled.input`
  margin-left: 1rem;
`;

export const BoxInfo = styled.div`
  & * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  max-width: 100vw;
  background-color: #eeeeee;
  padding: 0.75rem 1rem;
  font-family: 'Roboto', 'Open Sans', sans-serif;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 0.9rem;
  font-weight: 600;
`;

export const Title = styled.p`
  color: #b8b8b8;
`;

export const InfoAddress = styled.p`
  color: black;
  margin-bottom: 1rem;
  margin-left: 1rem;
`;

export const Restaurant = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-template-areas:
    'img img img'
    'img img img'
    'img img img'
    'img img img'
    'nme nme nme'
    'cat cat cat'
    'dlv shi shi'
    'adr adr adr';
  height: 5.5rem;
  width: 90%;
  border-radius: 8px;
  margin-top: 3.75rem;
  margin: 5px auto;
`;

export const Name = styled.div`
  grid-area: nme;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #5cb646;
  display: flex;
  align-items: center;
  margin-top: 0.525rem;
`;

export const Delivery = styled.div`
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
  margin-top: 0.525rem;
`;

export const Address = styled.div`
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
  margin: 0.525rem 0;
`;

export const Product = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(2, 2.5rem) 2rem;
  grid-template-areas:
    'img img img nme nme nme nme nme nme qtd'
    'img img img des des des des des des des'
    'img img img brl brl ... ... btn btn btn';
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
  grid-area: brl;
  margin-left: 1rem;
`;

export const Qtd = styled.div`
  width: 31px;
  height: 31px;
  border-radius: 0 8px 0 8px;
  border: solid 1px #5cb646;
  color: #5cb646;
  text-align: center;

  p {
    margin-top: 7px;
    font-weight: bold;
  }
`;

export const PdtButton = styled.div`
  color: #e02020;
  grid-area: btn;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border: solid 1px #e02020;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: -1px;
  margin-bottom: -1px;
`;

export const CarrinhoVazio = styled.div`
  text-align: center;
`;

export const Frete = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  font-weight: bold;
`;

export const SubTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  font-weight: bold;

  strong {
    color: #5cb646;
  }
`;
