import { COMMISSION_RATE } from '../data/contacts.js'

// Bottom sheet explaining the transfer commission — opened by tapping the
// info icon next to "Comisiones" in Envío / Confirmación / Recibo. Not from
// Figma; built to match the app's existing bottom-sheet pattern (EnviaRecibe.jsx).
export default function ComisionesInfo({ onClose }) {
  return (
    <div className="absolute inset-0 z-20">
      <button aria-label="Cerrar" onClick={onClose} className="absolute inset-0 bg-black opacity-[0.57]" />

      <div className="absolute bottom-0 left-[-2px] w-[377px] flex flex-col gap-4 pt-[26px] pb-6 px-[17px] animate-[slideUp_0.25s_ease-out]">
        <div className="absolute bg-white left-px top-0 w-[376px] rounded-t-2xl pt-[26px]" style={{ height: '100%' }} />

        <div className="relative mx-auto h-1 w-[34px] rounded-full bg-line-2/60" />

        <div className="relative px-1.5">
          <p className="text-[17px] font-semibold text-center">¿Qué son las comisiones?</p>

          <p className="text-[14px] text-ink-2 leading-[20px] mt-4">
            Es el costo por procesar tu transferencia internacional, incluyendo la conversión de tu saldo en
            USD a la moneda local del destinatario.
          </p>

          <div className="mt-4 flex flex-col gap-3">
            <div className="flex justify-between text-[14px]">
              <span className="text-ink-2">Comisión de Banco GALA</span>
              <span className="font-medium">{(COMMISSION_RATE * 100).toFixed(1)}% del monto</span>
            </div>
            <div className="flex justify-between text-[14px]">
              <span className="text-ink-2">Tasa de cambio</span>
              <span className="font-medium">La del día, sin recargos ocultos</span>
            </div>
          </div>

          <p className="text-[12px] text-ink-3 leading-[18px] mt-4">
            El "Valor total" ya refleja el monto que enviaste menos esta comisión — es lo que tu
            destinatario recibe.
          </p>

          <button
            onClick={onClose}
            className="w-full bg-principal text-white rounded-[15px] py-3.5 text-[14px] mt-6"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  )
}
