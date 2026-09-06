import { ChevronLeft } from './Icons.jsx'

// Shared "back + title" header used by every screen after the Home tab bar
// (Transferencia, Envío, Verificación, Confirmación, Éxito, Estado).
export default function ScreenHeader({ title, onBack }) {
  return (
    <div className="flex items-center justify-center relative px-6 pt-2 pb-8">
      <button
        onClick={onBack}
        aria-label="Volver"
        className="absolute left-6 size-9 rounded-full bg-white/15 flex items-center justify-center text-white active:scale-95 transition"
      >
        <ChevronLeft className="size-4" />
      </button>
      <h1 className="text-white text-[17px] font-semibold">{title}</h1>
    </div>
  )
}
