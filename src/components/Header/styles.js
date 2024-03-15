import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  width: 100%;
  grid-area: header;
  height: 11.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ;
  border-bottom-color: ${({ theme }) => theme.colors.background_700};;
  padding: 0 12.3rem;

  > h1 {
    color: ${({ theme }) => theme.colors.pink};
    font-size: 2.4rem;
  }

  > div {
    width: 63rem;
  }
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    height: 6.4rem;
    width: 6.4rem;
    border-radius: 50%;
    margin-left: .9rem;
  }

  > div {
    display: flex;
    flex-direction: column;

    strong {
      color: ${({ theme }) => theme.colors.white};
      font-size: 1.4rem;
    }

    span {
      color: ${({ theme }) => theme.colors.text_color};;
      align-self: end;
    }
  }
`