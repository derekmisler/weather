import { css } from 'styled-components'

export const generateResponsiveRow = (columns: number | undefined) => {
  if (!columns) return null
  return `
    grid-template-columns: repeat(${columns}, 1fr);
  `
}

export const generateResponsiveCols = (range: string | number = '') => {
  if (typeof range === 'number') {
    return css`
      grid-column-end: span ${range};
    `
  }
  if (range.includes('-')) {
    const [start, end] = (range as string).split('-')
    return css`
      grid-column-start: ${start};
      grid-column-end: ${end};
    `
  }
  if (range.includes('+')) {
    const [start, end] = (range as string).split('+')
    return css`
      grid-column-start: ${start};
      grid-column-end: span ${end};
    `
  }
  if (range.includes('..')) {
    const start = (range as string).replace(/\./g, '')
    return css`
      grid-column-start: ${start};
      grid-column-end: -1;
    `
  }
}
