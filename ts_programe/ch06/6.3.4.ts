type Currency = {
  unit: 'EUR' | 'USD' | 'CNY' | 'JPY'
  value: number
}

let Currency = {
  DEFAULT: 'EUR',
  from(value: number, unit = Currency.DEFAULT) {
    return { unit, value }
  },
}
