import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './style'
import { Header } from '../../components/header/Header'
import { ButtonText } from '../../components/ButtonText/ButtonText'
import { Input } from '../../components/input/Input'
import { Section } from '../../components/Section/Section'
import { Note } from '../../components/note/Note'

import { Link } from 'react-router-dom'

export function Home(){
    return(
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header/>

            <Menu>
                <li><ButtonText title="Todos" isactive="true" /></li>
                <li><ButtonText title="React" /></li>
                <li><ButtonText title="NodeJs" /></li>
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
            </Search>

            <Content>
                <Section title="Minhas notas">
                    <Note data={
                        { title: "React", tags: [
                            { id: '1', name: "React"},
                            { id: '2', name: "Rocketseat" }
                        ]}
                    }/>
                    
                    <Note data={
                        { title: "Exemplo Middleware", tags: [
                            { id: '1', name: "NodeJs"},
                            { id: '2', name: "Express" }
                        ]}
                    }/>
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus/>
                    Criar nota
            </NewNote>
        </Container>
    )
}