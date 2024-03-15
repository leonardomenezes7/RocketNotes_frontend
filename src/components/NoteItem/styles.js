import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme, isNew }) => isNew ?  "transparent" : theme.colors.background_700};
  border: ${({ theme, isNew }) => isNew ?  `2px dashed ${theme.colors.background_800}` : "none"};
  padding: 1.6rem;
  border-radius: 10px;
  margin-right: 2.4rem;
  margin-left: 2.4rem;

  > input {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.white};
  }

  button {
    color: ${({ theme }) => theme.colors.pink};
    background: none;
    border: none;
  }
`