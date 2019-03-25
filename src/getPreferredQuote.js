import { fetchScoresConfig } from './fetchScoresConfig'
import { createGetPreferredQuote } from './createGetPreferredQuote'

const isDevelopment =
  process && process.env && process.env.NODE_ENV === 'development'
const warn = console.warn

let scoresConfig

fetchScoresConfig()
  .then(config => {
    scoresConfig = config
  })
  .catch(warn)

const _getPreferredQuote = createGetPreferredQuote(() => scoresConfig)

export function getPreferredQuote (quotes) {
  try {
    return _getPreferredQuote(quotes)
  } catch (error) {
    if (isDevelopment) {
      throw error
    }

    warn(error)

    return null
  }
}
