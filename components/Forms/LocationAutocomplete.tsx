import { FC, memo } from 'react'
import { useDispatch } from 'react-redux'
import debounce from 'lodash/debounce'
import { Input } from 'components/Forms'
import { getPlaces } from 'utils/actions'

export const LocationAutocomplete: FC<{}> = memo(() => {
  const dispatch = useDispatch()
  const handleChange = (text: string = '') => {
    if (text.length > 2) {
      dispatch(getPlaces(text))
    }
  }

  return <Input autoFocus id='location-search' onChange={handleChange} />
})
