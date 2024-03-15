import { Container, Profile } from "./styles"
import { Input } from "../Input"


export function Header() {
  return(
    <Container>
      <h1>RocketMovies</h1>

      <Input placeholder="Pesquisar pelo título"/>

      <Profile to="/profile" >
        <div>
          <strong>Leonardo Menezes</strong>
          <span>sair</span>
        </div>

        <img src="https://github.com/leonardomenezes7.png" alt="Foto do usuário" />
      </Profile>
    </Container>
  )
}