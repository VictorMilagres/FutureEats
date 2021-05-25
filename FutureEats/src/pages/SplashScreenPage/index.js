import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Grow } from '@material-ui/core';

import logoWhite from '../../assets/logo-white.png';

const SplashScreenPage = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.replace('/login');
    }, 3000);
  }, [history]);

  return (
    <Container
      style={{
        height: '100vh',
        padding: 0,
        backgroundColor: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      maxWidth='md'
    >
      <Grow in={true} timeout={1500}>
        <img src={logoWhite} alt='FutureEats' />
      </Grow>
    </Container>
  );
};

export default SplashScreenPage;
