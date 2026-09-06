// Destination currencies for the Envío screen's currency picker — not in the
// Figma file yet (only the COP variant of the "Money" component exists there),
// so MXN/PEN were added to make the dropdown a real choice instead of one option.
export const CURRENCIES = [
  { code: 'COP', name: 'Peso colombiano', rate: 3100 },
  { code: 'MXN', name: 'Peso mexicano', rate: 17.8 },
  { code: 'PEN', name: 'Sol peruano', rate: 3.75 },
]
