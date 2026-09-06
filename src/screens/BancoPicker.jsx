import { BANCOS_COLOMBIA } from '../data/banks.js'

// Bottom sheet for "Selecciona tu banco" in Inscribir producto (Nueva cuenta)
// — rendered via PhoneFrame's overlay slot, same as CurrencyPicker, so it
// isn't at risk of the keypad-style click-through bug a local dropdown hit
// in Envío.
export default function BancoPicker({ current, onSelect, onClose }) {
  return (
    <div className="absolute inset-0 z-20">
      <button aria-label="Cerrar" onClick={onClose} className="absolute inset-0 bg-black opacity-[0.57]" />

      <div className="absolute bottom-0 left-[-2px] w-[377px] flex flex-col gap-3 pt-[26px] pb-6 px-[17px] max-h-[70%] animate-[slideUp_0.25s_ease-out]">
        <div className="absolute bg-white left-px top-0 w-[376px] rounded-t-2xl pt-[26px]" style={{ height: '100%' }} />

        <div className="relative mx-auto h-1 w-[34px] rounded-full bg-line-2/60 shrink-0" />

        <p className="relative text-[15px] font-semibold text-center shrink-0">Selecciona tu banco</p>

        <div className="relative flex flex-col mt-2 overflow-y-auto">
          {BANCOS_COLOMBIA.map((banco) => (
            <button
              key={banco}
              onClick={() => onSelect(banco)}
              className={`flex items-center justify-between py-3 text-left border-b border-line/40 last:border-0 ${
                banco === current ? 'bg-page-bg' : ''
              }`}
            >
              <span className="text-[14px] text-principal">{banco}</span>
              {banco === current && <span className="text-positive text-[12px] font-medium">Actual</span>}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
