import { calculateScore } from './calculateScore'
import { logger } from './logger'

export function createGetPreferredQuote (getScoresConfig) {
  return function getPreferredQuote (quotes) {
    const config = getScoresConfig()

    if (!config || !Array.isArray(quotes) || quotes.length === 0) {
      return null
    }

    let bestScore = Number.MIN_SAFE_INTEGER
    let preferredQuoteIndex = null

    logger(config, quotes)

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
