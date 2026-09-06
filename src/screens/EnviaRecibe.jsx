import { ArrowTransfer, Plus, CaretRight } from '../components/Icons.jsx'

// Bottom sheet opened from Home's "Transferir" button. Sits on top of the
// (dimmed) Home screen, matching the Figma frame it was traced from.
export default function EnviaRecibe({ onEnvia, onClose }) {
  return (
    <div className="absolute inset-0 z-20">
      <button
        aria-label="Cerrar"
        onClick={onClose}
        className="absolute inset-0 bg-black/55"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[16px] shadow-[-2px_-3px_22.6px_rgba(0,0,0,0.21)] pt-[26px] pb-6 px-[17px] animate-[slideUp_0.25s_ease-out]">
        <div className="mx-auto h-1 w-[34px] rounded-full bg-line-2/60 mb-5" />

        <button
          onClick={onEnvia}
          className="w-full flex items-center gap-3.5 py-2 text-left"
        >
          <div className="size-9 rounded-full bg-[#d9d9d9]/45 flex items-center justify-center shrink-0">
            <ArrowTransfer className="size-4 text-principal" />
          </div>
          <div className="flex-1">
            <p className="text-[15px] font-medium">Envía</p>
            <p className="text-[10px] text-ink-2">Envía dinero a una cuenta de Banco</p>
          </div>
          <CaretRight className="size-6 text-line" />
        </button>

        <button className="w-full flex items-center gap-3.5 py-2 text-left mt-3.5">
          <div className="size-9 rounded-full bg-[#d9d9d9]/45 flex items-center justify-center shrink-0">
            <Plus className="size-4 text-principal" />
          </div>
          <div className="flex-1">
            <p className="text-[15px] font-medium">Recibe</p>
            <p className="text-[10px] text-ink-2">Recibe dinero a tu cuenta de Banco</p>
          </div>
          <CaretRight className="size-6 text-line" />
        </button>
      </div>
    </div>
  )
}
