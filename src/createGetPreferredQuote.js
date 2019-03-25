import { calculateScore } from './calculateScore'

export function createGetPreferredQuote (getScoresConfig) {
  return function getPreferredQuote (quotes) {
    const config = getScoresConfig()

    if (!config || !Array.isArray(quotes) || quotes.length === 0) {
      return null
    }

    let bestScore = Number.MIN_VALUE
    let preferredQuoteIndex = null

    quotes.forEach((quote, index) => {
      const score = calculateScore(quote, config)

      if (score > bestScore) {
        bestScore = score
        preferredQuoteIndex = index
      }
    })

    if (preferredQuoteIndex === null) {
      return null
    }

    return quotes[preferredQuoteIndex]
  }
}
