import StatusBar from '../components/StatusBar.jsx'
import ScreenHeader from '../components/ScreenHeader.jsx'
import TransferDetails from '../components/TransferDetails.jsx'

// Traced from the Figma "Popup" frame 23:2195 — the success/receipt step
// added by Laura, shown right after confirming. Real amount/contact come
// from the flow's own state instead of Figma's sample "$1,200".
export default function Recibo({ contact, amount, onVerEstado, onDescargar }) {
  const total = Number(amount) || 0
  const commission = total * 0.003
  const netTotal = total - commission

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
        <ScreenHeader title="Verificación" onBack={onVerEstado} />
      </div>

      <div className="absolute bg-white h-[746px] left-0 rounded-2xl shadow-[-2px_-3px_22.6px_rgba(0,0,0,0.21)] top-[118px] w-full">
        <div className="flex flex-col items-center mt-[92px]">
          <span className="bg-positive/20 text-positive text-[12px] font-medium rounded-[7px] px-[17px] py-1 flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-positive" />
            Transferencia exitosa
          </span>
          <p className="text-[54px] font-semibold leading-none mt-4">
            ${total.toLocaleString('es-CO')} <span className="text-[24px] align-top">USD</span>
          </p>
        </div>

        <div className="px-6 mt-[46px]">
          <TransferDetails contact={contact} amount={total} commission={commission} total={netTotal} />
        </div>
      </div>

      <button
        onClick={onVerEstado}
        className="absolute bg-principal text-white flex items-center justify-center left-6 top-[653px] px-9 py-[17px] rounded-[15px] w-[326px]"
      >
        <p className="text-[14px] leading-[23px]">Ver estado de transferencia</p>
      </button>
      <button
        onClick={onDescargar}
        className="absolute border border-principal flex items-center justify-center left-6 top-[711px] px-9 py-[17px] rounded-[15px] w-[326px]"
      >
        <p className="text-[14px] leading-[23px] text-principal">Descargar</p>
      </button>
    </div>
  )
}
