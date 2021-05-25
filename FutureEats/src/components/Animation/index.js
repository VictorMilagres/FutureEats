import React from 'react';
import styled, { keyframes } from 'styled-components';

const bouncedelay = keyframes`
  0%, 80%, 100% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% { 
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
`;

const Spinner = styled.div`
  margin: 300px auto 0;
  width: 70px;
  text-align: center;

  & > div {
    width: 18px;
    height: 18px;
    background-color: #5cb646;

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: ${bouncedelay} 1.4s infinite ease-in-out both;
    animation: ${bouncedelay} 1.4s infinite ease-in-out both;
  }

  & > div:first-of-type {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  & > div:nth-of-type(2) {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
`;

function Animation() {
  return (
    <Spinner>
      <div></div>
      <div></div>
      <div></div>
    </Spinner>
  );
}

export default Animation;
