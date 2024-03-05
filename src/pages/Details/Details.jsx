import { Container, Links,Content } from './style'
import { Button } from '../../components/Button'
import { Header } from '../../components/header/Header'
import { Section } from '../../components/Section/Section'
import { Tag } from '../../components/tag/Tag'
import { ButtonText } from '../../components/ButtonText/ButtonText'

export function Details(){
    return (
        <Container>
            <Header/>

            <main>
                <Content>
                    <ButtonText title="Excluir nota"/>

                    <h1>Introdução ao React</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ea molestiae dolor quia sunt, excepturi rerum ex soluta! Accusantium dolorum laboriosam nisi cumque et distinctio quaerat fugiat incidunt hic. Voluptatibus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ea molestiae dolor quia sunt, excepturi rerum ex soluta! Accusantium dolorum laboriosam nisi cumque et distinctio quaerat fugiat incidunt hic. Voluptatibus.
                    </p>

                    <Section title="Links úteis">
                        <Links>
                            <li>
                                <a href="#">https::/www.rocketseat.com</a>
                            </li>
                            <li>
                                <a href="#">https::/www.rocketseat.com</a>
                            </li>
                        </Links>
                    </Section>

                    <Section title="Marcadores">
                        <Tag title="Node"/>
                        <Tag title="Express"/>
                    </Section>

                    <Button title="Voltar"/>
                </Content>
            </main>
        </Container>
    )
  }
  

  