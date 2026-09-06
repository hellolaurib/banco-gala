import { useState } from 'react'
import StatusBar from '../components/StatusBar.jsx'
import ScreenHeader from '../components/ScreenHeader.jsx'

// New screen — not from Figma. Opened from Transferencia's "Agregar" button,
// for sending to an account that isn't saved as a contact yet.
export default function NuevaCuenta({ onBack, onContinue }) {
  const [nombre, setNombre] = useState('')
  const [banco, setBanco] = useState('')
  const [tipoCuenta, setTipoCuenta] = useState('Ahorros')
  const [numeroCuenta, setNumeroCuenta] = useState('')

  const puedeContinuar = nombre.trim().length > 1 && numeroCuenta.trim().length >= 6

  function formatearCuenta(v) {
    const digits = v.replace(/\D/g, '')
    return digits.replace(/(\d{3})(?=\d)/g, '$1 ').trim()
  }

  function handleContinuar() {
    if (!puedeContinuar) return
    onContinue({
      name: nombre.trim(),
      account: formatearCuenta(numeroCuenta),
      banco: banco.trim() || 'Otro banco',
      tipoCuenta,
      nueva: true,
    })
  }

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
        <ScreenHeader title="Nueva cuenta" onBack={onBack} />
      </div>

      <div className="absolute bg-white h-[625px] left-0 rounded-2xl shadow-[-2px_-3px_45.2px_rgba(0,0,0,0.21)] top-[119px] w-full px-6 pt-7">
        <p className="text-[13px] text-ink-2 leading-5 mb-6">
          Envía a una cuenta que todavía no has guardado como contacto en Banco GALA.
        </p>

        <label className="block mb-5">
          <span className="text-[12px] text-ink-3 font-medium">Nombre completo</span>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ej. Camila Ríos"
            className="mt-1.5 w-full border border-line rounded-xl px-3.5 py-3 text-[14px] text-principal placeholder:text-line focus:outline-none focus:border-principal"
          />
        </label>

        <label className="block mb-5">
          <span className="text-[12px] text-ink-3 font-medium">Banco</span>
          <input
            value={banco}
            onChange={(e) => setBanco(e.target.value)}
            placeholder="Ej. Banco Ejemplo"
            className="mt-1.5 w-full border border-line rounded-xl px-3.5 py-3 text-[14px] text-principal placeholder:text-line focus:outline-none focus:border-principal"
          />
        </label>

        <div className="mb-5">
          <span className="text-[12px] text-ink-3 font-medium">Tipo de cuenta</span>
          <div className="mt-1.5 flex gap-2">
            {['Ahorros', 'Corriente'].map((tipo) => (
              <button
                key={tipo}
                onClick={() => setTipoCuenta(tipo)}
                className={`flex-1 rounded-xl py-3 text-[14px] border transition ${
                  tipoCuenta === tipo
                    ? 'bg-principal text-white border-principal'
                    : 'border-line text-principal'
                }`}
              >
                {tipo}
              </button>
            ))}
          </div>
        </div>

        <label className="block mb-5">
          <span className="text-[12px] text-ink-3 font-medium">Número de cuenta</span>
          <input
            value={formatearCuenta(numeroCuenta)}
            onChange={(e) => setNumeroCuenta(e.target.value.replace(/\D/g, ''))}
            inputMode="numeric"
            placeholder="000 000 000"
            className="mt-1.5 w-full border border-line rounded-xl px-3.5 py-3 text-[14px] text-principal placeholder:text-line focus:outline-none focus:border-principal"
          />
        </label>
      </div>

      <button
        onClick={handleContinuar}
        disabled={!puedeContinuar}
        className="absolute bg-principal disabled:opacity-40 text-white flex items-center justify-center left-6 top-[701px] px-9 py-[17px] rounded-[15px] w-[326px]"
      >
        <p className="text-[14px] leading-[23px]">Continuar</p>
      </button>
    </div>
  )
}
