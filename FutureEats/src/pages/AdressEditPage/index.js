import React, { useEffect } from 'react';
import useForm from '../../hooks/useForm';
import { TextField } from '@material-ui/core';

import labefood from '../../services/labefood';

import { Container, InputContainer, P, ButtonEats, Header } from './styled';
import arrow from '../../assets/arrow.png';

import useProtectedPage from 'hooks/useProtectedPage';
import { useHistory } from 'react-router';
import { goToProfile } from 'routes/coordinator';

function AdressEditPage() {
  useProtectedPage();

  const AdressForm = {
    street: '',
    number: '',
    neighbourhood: '',
    city: '',
    state: '',
    complement: '',
  };

  const history = useHistory();
  const token = window.localStorage.getItem('token');
  const [form, handleInputChange, resetForm, setForm] = useForm(AdressForm);

  useEffect(() => {
    fullAddress();
  }, []);

  const fullAddress = () => {
    labefood
      .getFullAddress(token)
      .then((res) => {
        setForm(res.address);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateAddress = (event) => {
    event.preventDefault();

    labefood
      .addAddress(form, token)
      .then((res) => {
        window.localStorage.setItem('token', res.token);
        window.alert('Novo Endereço Salvo com Sucesso');
        goToProfile(history);
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
          onClick={() => goToProfile(history)}
        />
        <P>Endereço</P>
      </Header>

      <InputContainer>
        <form onSubmit={updateAddress}>
          <TextField
            name={'street'}
            value={form.street}
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
            value={form.number}
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
            value={form.complement}
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
            value={form.neighbourhood}
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
            value={form.city}
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
            value={form.state}
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

export default AdressEditPage;
