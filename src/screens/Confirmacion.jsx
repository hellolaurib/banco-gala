import VerificacionShell from '../components/VerificacionShell.jsx'

// This screen was an empty "Verificación" shell in the Figma file (title +
// tab bar only) — reproduced exactly as-is rather than inventing content.
export default function Confirmacion({ onBack, onAdvance }) {
  return <VerificacionShell onBack={onBack} onAdvance={onAdvance} />
}
