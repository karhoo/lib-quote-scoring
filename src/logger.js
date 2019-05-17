export const logger = (config, quotes) => {
  checkForMissingConfiguration(
    config,
    'vehicle_types',
    quotes,
    'vehicle_class'
  )
  checkForMissingConfiguration(config, 'fleets', quotes, 'fleet_id')
}

const checkForMissingConfiguration = (
  config,
  configFieldName,
  quotes,
  quoteFieldName
) => {
  const configObject = config[configFieldName]

  if (!configObject) {
    console.warn(`Key "${configFieldName}" is missing in config`)

    return
  }

  const missingValues = quotes.reduce((values, quote) => {
    if (!configObject.hasOwnProperty(quote[quoteFieldName])) {
      return [...values, quote[quoteFieldName]]
    }

    return values
  }, [])

  missingValues.length &&
    console.warn(`Missing values in config.${configFieldName}:`, missingValues)
}
