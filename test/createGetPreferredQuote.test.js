import test from 'ava'

import { createGetPreferredQuote } from '../src/createGetPreferredQuote'
import { calculateScore } from '../src/calculateScore'

import { config, quotes } from './helpers/testData'

const getPreferredQuote = createGetPreferredQuote(() => config)

test('returns getPreferredQuote function', t => {
  const getPreferredQuote = createGetPreferredQuote(() => ({}))

  t.is(typeof getPreferredQuote, 'function')
})

test('getPreferredQuote returns null if config is not available', t => {
  const config = null
  const getPreferredQuote = createGetPreferredQuote(() => config)

  t.is(getPreferredQuote([{}]), null)
})

test('getPreferredQuote returns null if quotes is not Array', t => {
  t.is(getPreferredQuote(null), null)
  t.is(getPreferredQuote({}), null)
  t.is(getPreferredQuote(), null)
})

test('getPreferredQuote returns null if quotes array is empty', t => {
  t.is(getPreferredQuote([]), null)
})

test('getPreferredQuote returns quote with the highest score', t => {
  const bestQuote = quotes.sort(
    (a, b) => calculateScore(b, config) - calculateScore(a, config)
  )[0]

  t.is(getPreferredQuote(quotes), bestQuote)
})
