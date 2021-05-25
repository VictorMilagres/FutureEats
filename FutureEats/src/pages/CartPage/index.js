import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import {
  Container,
  P,
  Header,
  Payment,
  CheckBoxContainer,
  LabelCheckBox,
  Button,
  InputCheck,
  PaymentMethod,
  BoxInfo,
  InfoAddress,
  Title,
  Restaurant,
  Name,
  Delivery,
  Address,
  Product,
  PdtImg,
  PdtName,
  PdtPrice,
  PdtDescription,
  Qtd,
  CarrinhoVazio,
  PdtButton,
  SubTotal,
  Frete,
} from './styled';
import FormControl from '@material-ui/core/FormControl';

import useProtectedPage from 'hooks/useProtectedPage';
import Footer from 'components/Footer';
import labefood from 'services/labefood';
import { GlobalStateContext } from 'global/GlobalStateContext';
import Animation from 'components/Animation';

function CartPage() {
  useProtectedPage();
  const history = useHistory()
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const {
    carrinho,
    products,
    removerDoCarrinho,
    alterarCarrinho,
    resetAll,
    setActiveOrder,
  } = useContext(GlobalStateContext);

  useEffect(() => {
    const token = localStorage.getItem('token');
    labefood
      .getProfile(token)
      .then((response) => {
        setAddress(response.user.address);
      })
      .catch((err) => {
        alert('Falha ao adquirir seu endereço');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleInputChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const sendOrder = (e) => {
    e.preventDefault();
    const productsList = products.map((produto) => {
      return {
        id: produto.id,
        quantity: produto.quantity,
      };
    });
    const token = localStorage.getItem('token');
    const order = {
      products: productsList,
      paymentMethod: paymentMethod,
    };
    labefood
      .placeOrder(order, token, carrinho.id)
      .then((response) => {
        setActiveOrder(response);
        resetAll();
        window.location.reload()
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  const alterarCarrinhoAux = (id) => {
    const quantidade = Number(prompt('Digite a quantidade nova'));
    if (isNaN(quantidade)) {
      alert('Numero invalido');
      return;
    }
    alterarCarrinho(id, quantidade);
  };

  if (loading) {
    return <Animation />;
  }

  return (
    <Container>
      <Header>
        <P>Meu Carrinho</P>
      </Header>
      <BoxInfo>
        <Title>Endereço de entrega</Title>
        <InfoAddress>{address}</InfoAddress>
      </BoxInfo>
      <div>
        {products?.length > 0 ? (
          <>
            <Restaurant>
              <Name>{carrinho.name}</Name>
              <Address>{carrinho.address}</Address>
              <Delivery>
                {carrinho.deliveryTime - 5} - {carrinho.deliveryTime + 5} min
              </Delivery>
            </Restaurant>
            <div>
              {products?.map((produto) => {
                return (
                  <Product key={produto.id}>
                    <PdtImg height="100" src={produto.photoUrl} />
                    <PdtName>{produto.name}</PdtName>
                    <PdtPrice>
                      R${produto.price.toFixed(2) * produto.quantity}
                    </PdtPrice>
                    <PdtDescription>{produto.description}</PdtDescription>
                    <Qtd onClick={() => alterarCarrinhoAux(produto.id)}>
                      <p>{produto.quantity}</p>
                    </Qtd>
                    <PdtButton onClick={() => removerDoCarrinho(produto.id)}>
                      Remover
                    </PdtButton>
                  </Product>
                );
              })}
            </div>
          </>
        ) : (
          <CarrinhoVazio>
            <p>Carrinho Vazio</p>
          </CarrinhoVazio>
        )}
        <div>
          <Frete>
            <p>Frete: R${products ? carrinho.shipping : 0}</p>
          </Frete>
          <SubTotal>
            <p>SUBTOTAL </p>
            <strong>
              R$
              {products
                ? products.reduce((acc, currentValue) => {
                    let price = currentValue.price;
                    if (typeof price !== 'number') {
                      price = Number(currentValue.price.replace(',', '.'));
                    }
                    return acc + price * currentValue.quantity.toFixed(2);
                  }, 0)
                : 0}
            </strong>
          </SubTotal>
        </div>
      </div>
      <Payment>
        <PaymentMethod>Forma de Pagamento</PaymentMethod>
      </Payment>
      <FormControl>
        <CheckBoxContainer>
          <InputCheck
            type="radio"
            id="money"
            name="paymentMethod"
            value="money"
            onChange={handleInputChange}
            checked={paymentMethod === 'money'}
          />
          <LabelCheckBox>Dinheiro</LabelCheckBox> <br />
          <br />
          <InputCheck
            type="radio"
            id="creditcard"
            name="paymentMethod"
            value="creditcard"
            onChange={handleInputChange}
            checked={paymentMethod === 'creditcard'}
          />
          <LabelCheckBox>Cartão de crédito</LabelCheckBox>
          <Button type="submit" onClick={sendOrder}>
            Confirmar
          </Button>
        </CheckBoxContainer>
      </FormControl>
      
      <Footer />
    </Container>
  );
}

export default CartPage;
