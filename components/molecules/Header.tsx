import { memo } from 'react'
import { useSelector } from 'react-redux'
import { Animated } from 'components/molecules/Animated'
import { Heading, Span, Error } from 'components/atoms/Typography'
import { Row, Col } from 'components/atoms/Grid'
import { useRouter } from 'next/router'
import { Link } from 'components/atoms/Typography'
import { TYPOGRAPHY } from 'styles'
import { RootState } from 'utils/reducers'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'

export const Header = memo(() => {
  const router = useRouter()
  const notHome = !!(router.query && router.query.lat && router.query.lng)
  const { error } = useSelector((state: RootState) => state.weather)

  return (
    <Row as='header' columnsDesktop={12} vAlign='center'>
      { notHome && <Col textAlign='center'><Link href='/'><ArrowBackIosRoundedIcon style={{ fontSize: TYPOGRAPHY.iconSize }} /></Link></Col> }
      <Col rangeDesktop='2-11'>
        <Animated delay={100}>
          <Heading textAlign='center' level={1}>
            { error
              ? <Error>{error}</Error>
              : <Span italic>Whatever the Weather</Span>
            }
          </Heading>
        </Animated>
      </Col>
    </Row>
  )
})
