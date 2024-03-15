import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background_700};
  border-radius: 10px;
  margin-bottom: .8rem;
  
  > input {
    background: none;
    border: none;
    padding: 1.9rem;
    color: ${({ theme }) => theme.colors.white};
    width: 100%;
  }

  > svg {
    margin-left: 1.6rem;
    color: ${({ theme }) => theme.colors.text_color};
  }
`