interface SuggestionTypes {
  description: string,
  terms: { value: string }[]
  structured_formatting: {
    main_text: string
  }
}
export interface SuggestionResultTypes {
  place: SuggestionTypes
  title: string
  subtitle: string
}

export const parseSuggestions = ({ predictions = [] }: { predictions: SuggestionTypes[] }): SuggestionResultTypes[] => {
  return predictions.map(place => {
    const {
      description,
      terms = [],
      structured_formatting: {
        main_text: mainText
      }
    } = place || {}
    terms.shift()
    if (terms.length > 2) terms.pop()
    return { place, title: mainText, subtitle: terms.map(t => t.value).join(', ') }
  })
}
