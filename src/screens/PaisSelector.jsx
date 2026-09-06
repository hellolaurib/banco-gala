import StatusBar from '../components/StatusBar.jsx'
import ScreenHeader from '../components/ScreenHeader.jsx'
import TabBar from '../components/TabBar.jsx'
import { caretRightSmall } from '../assets/figma/index.js'
import { COUNTRIES } from '../data/countries.js'

// Traced 1:1 from the Figma "Nuevo producto" frame (375×864, titled
// "Opciones") — step 1 of adding a new account: pick a destination country.
// Only Colombia is wired up, same as Laura's own Figma prototype (the other
// three rows there have no reaction either — they're a preview of what's
// coming, not a working flow yet).
export default function PaisSelector({ onBack, onSelectCountry }) {
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
        <ScreenHeader title="Opciones" onBack={onBack} />
      </div>

      <div className="absolute bg-white h-[745px] left-0 rounded-2xl shadow-[-2px_-3px_45.2px_rgba(0,0,0,0.21)] top-[119px] w-full" />

      <div className="absolute flex flex-col gap-[26px] items-start left-6 top-[145px] w-[326px]">
        {COUNTRIES.map((c) => (
          <button
            key={c.code}
            onClick={() => c.enabled && onSelectCountry(c)}
            disabled={!c.enabled}
            className={`border-b-[0.4px] border-line flex h-14 items-center gap-[13px] w-full text-left ${
              c.enabled ? '' : 'opacity-50 cursor-default'
            }`}
          >
            <div className="rounded-full size-9 shrink-0 overflow-hidden">
              <img alt="" src={c.flag} className="size-full object-cover" />
            </div>
            <div className="flex-1 flex items-center justify-between">
              <div className="flex flex-col items-start">
                <p className="text-[15px] font-medium leading-[26px] mb-[-10px]">{c.name}</p>
                <p className="text-[10px] leading-[26px] text-ink-2">{c.method}</p>
              </div>
              <img alt="" src={caretRightSmall} className="w-[5px] h-[9px]" />
            </div>
          </button>
        ))}
      </div>

      <div className="absolute left-0 top-[773px] w-full">
        <TabBar />
      </div>
    </div>
  )
}
