import test from 'ava'

import { createGetPreferredQuote } from '../src/createGetPreferredQuote'
import { calculateScore } from '../src/calculateScore'

const config = {
  fleets: {
    id1: 5,
    id2: 10
  },
  vehicle_types: {
    mpv: 5,
    electric: 10,
    taxi: 7,
    saloon: 15
  }
}
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
  const quotes = [
    { high_price: 5, vehicle_class: 'mpv', fleet_id: 'id1' },
    { high_price: 12, vehicle_class: 'electric', fleet_id: 'id2' },
    { high_price: 20, vehicle_class: 'saloon', fleet_id: 'id1' }
  ]

  const bestQuote = quotes.sort(
    (a, b) => calculateScore(b, config) - calculateScore(a, config)
  )[0]

  t.is(getPreferredQuote(quotes), bestQuote)
})
