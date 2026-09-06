import VerificacionShell from '../components/VerificacionShell.jsx'

// This screen was an empty "Verificación" shell in the Figma file (title +
// tab bar only) — reproduced exactly as-is rather than inventing content.
// It's the last stop in the flow, so both actions return to Home.
export default function EstadoTransaccion({ onDone }) {
  return <VerificacionShell onBack={onDone} onAdvance={onDone} />
}
