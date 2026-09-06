import { flagColombia, flagUsa, flagEurope, flagBrazil } from '../assets/figma/index.js'

// Destination countries for the "Opciones" screen (Transferencia's "Agregar"
// step 1) — traced from Figma's "Nuevo producto" frame. Only Colombia has a
// real method wired up (Laura's own prototype only made that row clickable
// in Figma too — the other three render the same as her file but go nowhere).
export const COUNTRIES = [
  { code: 'CO', name: 'Colombia', method: 'Transferencia Bancaria', flag: flagColombia, enabled: true },
  { code: 'US', name: 'United States', method: 'ACH', flag: flagUsa, enabled: false },
  { code: 'EU', name: 'Europe', method: 'SEPA | IBAN', flag: flagEurope, enabled: false },
  { code: 'BR', name: 'Brazil', method: 'PIX', flag: flagBrazil, enabled: false },
]
