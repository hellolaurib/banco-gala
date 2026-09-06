import { infoIcon } from '../assets/figma/index.js'

const today = new Date().toLocaleDateString('es-CO', { day: '2-digit', month: '2-digit', year: 'numeric' })

// "Datos de la transferencia" rows — shared by the Confirmación and Recibo
// screens (traced from Figma nodes 23:1865 / 23:2204).
export default function TransferDetails({ contact, amount, commission, total, currencyCode, onInfoClick }) {
  return (
    <div className="flex flex-col gap-[23px] items-start w-full">
      <Row label="Destinatario" value={contact?.name ?? '—'} />
      <Row label="N° Cuenta" value={contact?.account?.replace(/\*/g, '0') ?? '—'} />
      <Row label="Fecha" value={today} />
      <Row label="Categoría" value="Transferencias personales" />
      <div className="flex gap-[163px] items-center w-full">
        <p className="text-[14px] text-ink-3 opacity-93">Comisiones</p>
        <div className="flex gap-[3px] items-center">
          <p className="text-[14px] text-principal text-right w-[72px]">${commission.toFixed(2)}</p>
          <button onClick={onInfoClick} aria-label="¿Qué son las comisiones?">
            <img alt="" src={infoIcon} className="size-[15px]" />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-[17px] items-start w-full">
        <div className="flex justify-between items-center w-full">
          <p className="text-[14px] font-semibold text-principal opacity-93">*Valor total</p>
          <p className="text-[14px] font-semibold text-positive text-right">
            ${total.toLocaleString('es-CO')} {currencyCode}
          </p>
        </div>
        <p className="text-[9px] leading-[15px] text-ink-3 opacity-93">
          *Este es el valor que recibirá tu destinatario después de comisiones
        </p>
      </div>
    </div>
  )
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between items-center w-full text-[14px] whitespace-nowrap">
      <p className="text-ink-3">{label}</p>
      <p className="text-principal text-right">{value}</p>
    </div>
  )
}
