import { useState } from 'react'
import StatusBar from '../components/StatusBar.jsx'
import TabBar from '../components/TabBar.jsx'
import { Eye, Plus, Repeat, Barcode, Bell, ArrowTransfer } from '../components/Icons.jsx'
import { RECENT_TRANSFERS, CONVERSION } from '../data/contacts.js'

export default function Home({ onTransferir }) {
  const [hideBalance, setHideBalance] = useState(false)

  return (
    <div className="relative min-h-full">
      <div
        className="absolute inset-x-0 top-0 h-[300px]"
        style={{ background: 'linear-gradient(to bottom, #191c3c 0%, #3a418c 55%, transparent 100%)' }}
      />

      <div className="relative">
        <StatusBar light />

        <div className="flex items-center justify-between px-6 mt-2">
          <div className="flex items-center gap-3.5">
            <div className="size-[50px] rounded-full bg-white/20 flex items-center justify-center text-white font-semibold">
              VR
            </div>
            <div className="text-white">
              <p className="text-[10px] leading-tight">¡Hola de nuevo! 👋</p>
              <p className="text-[17px] font-medium leading-tight">Valentina Ríos</p>
            </div>
          </div>
          <button className="text-white relative">
            <Bell className="size-6" />
            <span className="absolute -top-0.5 -right-0.5 size-2 rounded-full bg-red-400" />
          </button>
        </div>

        <div className="px-6 mt-7 text-white">
          <p className="text-[10px] opacity-90">Balance total</p>
          <div className="flex items-center gap-2">
            <p className="text-[40px] font-semibold leading-none mt-1">
              {hideBalance ? '••••••••' : '$2.300.000'}
            </p>
            <button onClick={() => setHideBalance((v) => !v)} className="opacity-90">
              <Eye className="size-[18px]" />
            </button>
          </div>
          <p className="text-[10px] opacity-80 mt-1">USD · Detalles de la cuenta</p>
        </div>

        <div className="flex items-center gap-1.5 px-6 mt-6">
          <button className="flex-1 bg-white rounded-[15px] py-3.5 flex items-center justify-center gap-1.5 text-[14px] text-principal font-normal">
            <Plus className="size-4" />
            Depositar
          </button>
          <button
            onClick={onTransferir}
            className="flex-1 bg-white rounded-[15px] py-3.5 flex items-center justify-center gap-2.5 text-[14px] text-principal font-normal"
          >
            <Repeat className="size-4" />
            Transferir
          </button>
          <button className="size-[50px] shrink-0 bg-principal rounded-[10px] flex items-center justify-center text-white">
            <Barcode className="size-6" />
          </button>
        </div>

        <div className="mx-6 mt-5 bg-white rounded-[16px] shadow-[-2px_-3px_22.6px_rgba(0,0,0,0.12)] px-4 py-4">
          <div className="flex items-center gap-1.5 text-[14px]">
            <Repeat className="size-3.5" />
            <span>Estado de tus transacciones</span>
          </div>
          <p className="text-[14px] text-principal mt-2.5 leading-snug">
            Recientemente hiciste una transacción, mira el estado de entrega.
          </p>
          <button className="w-full mt-3 bg-[#dfdfdf6a] hover:bg-[#dfdfdf99] rounded-[15px] py-3.5 text-[14px] transition">
            Ver el estado
          </button>
        </div>

        <div className="px-6 mt-7">
          <p className="text-[17px] font-semibold">Tasa de conversión</p>
          <div className="flex items-end gap-6 mt-3">
            <div className="flex items-center gap-1.5">
              <div className="size-[41px] rounded-full bg-gradient-to-b from-yellow-300 via-blue-500 to-red-500" />
              <div className="text-[10px]">
                <p className="text-ink-2">{CONVERSION.par}</p>
                <p className="text-positive">Subió {CONVERSION.change}</p>
              </div>
            </div>
            <div className="flex items-center gap-3.5">
              <div>
                <p className="text-[14px]">${CONVERSION.venta}</p>
                <p className="text-[10px] text-ink-2">Venta</p>
              </div>
              <div>
                <p className="text-[14px]">${CONVERSION.compra}</p>
                <p className="text-[10px] text-ink-2">Compra</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 mt-7">
          <div className="flex items-center justify-between">
            <p className="text-[17px] font-semibold">Transferencias</p>
            <span className="text-[10px] text-ink-2">ver todas</span>
          </div>
          <div className="mt-2 divide-y divide-line-2/40">
            {RECENT_TRANSFERS.map((t) => (
              <div key={t.name} className="flex items-center gap-3.5 py-3">
                <div className="size-9 rounded-full bg-[#d9d9d9]/45 flex items-center justify-center">
                  <ArrowTransfer className="size-4 text-principal" />
                </div>
                <div className="flex-1">
                  <p className="text-[15px] font-medium">{t.name}</p>
                  <p className="text-[10px] text-ink-2">
                    {t.date} · <span className="text-link">Ver estado</span>
                  </p>
                </div>
                <p className="text-[15px] font-medium text-negative/80">
                  − ${t.amount.toLocaleString('es-CO')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <TabBar />
    </div>
  )
}
