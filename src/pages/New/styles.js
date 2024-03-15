import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    padding: 4rem 12.3rem;
    overflow-y: auto;
  }
`

export const Form = styled.form`
  
  > a {
    color: ${({ theme }) => theme.colors.pink};
    display: flex;
    align-items: center;
  }

  > h2 {
    font-weight: 500;
    font-size: 3.6rem;
    margin-top: 2.4rem;
  }

  > div {
    margin-top: 4rem;
    display: flex;
    gap: 4rem;

    > button:nth-child(1) {
      background-color: ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.pink};
    }
  }

  > textarea {
    width: 100%;
    resize: none;
    margin-top: 4rem;
    height: 27.4rem;
    background-color: ${({ theme }) => theme.colors.background_700};
    border: none;
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.white};
    padding: 1.9rem 1.6rem;
  }

  > p {
    color: ${({ theme }) => theme.colors.text_color};
    margin-top: 4rem;
    font-size: 2rem;
  }

  > section {
    background-color: ${({ theme }) => theme.colors.black};
    width: 100%;
    height: 8.8rem;
    margin-top: 2.4rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    overflow-y: auto;
    flex-wrap: wrap;
  }
`