import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  header {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    button {
      width: 3rem;
      height: 3rem;
      background: none;
      border: 0;
      color: ${(props) => props.theme["gray-100"]};
      cursor: pointer;

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      transition: all 0.2s ease;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme["green-500"]};
      }
    }
  }

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme["gray-100"]};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      transition: all 0.2s ease;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme["green-500"]};
      }

      /* A classe 'active' é inserida pelo react-router-dom */
      &.active {
        color: ${(props) => props.theme["green-500"]};
      }
    }
  }
`