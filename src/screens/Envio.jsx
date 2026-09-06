import StatusBar from '../components/StatusBar.jsx'
import ScreenHeader from '../components/ScreenHeader.jsx'
import TabBar from '../components/TabBar.jsx'
import { arrowTransfer, repeat, infoIcon, currencyEllipse, caretRight } from '../assets/figma/index.js'
import { CONVERSION, COMMISSION_RATE } from '../data/contacts.js'

const KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', '⌫']
const RATE = Number(CONVERSION.compra.replace('.', ''))

// Traced 1:1 from the Figma "Envio" frame (375×864) — Laura reworked this
// screen so the amount is entered in USD and converted to a destination
// currency for the recipient, picked from the "Money" dropdown (the old
// "Buscar cuentas" pill was replaced by it in her latest Figma pass). The
// dropdown's option list itself is rendered by App.jsx via PhoneFrame's
// overlay slot (CurrencyPicker) — a local absolutely-positioned dropdown here
// was losing clicks to the numeric keypad below it, so picking a currency
// now opens that overlay instead of an inline list.
export default function Envio({ contact, amount, onDigit, onBackspace, onSend, onBack, onInfoClick, currency, onCurrencyClick }) {
  const total = Number(amount) || 0
  const commission = total * COMMISSION_RATE
  const netUsd = total - commission
  const usd = amount ? total.toLocaleString('es-CO') : '0'
  const recipientAmount = amount
    ? Math.round(netUsd * currency.rate).toLocaleString('es-CO', { maximumFractionDigits: 0 })
    : '0'

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

      <div className="absolute bg-white drop-shadow-[-2px_-3px_22.6px_rgba(0,0,0,0.21)] h-[746px] left-0 rounded-2xl top-[118px] w-full">
        <div className="flex items-start justify-between left-6 top-[22px] w-[326px] absolute">
          <div className="flex flex-col items-start">
            <p className="text-[15px] font-medium leading-[26px]">Para: {contact?.name ?? '—'}</p>
            <p className="text-[10px] leading-[26px] text-ink-2">{contact?.account ?? ''}</p>
          </div>
          <div className="bg-[rgba(217,217,217,0.47)] flex items-center justify-center p-[7px] rounded-[18px] size-9">
            <img alt="" src={arrowTransfer} className="rotate-180 size-[22px]" />
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 top-[138px] flex flex-col items-center gap-2.5 w-[224px]">
          <div className="flex items-center gap-2.5 text-[10px] text-positive">
            <span>1 USD</span>
            <img alt="" src={repeat} className="size-[11px]" />
            <span>{CONVERSION.compra} COP</span>
          </div>
          <p className="text-[54px] font-semibold leading-none">
            {usd} <span className="text-[24px] align-top">USD</span>
          </p>
          <div className="flex items-center gap-1.5">
            <p className="text-[10px] text-ink-3 text-center">Comisión (0.3%): ${commission.toFixed(2)} USD</p>
            <button onClick={onInfoClick} aria-label="¿Qué son las comisiones?">
              <img alt="" src={infoIcon} className="size-3" />
            </button>
          </div>
          <p className="text-[10px] text-ink-3 text-center">
            Tu destinatario recibirá ${recipientAmount} {currency.code}
          </p>

          <button
            onClick={onCurrencyClick}
            className="bg-[rgba(172,172,172,0.27)] flex items-center gap-1.5 h-9 pl-[18px] pr-3 rounded-[41px]"
          >
            {currency.code === 'COP' && <img alt="" src={currencyEllipse} className="size-[14px] rounded-full" />}
            <span className="text-[10px] text-principal whitespace-nowrap">
              {currency.code} - ${recipientAmount}
            </span>
            <img alt="" src={caretRight} className="size-6 rotate-90" />
          </button>
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
        className="absolute bg-principal disabled:opacity-40 flex items-center justify-center left-6 top-[701px] px-9 py-[17px] rounded-[15px] w-[326px]"
      >
        <p className="text-[14px] leading-[23px] text-white">Enviar</p>
      </button>
    </div>
  )
}
