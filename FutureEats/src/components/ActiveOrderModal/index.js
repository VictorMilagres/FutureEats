import React from 'react';
import { OrderContainer, Wrapper, ClockWrapper, ClockIcon, Label, Restaurant, Total } from './styled'

const clock = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
  >
    <path
      fill="#FFF"
      fillRule="evenodd"
      d="M17 9h-2v8.525L22 22l1-1.748-6-3.793V9zm-1 18C9.922 27 5 22.078 5 16S9.922 5 16 5s11 4.922 11 11-4.922 11-11 11zm-.014-25C8.258 2 2 8.272 2 16s6.258 14 13.986 14C23.728 30 30 23.728 30 16S23.728 2 15.986 2z"
    />
  </svg>
)

const ActiveOrderModal = (order) => {
  return (
    <OrderContainer>
      <Wrapper>
        <ClockWrapper>
          <ClockIcon>{ clock }</ClockIcon>
        </ClockWrapper>
        <Label>Pedido em andamento</Label>
        <Restaurant>{order.order.restaurantName}</Restaurant>
        <Total>SUBTOTAL R${order.order.totalPrice.toFixed(2)}</Total>
      </Wrapper>
    </OrderContainer>
  );
};

export default ActiveOrderModal;
