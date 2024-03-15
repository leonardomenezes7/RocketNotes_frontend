import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas: 
  "header"
  "content";


  
  > section {
    grid-area: content;
    padding: 4rem 12.3rem;
    overflow-y: auto;

    a {
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.colors.pink};
    }

    h2 {
      font-size: 3.6rem;
      font-weight: 400;
      margin-top: 2.4rem;
      margin-bottom: 8.3rem;
    }

    p {
      margin-top: 4rem;
    }
  }
`