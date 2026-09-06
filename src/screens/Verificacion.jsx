import ScreenHeader from '../components/ScreenHeader.jsx'
import { Fingerprint } from '../components/Icons.jsx'

const KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', '⌫']

// NOTE: this screen was still an empty "Verificación" shell in the Figma
// file (title + tab bar only) — built out here with a PIN pad so the
// click-through demo has something to do at this step.
export default function Verificacion({ pin, onDigit, onBackspace, onBack }) {
  return (
    <div className="relative min-h-full pb-6">
      <div
        className="absolute inset-x-0 top-0 h-[220px]"
        style={{ background: 'linear-gradient(to bottom, #191c3c 0%, #3a418c 65%, transparent 100%)' }}
      />
      <div className="relative">
        <ScreenHeader title="Verificación" onBack={onBack} />

        <div className="mx-6 -mt-2 bg-white rounded-[16px] shadow-[-2px_-3px_22.6px_rgba(0,0,0,0.12)] px-6 py-8 text-center">
          <p className="text-[15px] font-medium">Confirma que eres tú</p>
          <p className="text-[12px] text-ink-2 mt-1">Ingresa tu clave de 4 dígitos para continuar</p>

          <div className="flex items-center justify-center gap-3.5 mt-6">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className={`size-3.5 rounded-full border-2 border-principal ${i < pin.length ? 'bg-principal' : 'bg-transparent'}`}
              />
            ))}
          </div>

          <div className="grid grid-cols-3 gap-x-9 gap-y-4 mt-8 max-w-[210px] mx-auto">
            {KEYS.map((k, i) =>
              k === '' ? (
                <div key={i} className="flex items-center justify-center text-ink-2">
                  <Fingerprint className="size-6" />
                </div>
              ) : (
                <button
                  key={i}
                  onClick={() => (k === '⌫' ? onBackspace() : onDigit(k))}
                  className="size-[46px] rounded-full flex items-center justify-center text-[16px] font-semibold text-principal active:bg-page-bg transition"
                >
                  {k}
                </button>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
