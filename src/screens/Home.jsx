import { useState } from 'react'
import StatusBar from '../components/StatusBar.jsx'
import TabBar from '../components/TabBar.jsx'
import {
  eye,
  plus,
  repeat,
  barcode,
  pathIcon,
  arrowTransfer,
  vectorDivider,
  vectorDash,
  avatarRing,
  avatarPhoto,
  currencyEllipse,
  bell,
  scrollDots,
} from '../assets/figma/index.js'
import { RECENT_TRANSFERS, CONVERSION } from '../data/contacts.js'

// Traced 1:1 from the Figma "Home" frame (375×864) — every position below is
// the frame's own absolute coordinate, not a re-layout.
export default function Home({ onTransferir, onVerEstado }) {
  const [hideBalance, setHideBalance] = useState(false)

  return (
    <div className="bg-white relative w-full h-[864px]">
      <div
        className="absolute h-[436px] left-[-3px] top-[-8px] w-[382px]"
        style={{ background: 'linear-gradient(to bottom, #191c3c 47.1%, #3a418c 68.4%, #ffffff 95.9%)' }}
      />

      <div className="absolute inset-x-0 top-0">
        <StatusBar />
      </div>

      {/* Avatar */}
      <div className="absolute flex items-center justify-between left-6 top-14 w-[330px]">
        <div className="flex items-center gap-3.5">
          <div className="relative size-[50px]">
            <img alt="" src={avatarRing} className="absolute inset-0 size-full" />
            <img alt="Valentina Ríos" src={avatarPhoto} width="50" height="50" className="absolute inset-0 size-full rounded-full object-cover" />
          </div>
          <div className="flex flex-col text-white">
            <p className="text-[10px] leading-[26px] mb-[-6px]">¡Hola de nuevo! 👋</p>
            <p className="text-[17px] leading-7">Valentina Ríos</p>
          </div>
        </div>
        <button aria-label="Notificaciones">
          <img alt="" src={bell} className="size-8" />
        </button>
      </div>

      {/* Datos de la cuenta */}
      <div className="absolute flex flex-col left-[24px] top-[129px] w-[235px] text-white">
        <p className="text-[10px] leading-[26px]">Balance total</p>
        <div className="flex items-center gap-1.5">
          <p className="text-[40px] font-semibold leading-none">{hideBalance ? '••••••••' : '$2.300.000'}</p>
          <button onClick={() => setHideBalance((v) => !v)} aria-label="Mostrar/ocultar balance">
            <img alt="" src={eye} className="size-[18px]" />
          </button>
        </div>
        <p className="text-[10px] leading-[26px]">USD &nbsp;·&nbsp; Detalles de la cuenta</p>
      </div>

      {/* Botones */}
      <div className="absolute flex gap-[7px] items-center left-6 top-[253px]">
        <div className="bg-white flex items-center justify-center gap-[5px] px-9 py-[17px] rounded-[15px] w-[130px]">
          <img alt="" src={plus} className="size-4" />
          <p className="text-[14px] leading-[23px] text-principal">Depositar</p>
        </div>
        <button onClick={onTransferir} className="bg-white flex items-center justify-center gap-2.5 px-9 py-[17px] rounded-[15px] w-[130px]">
          <img alt="" src={repeat} className="size-4" />
          <p className="text-[14px] leading-[23px] text-principal">Transferir</p>
        </button>
        <div className="flex gap-[7px] items-center relative">
          <div className="bg-principal h-[50px] rounded-[10px] w-[51px]" />
          <img alt="" src={barcode} className="absolute left-[10px] top-[9px] size-8" />
        </div>
      </div>

      {/* Estado de tus transacciones */}
      <div className="absolute bg-white flex flex-col gap-2.5 h-[163px] left-6 pb-2 pl-[9px] pr-2 pt-[26px] rounded-2xl top-[316px] w-[326px] shadow-[-2px_-3px_22.6px_rgba(0,0,0,0.21)]">
        <div className="flex gap-1.5 items-start absolute left-[14px] top-[15px]">
          <img alt="" src={pathIcon} className="size-[13px]" />
          <p className="text-[14px] leading-[23px] text-principal">Estado de tus transacciones</p>
        </div>
        <p className="absolute left-[26px] top-[71px] -translate-y-1/2 text-[14px] leading-5 text-principal w-[276px]">
          Recientemente hiciste una transacción, mira el estado de entrega.
        </p>
        <button
          onClick={onVerEstado}
          className="absolute bg-white flex items-center justify-center h-[49px] left-4 rounded-[15px] top-[98px] w-[294px]"
        >
          <p className="text-[14px] leading-[23px] text-principal">Ver el estado</p>
        </button>
      </div>

      {/* Tasa de conversión */}
      <div className="absolute flex flex-col gap-3 items-start left-6 top-[488px] w-[306px]">
        <p className="text-[17px] font-semibold leading-7">Tasa de conversión</p>
        <div className="flex gap-[25px] items-end w-full">
          <div className="flex gap-1.5 items-center">
            <img alt="" src={currencyEllipse} width="41" height="41" className="size-[41px] rounded-full" />
            <div className="flex flex-col text-[10px] w-[52px]">
              <p className="leading-[26px] mb-[-9px] text-ink-2">{CONVERSION.par}</p>
              <p className="leading-[26px] text-positive">Subió {CONVERSION.change}</p>
            </div>
          </div>
          <div className="flex gap-3.5 items-center">
            <div className="flex flex-col items-start w-[84px]">
              <p className="text-[14px] leading-[23px]">${CONVERSION.venta}</p>
              <p className="text-[10px] leading-[26px] text-ink-2">Venta</p>
            </div>
            <div className="flex flex-col items-start w-[84px]">
              <p className="text-[14px] leading-[23px]">${CONVERSION.compra}</p>
              <p className="text-[10px] leading-[26px] text-ink-2">Compra</p>
            </div>
          </div>
        </div>
        <img alt="" src={scrollDots} className="h-1 w-[30px]" />
      </div>

      {/* Transferencias · ver todas */}
      <div className="absolute flex items-center justify-between left-6 top-[606px] w-[326px]">
        <p className="text-[17px] font-semibold leading-7">Transferencias</p>
        <p className="text-[10px] leading-[26px] text-ink-2">ver todas</p>
      </div>

      {/* Divider */}
      <img alt="" src={vectorDivider} className="absolute left-6 top-[600px] w-[327px] h-0" />

      {/* Recent transfers */}
      <div className="absolute flex flex-col left-[25px] top-[649px] w-[326px]">
        {RECENT_TRANSFERS.map((t) => (
          <div key={t.name} className="flex gap-[13px] items-center w-full py-0">
            <div className="bg-[rgba(217,217,217,0.47)] flex items-start p-[7px] rounded-[18px] shrink-0 size-9">
              <img alt="" src={arrowTransfer} className="rotate-180 size-[22px]" />
            </div>
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col items-start">
                <p className="text-[15px] font-medium leading-[26px] mb-[-10px]">{t.name}</p>
                <p className="text-[10px] leading-[26px] text-ink-2">
                  {t.date} · <span className="text-link">Ver estado</span>
                </p>
              </div>
              <div className="flex gap-1.5 items-center">
                <img alt="" src={vectorDash} className="w-2 h-0" />
                <p className="text-[15px] font-medium leading-[26px] text-negative opacity-56">
                  ${t.amount.toLocaleString('es-CO')}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute left-0 top-[773px] w-full">
        <TabBar />
      </div>
    </div>
  )
}
