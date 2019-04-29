export const quotes = [
  { high_price: 12, vehicle_class: 'electric', fleet_id: 'id2' },
  { high_price: 5, vehicle_class: 'mpv', fleet_id: 'id1' },
  { high_price: 20, vehicle_class: 'saloon', fleet_id: 'id1' }
]

export const quotesWithHighPrice = quotes.map(i => ({
  ...i,
  high_price: i.high_price * 100
}))

export const config = {
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
