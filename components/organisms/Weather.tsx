import { useEffect, memo } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { Row, Col } from 'components/atoms/Grid'
import { Heading, Text, Span, Link } from 'components/atoms/Typography'
import { RootState } from 'utils/reducers'
import { LocationAutocomplete } from 'components/molecules/Forms'
import { resetPlaces } from 'utils/actions'

export const Search = memo(() => {
  const { selection } = useSelector((state: RootState) => state.places)

  const router = useRouter()

  useEffect(() => {
    if (selection && selection.lat && selection.lng) {
      console.log('--------------------')
      console.log('selection', selection)
      console.log('--------------------')
      router.replace({ pathname: '/', query: selection })
    }
  }, [selection])

  useEffect(() => {
    console.log('--------------------')
    console.log('router.query', router.query)
    console.log('--------------------')
  }, [router.query])

  return (
    <Row vAlign='center' columnsDesktop={11}>
      <Col rangeDesktop={5}>
        <LocationAutocomplete />
      </Col>
      <Col rangeDesktop={1}>
        <Text textAlign='center'><Span italic>or</Span></Text>
      </Col>
      <Col rangeDesktop={5}>
        <Link>
          <Heading level={2}>use current</Heading>
        </Link>
      </Col>
    </Row>
  )
})
