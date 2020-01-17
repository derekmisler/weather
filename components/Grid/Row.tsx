import { memo, SFC } from 'react'
import styled from 'styled-components'
import { StyledComponentProps, SmMdLgSizes, LAYOUT_DEFAULTS, FlexAlignment } from 'styles'
import { generateResponsiveRow } from 'utils/generateResponsiveGrid'

const { spacing, mediaQueries } = LAYOUT_DEFAULTS

interface RowProps extends StyledComponentProps {
  columns?: number
  columnsDesktop?: number
  padding?: SmMdLgSizes
  margin?: SmMdLgSizes
  gap?: SmMdLgSizes
  vAlign?: FlexAlignment
  hAlign?: FlexAlignment
  fullHeight?: boolean
}

const StyledGrid = styled.div<RowProps>`
  position: relative;
  display: grid;
  padding: ${({ padding }) => (padding ? spacing[padding] : 0)};
  margin: 0 auto;
  margin-bottom: ${({ margin }) => (margin ? spacing[margin] : 0)};
  grid-column-gap: ${({ gap }) => (gap ? spacing[gap] : 0)};
  align-items: ${({ vAlign = 'stretch' }) => vAlign};
  justify-items: ${({ hAlign = 'stretch' }) => hAlign};
  ${({ columns = 1 }) => generateResponsiveRow(columns)}

  @media ${mediaQueries.desktop} {
    min-height: ${({ fullHeight }) => (fullHeight ? `100vh` : `auto`)};
    ${({ columnsDesktop }) => generateResponsiveRow(columnsDesktop)}
  }
`

export const Row: SFC<RowProps> = memo(props => <StyledGrid {...props} />)
