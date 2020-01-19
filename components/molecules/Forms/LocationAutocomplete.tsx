import { FC, memo, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Input } from 'components/molecules/Forms'
import { Text, Span } from 'components/atoms/Typography'
import { getPlaces, resetPlaces, selectPlace } from 'utils/actions'
import { RootState } from 'utils/reducers'
import { SuggestionResultTypes } from 'utils/parseSuggestions'
import { LAYOUT } from 'styles'
import debounce from 'lodash/debounce'

const {
  borderSize,
  borderStyle,
  borderRadius,
  spacing,
  dropShadow
} = LAYOUT

const StyledAutocompleteWrapper = styled.div`
  position: relative;
`

const StyledResults = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  border: ${({ theme }) => `${borderSize} ${borderStyle} ${theme.border}`};
  border-top: none;
  border-bottom-left-radius: ${borderRadius};
  border-bottom-right-radius: ${borderRadius};
  box-shadow: ${({ theme }) => `0 ${dropShadow.small} ${dropShadow.small} ${theme.shadow}`};
`
const StyledResultsItem = styled.div<{ last?: boolean }>`
  padding: ${spacing.small} 0;
  margin: 0 ${spacing.medium};
  border-bottom: ${({ last, theme }) => last ? 'none' : `${borderSize} ${borderStyle} ${theme.border}`};
  cursor: pointer;
`

interface ItemProps extends SuggestionResultTypes {
  last?: boolean
}

const AutocompleteItem: FC<ItemProps> = memo(({ place, title, subtitle, last }) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(selectPlace(place))
    dispatch(resetPlaces())
  }
  return (
    <StyledResultsItem last={last} onClick={handleClick}>
      <Text>
        <Span small bold>{title}</Span>
        { subtitle && <Span small italic> ({subtitle})</Span> }
      </Text>
    </StyledResultsItem>
  )
})

export const LocationAutocomplete = memo(() => {
  const [inputValue, setInputValue] = useState('')
  const [suggestionsVisible, setSuggestionsVisible] = useState(false)
  const { suggestions = [] } = useSelector((state: RootState) => state.places)

  const dispatch = useDispatch()

  const handleChange = debounce((text: string = '') => {
    setInputValue(text)
    dispatch(getPlaces(text))
  }, 500, { trailing: true })

  useEffect(() => {
    if (!inputValue) dispatch(resetPlaces())
    setSuggestionsVisible(!!inputValue && !!suggestions[0])
  }, [inputValue, suggestions[0]])

  return (
    <>
      <Input autoFocus id='location-search' onChange={handleChange} placeholder='Search' />
      { suggestionsVisible && (
        <StyledAutocompleteWrapper>
          <StyledResults>
          { suggestions.map((suggestion, i) => (
            <AutocompleteItem
              {...suggestion}
              key={`${suggestion.title}-${suggestion.subtitle}`}
              last={i === suggestions.length - 1}
            />
          ))}
          </StyledResults>
        </StyledAutocompleteWrapper>
      )}
    </>
  )
})
