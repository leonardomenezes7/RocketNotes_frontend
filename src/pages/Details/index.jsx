import { FiArrowLeft } from "react-icons/fi";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import { Tag } from "../../components/Tag";

export function Details() {
  return(
    <Container>
      <Header />

      <section>
        <Link to="/">
          <FiArrowLeft/>
          Voltar
        </Link>

        <h2>Interstellar</h2>

        <Tag title="aaaa"/>
        <Tag title="aaaa" />
        <Tag title="aaaa" />

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque ab molestias, velit labore est sunt quaerat tempora doloremque magni mollitia earum doloribus, eos dignissimos eligendi, totam error odit expedita libero.</p>
      </section>
    </Container>
  )
}