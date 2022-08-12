import styled from 'styled-components'

interface HighlightProps {
  variant: 'income' | 'expense'
}

export const PriceHighlight = styled.span<HighlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`
