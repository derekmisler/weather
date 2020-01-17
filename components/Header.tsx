import { memo } from 'react'
import { Animated } from 'components/Animated'
import { Heading, Text, Span } from 'components/Typography'
import { Row, Col } from 'components/Grid'

export const Header = memo(() => {
  return (
    <Row as='header' columnsDesktop={6}>
      <Col row>
        <Animated delay={100}>
          <Heading level={1}>h1 h1 h1 h1 h1 <Span italic>h1 h1</Span> h1 h1 h1 h1</Heading>
        </Animated>
        <Animated delay={200}>
          <Heading level={2}>h2</Heading>
        </Animated>
        <Animated delay={300}>
          <Heading level={3}>h3</Heading>
        </Animated>
        <Animated delay={400}>
          <Heading level={4}>h4</Heading>
        </Animated>
        <Animated delay={500}>
          <Heading level={5}>h5</Heading>
        </Animated>
        <Animated delay={600}>
          <Heading level={6}>h6</Heading>
        </Animated>
        <Animated delay={700}>
          <Text>Text</Text>
        </Animated>
      </Col>
    </Row>
  )
})
