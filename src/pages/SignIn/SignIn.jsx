import { Container, Form, Background } from './style'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'

import { Link } from 'react-router-dom'

import { Input } from '../../components/input/Input'
import { Button } from '../../components/Button/index'
import { ButtonText } from '../../components/ButtonText/ButtonText'

export function SignIn(){
    return(
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Faça seu login</h2>

                < Input 
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />
                < Input 
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Entrar" type="submit" />

                <Link to="/register">
                    criar conta
                </Link>
            </Form>
            <Background></Background>
        </Container>
    )
}