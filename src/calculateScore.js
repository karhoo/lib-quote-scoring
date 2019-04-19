const criterias = [priceScore, vehicleTypeScore, fleetScore]

export function calculateScore (quote, config) {
  return criterias.reduce(
    (score, criteria) => score + (criteria(quote, config) || 0),
    0
  )
}

function priceScore (quote) {
  return -quote.high_price
}

function vehicleTypeScore (quote, config) {
  if (!config.vehicle_types) {
    console.warn('Key "vehicle_types" is missing in config')
  } else {
    if (!config.vehicle_types[quote.vehicle_class]) {
      console.warn(
        `"${quote.vehicle_class}"`,
        'is missing in config.vehicle_types'
      )
    }
  }
  return config.vehicle_types && config.vehicle_types[quote.vehicle_class]
}

function fleetScore (quote, config) {
  if (!config.fleets) {
    console.warn('Key "fleets" is missing in config')
  } else {
    if (!config.fleets[quote.fleet_id]) {
      console.warn(
        'Fleet id',
        `"${quote.fleet_id}"`,
        'is missing in config.fleets'
      )
    }
  }
  return config.fleets && config.fleets[quote.fleet_id]
}
