import StatusBar from '../components/StatusBar.jsx'
import ScreenHeader from '../components/ScreenHeader.jsx'
import TabBar from '../components/TabBar.jsx'
import { Search, ArrowTransfer, Plus } from '../components/Icons.jsx'
import { CONTACTS } from '../data/contacts.js'

export default function Transferencia({ onSelectContact, onBack }) {
  return (
    <div className="relative min-h-full">
      <div
        className="absolute inset-x-0 top-0 h-[220px]"
        style={{ background: 'linear-gradient(to bottom, #191c3c 0%, #3a418c 65%, transparent 100%)' }}
      />
      <div className="relative">
        <StatusBar light />
        <ScreenHeader title="Transferencias" onBack={onBack} />

        <div className="mx-6 -mt-2 bg-white rounded-[16px] shadow-[-2px_-3px_22.6px_rgba(0,0,0,0.12)] px-4 pt-5 pb-2">
          <div className="flex items-center gap-2 border border-principal/70 rounded-full px-3 py-2.5 text-[14px] text-principal">
            <Search className="size-3.5" />
            Buscar cuentas
          </div>

          <div className="mt-3 divide-y divide-line/40">
            {CONTACTS.map((c) => (
              <button
                key={c.id}
                onClick={() => onSelectContact(c)}
                className="w-full flex items-center gap-3.5 py-3.5 text-left"
              >
                <div
                  className="size-9 rounded-full flex items-center justify-center text-[14px] font-semibold text-principal shrink-0"
                  style={{ backgroundColor: c.color + '55' }}
                >
                  {c.initial.toLowerCase()}.
                </div>
                <div className="flex-1">
                  <p className="text-[15px] font-medium">{c.name}</p>
                  <p className="text-[10px] text-ink-2">{c.account}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="px-6 mt-6">
          <button className="w-full bg-principal text-white rounded-[15px] py-3.5 flex items-center justify-center gap-1.5 text-[14px]">
            <Plus className="size-4" />
            Agregar
          </button>
        </div>
      </div>

      <TabBar />
    </div>
  )
}
