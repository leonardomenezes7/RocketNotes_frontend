import styled from "styled-components";
import backgroundImg from "../../assets/background_signin.png"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 13.4rem;
  
  > h1 {
    color: ${({ theme }) => theme.colors.pink};
    font-size: 4.8rem;
  }

  > p {
    color: ${({ theme }) => theme.colors.text_color};
    font-size: 1.4rem;
  }

  > h2 {
    margin: 4.8rem 0;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
  }

  > a {
    margin-top: 4.2rem;
    align-self: center;
    color: ${({ theme }) => theme.colors.pink};
    display: flex;
    align-items: center;

    svg {
      font-size: 2.4rem;
    }
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`