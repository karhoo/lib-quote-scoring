const SCORES_CONFIG_URL =
  'https://cdn.karhoo.com/s/configuration/quote_scores_config.json'

export function fetchScoresConfig () {
  return window
    .fetch(SCORES_CONFIG_URL, {
      method: 'GET'
    })
    .then(response =>
      Promise.all([response.ok, response.status, response.json()])
    )
    .then(([ok, status, body]) => {
      if (!ok) {
        throw createFetchError(`${status} - ${body}`)
      }

      return body
    })
    .catch(error => {
      throw createFetchError(error)
    })
}

function createFetchError (message) {
  return new Error(`Failed to fetch scores config: ${message}`)
}
