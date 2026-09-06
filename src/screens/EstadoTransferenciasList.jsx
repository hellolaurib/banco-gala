import StatusBar from '../components/StatusBar.jsx'
import ScreenHeader from '../components/ScreenHeader.jsx'
import TabBar from '../components/TabBar.jsx'
import { magnifyingGlass, plus, arrowTransfer } from '../assets/figma/index.js'
import { TRANSFERS } from '../data/transferStatus.js'

// Traced from the Figma "Transferencia" frame 23:2302 ("Estado de
// transferencias") — that frame was still a stub (header + search bar, no
// populated rows), so the list below was built to match its chrome.
export default function EstadoTransferenciasList({ onSelectTransfer, onBack }) {
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
        <ScreenHeader title="Estado de transferencias" onBack={onBack} />
      </div>

      <div className="absolute bg-white h-[745px] left-0 rounded-2xl shadow-[-2px_-3px_45.2px_rgba(0,0,0,0.21)] top-[119px] w-full" />

      <div className="absolute flex flex-col gap-[18px] items-start left-6 top-[145px] w-[326px]">
        <div className="bg-white border-[0.5px] border-principal flex items-center gap-1.5 h-9 pl-3 pr-9 py-[17px] rounded-[41px] w-full whitespace-nowrap">
          <img alt="" src={magnifyingGlass} className="size-[15px] shrink-0" />
          <p className="text-[14px] leading-[23px] text-principal">Buscar cuentas</p>
        </div>

        <div className="flex flex-col w-full">
          {TRANSFERS.map((t, i) => (
            <button
              key={t.contactName}
              onClick={() => onSelectTransfer(t)}
              className={`w-full flex items-center gap-3.5 py-3.5 text-left ${i > 0 ? 'border-t border-line/40' : ''}`}
            >
              <div className="size-9 rounded-full bg-[rgba(217,217,217,0.47)] flex items-center justify-center shrink-0">
                <img alt="" src={arrowTransfer} className="rotate-180 size-[22px]" />
              </div>
              <div className="flex-1">
                <p className="text-[15px] font-medium leading-[26px] mb-[-10px]">Transferencia a {t.contactName}</p>
                <p className="text-[10px] leading-[26px] text-ink-2">{t.date}</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <p className="text-[15px] font-medium text-negative opacity-56">
                  ${t.amount.toLocaleString('es-CO')}
                </p>
                <span
                  className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                    t.statusLabel === 'Completada' ? 'text-positive bg-positive/10' : 'text-accent-2 bg-accent-2/10'
                  }`}
                >
                  {t.statusLabel}
                </span>
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
