import ScreenHeader from '../components/ScreenHeader.jsx'
import { Check } from '../components/Icons.jsx'

const today = new Date().toLocaleDateString('es-CO', { day: '2-digit', month: 'short', year: 'numeric' })
const ref = () => Math.floor(100000000 + Math.random() * 900000000)

// NOTE: also an empty "Verificación" shell in Figma — filled in as the
// final receipt/status screen that closes the transfer flow.
export default function EstadoTransaccion({ contact, amount, onDone }) {
  const formatted = amount ? Number(amount).toLocaleString('es-CO') : '0'

  return (
    <div className="relative min-h-full pb-6">
      <div
        className="absolute inset-x-0 top-0 h-[220px]"
        style={{ background: 'linear-gradient(to bottom, #191c3c 0%, #3a418c 65%, transparent 100%)' }}
      />
      <div className="relative">
        <ScreenHeader title="Estado de la transacción" onBack={onDone} />

        <div className="mx-6 -mt-2 bg-white rounded-[16px] shadow-[-2px_-3px_22.6px_rgba(0,0,0,0.12)] px-6 py-7">
          <div className="flex flex-col items-center text-center">
            <div className="size-12 rounded-full bg-positive/10 flex items-center justify-center">
              <Check className="size-6 text-positive" />
            </div>
            <p className="text-[15px] font-semibold mt-3">Completada</p>
            <p className="text-[28px] font-semibold mt-1">${formatted} COP</p>
          </div>

          <div className="mt-6 divide-y divide-line/40 text-[14px]">
            <div className="flex items-center justify-between py-3">
              <span className="text-ink-2">Destinatario</span>
              <span className="font-medium">{contact?.name ?? '—'}</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-ink-2">Cuenta</span>
              <span className="font-medium">{contact?.account ?? '—'}</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-ink-2">Fecha</span>
              <span className="font-medium">{today}</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-ink-2">N° de referencia</span>
              <span className="font-medium">{ref()}</span>
            </div>
          </div>
        </div>

        <div className="px-6 mt-6">
          <button
            onClick={onDone}
            className="w-full bg-principal text-white rounded-[15px] py-3.5 text-[14px]"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    </div>
  )
}
