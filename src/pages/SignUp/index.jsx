import { Link } from "react-router-dom";
import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi"
import { Button } from "../../components/Button";

export function SignUp() {
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>

        <Input icon={FiUser} placeholder="Nome" />
        <Input icon={FiMail} placeholder="E-mail" />
        <Input icon={FiLock} placeholder="Senha" />

        <Button title="Entrar"/>

        <Link to="/">
          <FiArrowLeft/>
          Voltar para o login
        </Link>
      </Form>

      <Background />
    </Container>
  )
}