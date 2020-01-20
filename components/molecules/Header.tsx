import { memo } from 'react'
import { Animated } from 'components/molecules/Animated'
import { Heading, Span } from 'components/atoms/Typography'
import { Row, Col } from 'components/atoms/Grid'
import { useRouter } from 'next/router'
import { Link } from 'components/atoms/Typography'
import { TYPOGRAPHY } from 'styles'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'

export const Header = memo(() => {
  const router = useRouter()
  const notHome = !!(router.query && router.query.lat && router.query.lng)

  return (
    <Row as='header' columnsDesktop={12} vAlign='center'>
      { notHome && <Col textAlign='center'><Link href='/'><ArrowBackIosRoundedIcon style={{ fontSize: TYPOGRAPHY.iconSize }} /></Link></Col> }
      <Col rangeDesktop='2-11'>
        <Animated delay={100}>
          <Heading textAlign='center' level={1}>
            <Span italic>Whatever the Weather</Span>
          </Heading>
        </Animated>
      </Col>
    </Row>
  )
})
