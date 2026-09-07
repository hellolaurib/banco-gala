import { useEffect } from 'react'
import StatusBar from '../components/StatusBar.jsx'
import { spinner } from '../assets/figma/index.js'

const DURATION_MS = 1800

// Brief "procesando" step between Confirmación and Recibo — not in Figma
// (Envío's send button jumped straight from Confirmación to the success
// screen), added because Laura wants the send to actually feel like it's
// being processed instead of switching screens instantly. Auto-advances
// after DURATION_MS; no back button, matching real banking apps that don't
// let you interrupt a transfer mid-flight.
export default function Cargando({ contact, amount, onDone }) {
  useEffect(() => {
    const timer = setTimeout(onDone, DURATION_MS)
    return () => clearTimeout(timer)
  }, [onDone])

  return (
    <div className="bg-white relative w-full h-[864px] overflow-hidden">
      <div
        className="absolute h-[436px] left-[-3px] top-[-8px] w-[382px]"
        style={{ background: 'linear-gradient(to bottom, #191c3c 47.1%, #3a418c 68.4%, #ffffff 95.9%)' }}
      />
      <div className="absolute inset-x-0 top-0">
        <StatusBar />
      </div>

      <div className="absolute bg-white h-[746px] left-0 rounded-2xl shadow-[-2px_-3px_45.2px_rgba(0,0,0,0.21)] top-[118px] w-full">
        <div className="flex flex-col items-center justify-center h-full gap-5 px-10">
          <img alt="" src={spinner} className="size-14 animate-spin" />
          <div className="flex flex-col items-center gap-1.5 text-center">
            <p className="text-[17px] font-semibold text-principal">Procesando tu transferencia</p>
            <p className="text-[13px] text-ink-2">
              Estamos enviando ${(Number(amount) || 0).toLocaleString('es-CO')} USD a {contact?.name ?? 'tu destinatario'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
