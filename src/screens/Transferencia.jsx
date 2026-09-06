import StatusBar from '../components/StatusBar.jsx'
import ScreenHeader from '../components/ScreenHeader.jsx'
import TabBar from '../components/TabBar.jsx'
import { magnifyingGlass, plus, contactAvatar } from '../assets/figma/index.js'
import { CONTACTS } from '../data/contacts.js'

// Traced 1:1 from the Figma "Transferencia" frame (375×864).
export default function Transferencia({ onSelectContact, onBack }) {
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
        <ScreenHeader title="Transferencias" onBack={onBack} />
      </div>

      <div className="absolute bg-white h-[900px] left-0 rounded-2xl shadow-[-2px_-3px_45.2px_rgba(0,0,0,0.21)] top-[119px] w-full" />

      <div className="absolute flex flex-col gap-[31px] items-start left-6 top-[145px] w-[326px]">
        <div className="w-full">
          <div className="bg-white border-[0.5px] border-principal flex items-center gap-1.5 h-9 pl-3 pr-9 py-[17px] rounded-[41px] w-full">
            <img alt="" src={magnifyingGlass} className="size-[15px]" />
            <p className="text-[14px] leading-[23px] text-principal">Buscar cuentas</p>
          </div>
        </div>

        <div className="flex flex-col gap-6 items-start w-full">
          {CONTACTS.map((c) => (
            <button
              key={c.id}
              onClick={() => onSelectContact(c)}
              className="border-b-[0.4px] border-line flex h-14 items-center gap-[13px] w-full text-left"
            >
              <div className="rounded-[18px] size-9 shrink-0 overflow-hidden">
                <img alt="" src={contactAvatar} className="size-full object-cover" />
              </div>
              <div className="flex flex-col items-start">
                <p className="text-[15px] font-medium leading-[26px] mb-[-10px]">{c.name}</p>
                <p className="text-[10px] leading-[26px] text-ink-2">{c.account}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <button className="absolute bg-principal flex items-center justify-center gap-1.5 left-6 top-[701px] px-9 py-[17px] rounded-[15px] w-[326px]">
        <img alt="" src={plus} className="size-4 invert" />
        <p className="text-[14px] leading-[23px] text-white">Agregar</p>
      </button>

      <div className="absolute left-0 top-[773px] w-full">
        <TabBar />
      </div>
    </div>
  )
}
