import styled from "styled-components";
import PerfectScrollbar from "react-perfect-scrollbar";

export const HistoryContainer = styled.div`
  flex: 1;
  padding: 3.5rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${props => props.theme["gray-100"]};
  }
`

export const HistoryList = styled(PerfectScrollbar)`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;
  max-height: 55vh;

  .ps__thumb-y {
    background-color: ${props => props.theme["green-500"]};
    width: 4px;
  }

  .ps__rail-y:hover > .ps__thumb-y, .ps__rail-y:focus > .ps__thumb-y, .ps__rail-y.ps--clicking .ps__thumb-y {
    background-color: ${props => props.theme["green-500"]};
    width: 4px;
  }

  .ps__rail-y:hover {
    background-color: transparent;

  }

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

        button {
          background: none;
          border: 0;
          line-height: 0;
          color:${props => props.theme["gray-100"]};
          margin-top: 0.4rem;
          cursor: pointer;

          svg {
            transition: 0.2s;
          }

          svg:hover {
            color:${props => props.theme["red-500"]};
          }
        }

      }
    }
  }
`

const STATUS_COLORS = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS;
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: ${props => props.theme[STATUS_COLORS[props.statusColor]]};
  }
`