import {RiShutDownLine} from "react-icons/ri"
import {Container, Profile, Logout} from './style'



export function Header(){
    return(
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/TomeCastroJr.png" alta="Foto de usuário" />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Jorge Tomé</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine></RiShutDownLine>
            </Logout>
        </Container>
    )
}