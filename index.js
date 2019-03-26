import { fetchScoresConfig } from './src/fetchScoresConfig'
import { createGetPreferredQuote } from './src/createGetPreferredQuote'

const isDevelopment = process && process.env && process.env.NODE_ENV === 'development'
const warn = console.warn

let scoresConfigRequest
let scoresConfig

export function init () {
  if (scoresConfigRequest) {
    return scoresConfigRequest
  }

  scoresConfigRequest = fetchScoresConfig()
    .then(config => {
      scoresConfig = config
    })
    .catch(warn)

  return scoresConfigRequest
}

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
