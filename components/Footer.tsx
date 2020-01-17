import { SFC, memo } from 'react'
import { Row } from 'components/Grid'
import { Text } from 'components/Typography'

export const Footer: SFC<{}> = memo(() => {
  return (
    <Row as='footer'>
      <Text>Footer</Text>
    </Row>
  )
})
