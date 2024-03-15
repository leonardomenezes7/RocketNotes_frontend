import { FiArrowLeft } from "react-icons/fi";
import { Header } from "../../components/Header";
import { Container, Form } from "./styles";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button"

export function New() {
  return(
    <Container>
      <Header />

      <main>
        <Form>
          <Link to="/">
            <FiArrowLeft/>
            Voltar
          </Link>

          <h2>Novo filme</h2>

          <div>
          <Input placeholder="Título"/>
          <Input placeholder="Sua nota"/>
          </div>

          <textarea placeholder="Observações"/>

          <p>Marcadores</p>
          <section>
            <NoteItem value="react" />
            <NoteItem isNew placeholder="Novo"/>
          </section>

          <div>
            <Button title="Excluir Filme"/>
            <Button title="Salvar alterações" />
          </div>
        </Form>
      </main>
    </Container>
  )
}