import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 11.6rem  auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    padding: 5rem 12.3rem;
    grid-area: content;
    overflow-y: auto;
  }
`

export const New = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 4rem;

  > h2 {
    font-weight: 400;
    font-size: 3.2rem;
    color: ${({ theme }) => theme.colors.white};
  }

  > button {
    width: 20.7rem;
  }
`