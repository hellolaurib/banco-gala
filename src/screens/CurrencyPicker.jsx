import { currencyEllipse } from '../assets/figma/index.js'
import { CURRENCIES } from '../data/currencies.js'

// Bottom sheet for picking the recipient's currency in Envío — rendered via
// PhoneFrame's overlay slot (like EnviaRecibe/ComisionesInfo) so it always
// sits above the numeric keypad, instead of a small anchored dropdown that
// the keypad's own stacking order could end up covering.
export default function CurrencyPicker({ current, onSelect, onClose }) {
  return (
    <div className="absolute inset-0 z-20">
      <button aria-label="Cerrar" onClick={onClose} className="absolute inset-0 bg-black opacity-[0.57]" />

      <div className="absolute bottom-0 left-[-2px] w-[377px] flex flex-col gap-3 pt-[26px] pb-6 px-[17px] animate-[slideUp_0.25s_ease-out]">
        <div className="absolute bg-white left-px top-0 w-[376px] rounded-t-2xl pt-[26px]" style={{ height: '100%' }} />

        <div className="relative mx-auto h-1 w-[34px] rounded-full bg-line-2/60" />

        <p className="relative text-[15px] font-semibold text-center">Moneda del destinatario</p>

        <div className="relative flex flex-col mt-2">
          {CURRENCIES.map((c) => (
            <button
              key={c.code}
              onClick={() => onSelect(c)}
              className={`flex items-center gap-3.5 py-3 text-left border-b border-line/40 last:border-0 ${
                c.code === current.code ? 'bg-page-bg' : ''
              }`}
            >
              {c.code === 'COP' ? (
                <img alt="" src={currencyEllipse} className="size-8 rounded-full shrink-0" />
              ) : (
                <div className="size-8 rounded-full bg-page-bg flex items-center justify-center text-[10px] font-semibold text-principal shrink-0">
                  {c.code.slice(0, 2)}
                </div>
              )}
              <div className="flex-1">
                <p className="text-[14px] font-medium">{c.code}</p>
                <p className="text-[11px] text-ink-2">{c.name}</p>
              </div>
              {c.code === current.code && <span className="text-positive text-[12px] font-medium">Actual</span>}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
