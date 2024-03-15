import { Container, Form, Avatar } from "./styles";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera } from "react-icons/fi";
import { Input } from "../../components/Input";

export function Profile() {
  return(
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
          Voltar
        </Link>
      </header>

      <Avatar>
        <img src="https://github.com/leonardomenezes7.png" alt="" />

        <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar"  />
        </label>

      </Avatar>

      <Form>
        <Input value="oooo" icon={FiUser} type="text" readOnly/>
        <Input value="leonardo@email" icon={FiMail} type="email" readOnly/>
        <Input placeholder="Senha atual" icon={FiLock} type="password"/>
        <Input placeholder="Nova senha" icon={FiLock} type="password"/>
      </Form>
    </Container>
  )
}