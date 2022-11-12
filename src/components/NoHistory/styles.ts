import styled from "styled-components";

export const NoHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  margin-top: 2rem;
  height: 30vh;
  border-collapse: collapse;
  border-radius: 8px;
  gap: 1rem;

  background-color: ${props => props.theme["gray-700"]};

  svg {
    color: ${props => props.theme["gray-800"]};    
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;

    h1 {
      font-size: 1.2rem;
      color: ${props => props.theme["gray-400"]};
    }

    p {
      color: ${props => props.theme["gray-500"]};
      line-height: 1.3;
      text-align: center;
    }

  }

  /* flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background-color: ${props => props.theme["gray-600"]};
      padding: 1rem;
      text-align: left;
      color: ${props => props.theme["gray-100"]};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${props => props.theme["gray-700"]};
      border-top: 4px solid ${props => props.theme["gray-800"]};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  } */
`