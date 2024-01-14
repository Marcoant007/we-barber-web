import React from 'react';
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/imgs/logo.svg';
import { FiLogIn } from 'react-icons/fi';

const SignIn: React.FC = () => (
    <Container>
        <Background />
        <Content>
            <img src={logoImg} alt="WeBarber" />
            <form>
                <h1>Faça seu logon</h1>
                <input type="email" placeholder="E-mail" />
                <input type="password" placeholder="Senha" />
                <button type="submit">Entrar</button>

                <a href="forgot">Esqueci minha senha</a>
            </form>

            <a href="">
                <FiLogIn />
                Criar conta
            </a>
        </Content>
    </Container>
);

export default SignIn;
