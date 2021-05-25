import React, { useEffect, useState } from 'react';
import labefood from 'services/labefood';
import {
  CardContainer,
  NameProduct,
  PriceProduct,
  TitleProduct,
  P
} from './styled';
import Animation from 'components/Animation';

const CardHistoric = () => {
  const [historic, setHistoric] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getHistoric();
  }, []);

  const getHistoric = () => {
    const token = window.localStorage.getItem('token');
    labefood
      .ordersHistory(token)
      .then((res) => {
        setHistoric(res.orders);
      })
      .catch((err) => {
        alert(err.response.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const data = (timestamp) => {
    const month = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ];

    const data = new Date(timestamp);
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = month[data.getMonth()];
    const ano = data.getFullYear();
    return `${dia} ${mes} ${ano}`;
  };

  if (loading) {
    return <Animation />;
  }

  return (
    <div>
      {historic &&
        historic.length > 0 &&
        historic.map((order) => {
          return (
            <CardContainer key={order.createdAt}>
              <NameProduct>{order.restaurantName}</NameProduct>
              <TitleProduct>{data(order.createdAt)}</TitleProduct>
              <PriceProduct>SUBTOTAL R$ {order.totalPrice}</PriceProduct>
            </CardContainer>
          );
        })}
      {historic && historic.length === 0 && (
        <P>
          <p>Você não realizou nenhum pedido</p>
        </P>
      )}
    </div>
  );
};

export default CardHistoric;
