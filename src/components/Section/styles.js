import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.transparent_pink};
  height: 22rem;
  border-radius: 16px;
  padding: 3.2rem;
  margin-bottom: 2.4rem;
  overflow-y: auto;

  > h2 {
    font-weight: 500;
  }

  > div {
    margin-top: 3.5rem;

    p {
      margin-bottom: 3rem;
      color: ${({ theme }) => theme.colors.text_color};
    }
  }
`