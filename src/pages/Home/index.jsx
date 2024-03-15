import { Container, New } from "./styles"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { FiPlus } from "react-icons/fi"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"

export function Home() {
  return(
    <Container>
      <Header />

      <main>
        <New to="/new">
          <h2>Meus Filmes</h2>
          <Button icon={FiPlus} title="Adicionar Filme" />
        </New>

        <Section title="Interstellar">
          <div>
            <p>aaaaaaaaaaaaaaaaaaaaaaaaaa</p>
            <Tag title="aaaaaaaa"/>
            <Tag title="aaaaaaaa"/>
          </div>
        </Section>

        <Section title="Interstellar">
          <div>
            <p>aaaaaaaaaaaaaaaaaaaaaaaaaa</p>
            <Tag title="aaaaaaaa"/>
            <Tag title="aaaaaaaa"/>
          </div>
        </Section>
      </main>
      
    </Container>
  )
}