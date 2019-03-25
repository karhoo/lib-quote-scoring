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
  return config.vehicle_types && config.vehicle_types[quote.vehicle_class]
}

function fleetScore (quote, config) {
  return config.fleets && config.fleets[quote.fleet_id]
}
