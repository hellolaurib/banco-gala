import ScreenHeader from '../components/ScreenHeader.jsx'
import { ArrowTransfer } from '../components/Icons.jsx'

const today = new Date().toLocaleDateString('es-CO', { day: '2-digit', month: 'short', year: 'numeric' })

// NOTE: also an empty "Verificación" shell in Figma — filled in as a
// transaction-summary review step, the natural point in the flow to
// let the user confirm before the money moves.
export default function Confirmacion({ contact, amount, onConfirm, onBack }) {
  const formatted = amount ? Number(amount).toLocaleString('es-CO') : '0'

  return (
    <div className="relative min-h-full pb-6">
      <div
        className="absolute inset-x-0 top-0 h-[220px]"
        style={{ background: 'linear-gradient(to bottom, #191c3c 0%, #3a418c 65%, transparent 100%)' }}
      />
      <div className="relative">
        <ScreenHeader title="Confirmación" onBack={onBack} />

        <div className="mx-6 -mt-2 bg-white rounded-[16px] shadow-[-2px_-3px_22.6px_rgba(0,0,0,0.12)] px-6 py-7">
          <div className="flex flex-col items-center text-center">
            <div className="size-14 rounded-full bg-[#d9d9d9]/45 flex items-center justify-center">
              <ArrowTransfer className="size-6 text-principal" />
            </div>
            <p className="text-[13px] text-ink-2 mt-3">Vas a transferir</p>
            <p className="text-[36px] font-semibold leading-tight mt-1">
              ${formatted} <span className="text-[18px] align-top">COP</span>
            </p>
          </div>

          <div className="mt-7 divide-y divide-line/40 text-[14px]">
            <div className="flex items-center justify-between py-3">
              <span className="text-ink-2">Para</span>
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
          </div>
        </div>

        <div className="px-6 mt-6">
          <button
            onClick={onConfirm}
            className="w-full bg-principal text-white rounded-[15px] py-3.5 text-[14px]"
          >
            Confirmar transferencia
          </button>
        </div>
      </div>
    </div>
  )
}
