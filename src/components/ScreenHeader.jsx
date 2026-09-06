import { backChevron } from '../assets/figma/index.js'

// Shared "Titulo" header (back + title) reused by every screen after Home —
// traced from Figma's "Titulo" component, back icon is the real exported asset.
export default function ScreenHeader({ title, onBack }) {
  return (
    <div className="relative h-9 px-6 pt-2 pb-8">
      <button onClick={onBack} aria-label="Volver" className="absolute left-6 size-9 active:scale-95 transition">
        <img alt="" src={backChevron} className="size-9" />
      </button>
      <h1 className="text-center text-white text-[17px] font-semibold leading-7">{title}</h1>
    </div>
  )
}
