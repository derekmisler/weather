import { SFC, memo } from 'react'
import StarIcon from '@material-ui/icons/Star'
import { TYPOGRAPHY, yellow, blue } from 'styles'

export const Star: SFC<{ active?: boolean }> = memo(({ active }) => (
  <StarIcon style={{ fontSize: TYPOGRAPHY.iconSize, color: active ? yellow : blue }} />
))
