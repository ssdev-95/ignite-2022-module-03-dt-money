import styled from 'styled-components'

export const TransactionsTableContainer = styled.main`
  width: 1100px;
  max-width: 100vw;
`

export const TransactionsTableBasis = styled.table`
  width: 100%;
  margin: 1.5rem 0;
  padding: 0 1.5rem;

  border-collapse: separate;
  border-spacing: 0 0.5rem;

  td {
    padding: 1.25rem 2rem;
    background-color: ${(props) => props.theme['gray-700']};

    &:frst-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }

    @media (min-width: 870px) {
      span svg {
        display: none;
      }
    }
  }

  @media (max-width: 869px) {
    tr {
      display: grid;
      grid-template-areas: 'desc desc' 'price price' 'categ when';
      margin-top: 1rem;

      td {
        padding: 0.75rem;

        & > .hasIcon {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        &:first-child {
          grid-area: desc;
          font-size: 1.5rem;
        }

        &:nth-child(2) {
          grid-area: price;
          font-size: 2rem;
        }

        &:nth-child(3) {
          grid-area: categ;
          font-size: 1.5rem;
          color: ${(props) => props.theme['gray-500']};

          span {
            justify-content: flex-start;
          }
        }

        &:last-child {
          grid-area: when;
          text-align: right;
          font-size: 1.5rem;
          color: ${(props) => props.theme['gray-500']};

          span {
            justify-content: flex-end;
          }
        }
      }
    }
  }
`

interface HighlightProps {
  variant: 'income' | 'expense'
}

export const PriceHighlight = styled.span<HighlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`
