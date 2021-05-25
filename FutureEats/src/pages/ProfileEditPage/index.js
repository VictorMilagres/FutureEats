import React, { useEffect } from 'react';
import useForm from '../../hooks/useForm';
import { TextField } from '@material-ui/core';
import { Container, InputContainer, P, ButtonEats, Header } from './styled';
import arrow from '../../assets/arrow.png';
import useProtectedPage from 'hooks/useProtectedPage';
import labefood from 'services/labefood';
import { goToProfile } from 'routes/coordinator';
import { useHistory } from 'react-router';

function ProfileEditPage() {
  useProtectedPage();

  const formDefault = {
    name: '',
    email: '',
    cpf: '',
  };

  const history = useHistory();
  const token = window.localStorage.getItem('token');
  const [form, handleInputChange, resetForm, setForm] = useForm(formDefault);

  useEffect(() => {
    requestProfile();
  }, []);

  const requestProfile = () => {
    labefood
      .getProfile(token)
      .then((res) => {
        setForm({
          name: res.user.name,
          email: res.user.email,
          cpf: res.user.cpf,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editProfile = (event) => {
    event.preventDefault();

    if (form.cpf.length !== 14) {
      alert('O CPF está incompleto');
      return;
    }

    labefood
      .updateProfile(form, token)
      .then((res) => {
        alert('Modificado com sucesso!');
        goToProfile(history);
      })
      .catch((err) => {
        alert('Erro ao modificar');
        console.log(err);
      });
  };

  const formatarCpf = (event) => {
    let documento = event.target.value.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})/g,
      '$1.$2.$3-$4'
    );
    const lastCharacter = documento.charAt(documento.length - 1);

    if (event.target.value.length - form.cpf.length > 1) {
      return;
    }

    if (!(Number(lastCharacter) >= 0) || lastCharacter === ' ') {
      setForm({ ...form, cpf: documento.substring(0, documento.length - 1) });
      return;
    }

    if (documento.length === 13 && form.cpf.length === 14) {
      let novoDocumento = '';

      for (let character of documento) {
        if (Number(character) > 0) {
          novoDocumento += character;
        }
        documento = novoDocumento;
      }
    }

    if (documento.length > 14) {
      return;
    }

    setForm({ ...form, cpf: documento });
  };

  return (
    <Container>
      <Header>
        <img
          src={arrow}
          alt="navigation arrow"
          onClick={() => goToProfile(history)}
        />
        <P>Editar</P>
      </Header>

      <InputContainer>
        <form onSubmit={editProfile}>
          <TextField
            name={'name'}
            value={form.name}
            onChange={handleInputChange}
            label={'Nome'}
            placeholder={'Nome Completo'}
            variant={'outlined'}
            fullWidth
            margin={'normal'}
            autoFocus
            required
            type={'text'}
          />

          <TextField
            name={'email'}
            value={form.email}
            onChange={handleInputChange}
            label={'E-mail'}
            placeholder={'email@email.com'}
            variant={'outlined'}
            fullWidth
            margin={'normal'}
            required
            type={'email'}
          />
          <TextField
            name={'cpf'}
            value={form.cpf}
            onChange={formatarCpf}
            label={'CPF'}
            placeholder={'000.000.000-00'}
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

export default ProfileEditPage;
