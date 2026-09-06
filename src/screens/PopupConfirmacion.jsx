import { Check } from '../components/Icons.jsx'

// NOTE: also an empty "Verificación" shell in Figma — filled in as the
// success moment right after confirming, before the final status screen.
export default function PopupConfirmacion({ contact, amount, onContinue }) {
  const formatted = amount ? Number(amount).toLocaleString('es-CO') : '0'

  return (
    <div className="relative min-h-full flex flex-col items-center justify-center px-8 text-center pb-10">
      <div className="size-20 rounded-full bg-positive/10 flex items-center justify-center animate-[popIn_0.3s_ease-out]">
        <div className="size-14 rounded-full bg-positive flex items-center justify-center text-white">
          <Check className="size-7" />
        </div>
      </div>
      <p className="text-[19px] font-semibold mt-6">¡Transferencia exitosa!</p>
      <p className="text-[14px] text-ink-2 mt-2">
        Enviaste ${formatted} COP a {contact?.name ?? 'tu contacto'}.
      </p>

      <button
        onClick={onContinue}
        className="w-full max-w-[280px] bg-principal text-white rounded-[15px] py-3.5 text-[14px] mt-10"
      >
        Ver detalle
      </button>
    </div>
  )
}
