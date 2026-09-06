import ScreenHeader from '../components/ScreenHeader.jsx'
import { CaretRight, Search } from '../components/Icons.jsx'
import { CONVERSION } from '../data/contacts.js'

const KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', '⌫']

export default function Envio({ contact, amount, onDigit, onBackspace, onSend, onBack }) {
  const formatted = amount ? Number(amount).toLocaleString('es-CO') : '0'
  const usd = amount ? (Number(amount) / Number(CONVERSION.compra.replace('.', ''))).toFixed(2) : '0'

  return (
    <div className="relative min-h-full pb-6">
      <div
        className="absolute inset-x-0 top-0 h-[220px]"
        style={{ background: 'linear-gradient(to bottom, #191c3c 0%, #3a418c 65%, transparent 100%)' }}
      />
      <div className="relative">
        <ScreenHeader title="Transferencias" onBack={onBack} />

        <div className="mx-6 -mt-2 bg-white rounded-[16px] shadow-[-2px_-3px_22.6px_rgba(0,0,0,0.12)] px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[15px] font-medium">Para: {contact?.name ?? '—'}</p>
              <p className="text-[10px] text-ink-2">{contact?.account ?? ''}</p>
            </div>
            <div
              className="size-9 rounded-full flex items-center justify-center text-[14px] font-semibold text-principal"
              style={{ backgroundColor: (contact?.color ?? '#ccc') + '55' }}
            >
              {contact ? contact.initial.toLowerCase() + '.' : '?'}
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-[54px] font-semibold leading-none">
              {formatted} <span className="text-[24px] align-top">COP</span>
            </p>
            <div className="flex items-center justify-center gap-3 mt-2 text-[10px] text-positive">
              <span>{usd} USDc</span>
              <span>{formatted} COP</span>
            </div>
            <p className="text-[10px] text-positive mt-4">Tu destinatario recibirá</p>
          </div>

          <div className="flex justify-center mt-6">
            <div className="flex items-center gap-2 border border-principal/70 rounded-full px-4 py-2 text-[14px] text-principal">
              <Search className="size-3.5" />
              Buscar cuentas
            </div>
          </div>

          <div className="grid grid-cols-3 gap-x-9 gap-y-4 mt-8 max-w-[210px] mx-auto">
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
        </div>

        <div className="px-6 mt-6">
          <button
            onClick={onSend}
            disabled={!amount}
            className="w-full bg-principal disabled:opacity-40 text-white rounded-[15px] py-3.5 flex items-center justify-center gap-1.5 text-[14px]"
          >
            Enviar
            <CaretRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
