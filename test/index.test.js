import test from 'ava'

import { init, getPreferredQuote } from '../index'
import { createGetPreferredQuote } from '../src/createGetPreferredQuote'

import { config, quotes } from './helpers/testData'

test('exports init function', t => {
  t.is(typeof init, 'function')
})

test('exports getPreferredQuote function', t => {
  t.is(typeof getPreferredQuote, 'function')
})

test('getPreferredQuote uses fetched config correctly', async t => {
  window.fetch = () => Promise.resolve({ ok: true, json: () => config })

  await init()

  t.is(getPreferredQuote(quotes), createGetPreferredQuote(() => config)(quotes))
})
