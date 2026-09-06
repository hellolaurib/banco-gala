import StatusBar from '../components/StatusBar.jsx'
import ScreenHeader from '../components/ScreenHeader.jsx'
import TabBar from '../components/TabBar.jsx'
import { magnifyingGlass, plus, arrowTransfer } from '../assets/figma/index.js'
import { CONVERSION } from '../data/contacts.js'

const KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', '⌫']

// Traced 1:1 from the Figma "Envio" frame (375×864).
export default function Envio({ contact, amount, onDigit, onBackspace, onSend, onBack }) {
  const formatted = amount ? Number(amount).toLocaleString('es-CO') : '0'
  const usd = amount ? (Number(amount) / Number(CONVERSION.compra.replace('.', ''))).toFixed(2) : '0'

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

      <div className="absolute bg-white drop-shadow-[-2px_-3px_22.6px_rgba(0,0,0,0.21)] h-[900px] left-0 rounded-2xl top-[118px] w-full">
        <div className="flex items-start justify-between left-6 top-[22px] w-[326px] absolute">
          <div className="flex flex-col items-start">
            <p className="text-[15px] font-medium leading-[26px]">Para: {contact?.name ?? '—'}</p>
            <p className="text-[10px] leading-[26px] text-ink-2">{contact?.account ?? ''}</p>
          </div>
          <div className="bg-[rgba(217,217,217,0.47)] flex items-center justify-center p-[7px] rounded-[18px] size-9">
            <img alt="" src={arrowTransfer} className="rotate-180 size-[22px]" />
          </div>
        </div>

        <p className="absolute left-[135px] top-[113px] text-[10px] leading-[26px] text-positive">{usd} USDc</p>
        <p className="absolute left-[187px] top-[113px] text-[10px] leading-[26px] text-positive">{formatted} COP</p>

        <p className="absolute left-1/2 -translate-x-1/2 top-[154px] text-[54px] font-semibold leading-none text-center w-[211px]">
          {formatted} <span className="text-[24px] align-top">COP</span>
        </p>
        <p className="absolute left-[130px] top-[229px] text-[10px] leading-[26px] text-positive w-[154px] text-center">
          Tu destinatario recibirá
        </p>

        <div className="absolute bg-white border-[0.5px] border-principal flex items-center gap-1.5 h-9 left-[116px] pl-3 pr-9 py-[17px] rounded-[41px] top-[281px] w-[139px] whitespace-nowrap">
          <img alt="" src={magnifyingGlass} className="size-[15px] shrink-0" />
          <p className="text-[14px] leading-[23px] text-principal">Buscar cuentas</p>
        </div>

        <div className="absolute left-0 top-[655px] w-full">
          <TabBar />
        </div>
      </div>

      {/* Numeric keypad — a root-level sibling of the card, same as the
          Figma frame (not nested inside it). */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[464px] grid grid-cols-3 gap-x-9 gap-y-4 w-[210px]">
        {KEYS.map((k, i) =>
          k === '' ? (
            <div key={i} />
          ) : (
            <button
              key={i}
              onClick={() => (k === '⌫' ? onBackspace() : onDigit(k))}
              className="size-[46px] rounded-full flex items-center justify-center text-[16px] font-semibold text-principal active:bg-page-bg transition"
            >
              {k}
            </button>
          ),
        )}
      </div>

      <button
        onClick={onSend}
        disabled={!amount}
        className="absolute bg-principal disabled:opacity-40 flex items-center justify-center gap-1.5 left-6 top-[701px] px-9 py-[17px] rounded-[15px] w-[326px]"
      >
        <img alt="" src={plus} className="size-4 invert" />
        <p className="text-[14px] leading-[23px] text-white">Enviar</p>
      </button>
    </div>
  )
}
