import StatusBar from './StatusBar.jsx'
import ScreenHeader from './ScreenHeader.jsx'
import TabBar from './TabBar.jsx'

// Shared shell for the four screens that were still an empty "Verificación"
// stub in the Figma file (Popup, Confirmación, Pop up confirmadicón, Estado
// de la transacción) — title, tab bar, and a stray leftover badge, nothing
// else, traced exactly as the frame has it. Tapping the body advances
// (matching the ON_CLICK prototype reactions wired in the Figma file).
export default function VerificacionShell({ onBack, onAdvance }) {
  return (
    <div className="bg-white relative w-full h-[864px] overflow-hidden">
      <div
        className="absolute h-[436px] left-[-3px] top-[-8px] w-[382px]"
        style={{ background: 'linear-gradient(to bottom, #191c3c 47.1%, #3a418c 68.4%, #ffffff 95.9%)' }}
      />
      <div className="absolute inset-x-0 top-0">
        <StatusBar />
      </div>
      <div className="absolute left-0 top-14 w-full">
        <ScreenHeader title="Verificacióm" onBack={onBack} />
      </div>

      {/* Stray "1" badge — present at this exact spot in the source Figma
          frame (an apparent leftover from another screen); kept as-is. */}
      <div className="absolute bg-[#4b5efc] left-[68px] rounded-3xl size-9 top-[556px] flex items-center justify-center">
        <p className="text-[14px] text-white leading-10">1</p>
      </div>

      <button
        onClick={onAdvance}
        aria-label="Continuar"
        className="absolute bg-white drop-shadow-[-2px_-3px_22.6px_rgba(0,0,0,0.21)] h-[900px] left-0 rounded-2xl top-[118px] w-full text-left"
      >
        <div className="absolute left-0 top-[655px] w-full">
          <TabBar />
        </div>
      </button>
    </div>
  )
}
