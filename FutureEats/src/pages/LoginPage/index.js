import React, { useState } from "react";
import labefood from '../../services/labefood';
import useForm from '../../hooks/useForm';
import {
  Button,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import {
  Container,
  InputContainer,
  RegisterButtonContainer,
  P,
  Img,
  ButtonEats,
} from './styled';
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { goToHome, goToRegisterProfile } from 'routes/coordinator';
import logo from '../../assets/logo.png';
import { useHistory } from 'react-router';
import useUnprotectedPage from 'hooks/useUnprotectedPage';

function LoginPage() {
    useUnprotectedPage()
    
    const history = useHistory()
    const [form, handleInputChange] = useForm({ email: '', password: ''})
    const [showPassword, setShowPassword] = useState(false);
  
    const login = (e) => {
      e.preventDefault()
      labefood.login(form)
      .then((res) => {
        window.localStorage.setItem("token", res.token)
        goToHome(history);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Container>
      <Img src={logo} />
      <P>Entrar</P>
      <InputContainer>
        <form onSubmit={login}>
          <TextField
            name={'email'}
            value={form.email}
            onChange={handleInputChange}
            label={'E-mail'}
            placeholder={'email@email.com'}
            variant={'outlined'}
            fullWidth
            margin={'normal'}
            autoFocus
            required
            type={'email'}
          />
        <TextField 
            name={'password'}
            onChange={handleInputChange}
            label="Senha"
            placeholder="Mínimo 6 caracteres"
            type={showPassword ? "text" : "password" }
            variant="outlined"
            margin="normal"
            fullWidth
            required
            color="primary"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                 {showPassword ? <VisibilityIcon onClick={handleClickShowPassword}/> : <VisibilityOffIcon onClick={handleClickShowPassword}/>}
                </InputAdornment>
              ),
            }}         
          />

          <ButtonEats
            type={'submit'}
            fullWidth
            variant={'contained'}
            color={'primary'}
            margin={'normal'}
          >
            <P>Entrar</P>
          </ButtonEats>
        </form>
      </InputContainer>
      <RegisterButtonContainer>
        <Button
          onClick={() => goToRegisterProfile(history)}
          type={'submit'}
          fullWidth
          variant={'text'}
          color={'black'}
          margin={'normal'}
        >
          Não Possui Cadastro? Clique Aqui.
        </Button>
      </RegisterButtonContainer>
    </Container>
  );
}

export default LoginPage;
