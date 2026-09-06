export const CONTACTS = [
  { id: 'camila', name: 'Camila Ríos', account: '321 123 *** ***' },
  { id: 'angela', name: 'Angela Ríos', account: '321 123 *** ***' },
  { id: 'pablo', name: 'Pablo Charry', account: '321 123 *** ***' },
]

// Recent transfers shown on the Home screen
export const RECENT_TRANSFERS = [
  { name: 'Transferencia a Camila Ríos', date: '05 SEPT 2026', amount: 2000 },
  { name: 'Transferencia a Angela Ríos', date: '05 SEPT 2026', amount: 6000 },
]

export const CONVERSION = { par: 'USDc/COP', change: '+15%', venta: '3.200', compra: '3.100' }

// Banco GALA's transfer commission — shown in the Envío calculator and in
// the Confirmación/Recibo breakdown, explained in ComisionesInfo.jsx.
export const COMMISSION_RATE = 0.003
