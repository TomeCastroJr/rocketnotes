import { Container, Form } from './style'

import { Link } from 'react-router-dom'

import { Header } from '../../components/header/Header'
import { Input } from '../../components/input/Input'
import { TextArea } from '../../components/TextArea/TextArea'
import { NoteItem } from '../../components/NoteItem/NoteItem'
import { Section } from '../../components/Section/Section'
import { Button } from '../../components/Button'

export function NewNote(){

    return(
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                        <h1>Criar Notas</h1>
                        <Link to="/">voltar</Link>
                    </header>

                    <Input 
                        placeholder="Título"
                        type="text" 
                    />

                    <TextArea
                        placeholder="Observações"
                    />

                    <Section title="Links úteis">
                        <NoteItem value="https://rocketseat.com.br" />
                        <NoteItem isNew placeholder="Novo link" /> 
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="react" />
                            <NoteItem isNew placeholder="Nova Tag" />
                        </div>
                    </Section>

                    <Button title="Salvar" type="submit" />

                </Form>
            </main>
            
        </Container>
    )
}