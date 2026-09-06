import StatusBar from '../components/StatusBar.jsx'
import ScreenHeader from '../components/ScreenHeader.jsx'
import TransferDetails from '../components/TransferDetails.jsx'
import { vectorDivider } from '../assets/figma/index.js'

// Traced from the Figma "Popup" frame 23:1856 — "Datos de la transferencia"
// review step, added by Laura after the first pass. Real amount/contact
// come from the flow's own state instead of Figma's sample "$1,200".
export default function Confirmacion({ contact, amount, onConfirm, onCancel, onInfoClick }) {
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
        <ScreenHeader title="Verificación" onBack={onCancel} />
      </div>

      <div className="absolute bg-white h-[900px] left-0 rounded-2xl shadow-[-2px_-3px_45.2px_rgba(0,0,0,0.21)] top-[118px] w-full">
        <p className="text-center text-[15px] font-medium mt-[26px]">Datos de la transferencia</p>

        <div className="text-center mt-5">
          <p className="text-[15px] font-medium text-ink-3">Vas a transferir</p>
          <p className="text-[54px] font-semibold leading-none mt-1">
            ${total.toLocaleString('es-CO')} <span className="text-[24px] align-top">USD</span>
          </p>
        </div>

        <img alt="" src={vectorDivider} className="w-[327px] h-0 mx-auto mt-6 block" />

        <div className="px-6 mt-[23px]">
          <TransferDetails
            contact={contact}
            amount={total}
            commission={commission}
            total={netTotal}
            onInfoClick={onInfoClick}
          />
        </div>
      </div>

      <button
        onClick={onConfirm}
        className="absolute bg-principal text-white flex items-center justify-center left-6 top-[653px] px-9 py-[17px] rounded-[15px] w-[326px]"
      >
        <p className="text-[14px] leading-[23px]">Enviar</p>
      </button>
      <button
        onClick={onCancel}
        className="absolute border border-principal flex items-center justify-center left-6 top-[711px] px-9 py-[17px] rounded-[15px] w-[326px]"
      >
        <p className="text-[14px] leading-[23px] text-principal">Cancelar transferencia</p>
      </button>
    </div>
  )
}
