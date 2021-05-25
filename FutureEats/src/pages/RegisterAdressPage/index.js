import React from 'react';
import useForm from '../../hooks/useForm';
import { TextField } from '@material-ui/core';
import { Container, InputContainer, P, ButtonEats, Header } from './styled';
import { goToHome, goToLastPage } from 'routes/coordinator';
import { useHistory } from 'react-router';
import labefood from 'services/labefood';

import arrow from '../../assets/arrow.png';

import useProtectedPage from 'hooks/useProtectedPage';

function RegisterAdressPage() {
  useProtectedPage();

  const registerAdressForm = {
    street: '',
    number: '',
    neighbourhood: '',
    city: '',
    state: '',
    complement: '',
  };

  const history = useHistory();
  const [form, handleInputChange] = useForm(registerAdressForm);

  const createAdress = (event) => {
    event.preventDefault();

    const token = window.localStorage.getItem('token');

    labefood
      .addAddress(form, token)
      .then((res) => {
        window.localStorage.setItem('token', res.token);
        goToHome(history);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Header>
        <img
          src={arrow}
          alt="navigation arrow"
          onClick={() => goToLastPage(history)}
        />
      </Header>
      <P>Meu Endereço</P>
      <InputContainer>
        <form onSubmit={createAdress}>
          <TextField
            name={'street'}
            onChange={handleInputChange}
            label={'Logradouro'}
            placeholder={'Rua / AV'}
            variant={'outlined'}
            fullWidth
            margin={'normal'}
            autoFocus
            required
            type={'text'}
          />

          <TextField
            name={'number'}
            onChange={handleInputChange}
            label={'Número'}
            placeholder={'Número'}
            variant={'outlined'}
            fullWidth
            margin={'normal'}
            required
            type={'number'}
          />

          <TextField
            name={'complement'}
            onChange={handleInputChange}
            label={'Complemento'}
            placeholder={'Apto / Bloco'}
            variant={'outlined'}
            fullWidth
            margin={'normal'}
            type={'text'}
          />
          <TextField
            name={'neighbourhood'}
            onChange={handleInputChange}
            label={'Bairro'}
            placeholder={'Bairro'}
            variant={'outlined'}
            fullWidth
            margin={'normal'}
            required
            type={'text'}
          />
          <TextField
            name={'city'}
            onChange={handleInputChange}
            label={'Cidade'}
            placeholder={'Cidade'}
            variant={'outlined'}
            fullWidth
            margin={'normal'}
            required
            type={'text'}
          />
          <TextField
            name={'state'}
            onChange={handleInputChange}
            label={'Estado'}
            placeholder={'Estado'}
            variant={'outlined'}
            fullWidth
            margin={'normal'}
            required
            type={'text'}
          />

          <ButtonEats
            type={'submit'}
            fullWidth
            variant={'contained'}
            color={'primary'}
            margin={'normal'}
          >
            <P>Salvar</P>
          </ButtonEats>
        </form>
      </InputContainer>
    </Container>
  );
}

export default RegisterAdressPage;
