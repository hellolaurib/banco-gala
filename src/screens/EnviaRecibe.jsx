import { arrowTransfer, plus, caretRight } from '../assets/figma/index.js'

// Bottom sheet opened from Home's "Transferir" button — traced from the
// "Envia o recibe" Figma frame's bottom-sheet overlay (dim backdrop + panel).
export default function EnviaRecibe({ onEnvia, onClose }) {
  return (
    <div className="absolute inset-0 z-20">
      <button aria-label="Cerrar" onClick={onClose} className="absolute inset-0 bg-black opacity-[0.57]" />

      <div className="absolute bottom-0 left-[-2px] w-[377px] flex flex-col gap-3 pt-[49px] pb-[19px] px-[17px] animate-[slideUp_0.25s_ease-out]">
        <div className="absolute bg-white h-[163px] left-px top-0 w-[376px] rounded-t-2xl pt-[26px]">
          <div className="absolute bg-[rgba(202,202,202,0.51)] h-1 left-[171px] rounded-full top-3 w-[34px]" />
        </div>

        <div className="relative flex flex-col gap-3.5 items-start px-[9px] w-[304px]">
          <button onClick={onEnvia} className="flex gap-[13px] items-center w-[335px] text-left">
            <div className="bg-[rgba(217,217,217,0.47)] flex items-center justify-center p-[7px] rounded-[18px] shrink-0 size-9">
              <img alt="" src={arrowTransfer} style={{ transform: 'rotate(135deg)' }} className="size-[16px]" />
            </div>
            <div className="flex-1">
              <p className="text-[15px] font-medium leading-[26px] mb-[-10px]">Envía</p>
              <p className="text-[10px] leading-[26px] text-ink-2">Envía dinero a una cuenta de Banco</p>
            </div>
            <img alt="" src={caretRight} className="size-8" />
          </button>

          <div className="flex gap-[13px] items-center w-[335px]">
            <div className="bg-[rgba(217,217,217,0.47)] flex items-center justify-center p-[7px] rounded-[18px] shrink-0 size-9">
              <img alt="" src={plus} className="size-4" />
            </div>
            <div className="flex-1">
              <p className="text-[15px] font-medium leading-[26px] mb-[-10px]">Recibe</p>
              <p className="text-[10px] leading-[26px] text-ink-2">Recibe dinero a tu cuenta de Banco</p>
            </div>
            <img alt="" src={caretRight} className="size-8" />
          </div>
        </div>
      </div>
    </div>
  )
}
