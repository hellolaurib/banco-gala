import { useState } from 'react'
import StatusBar from '../components/StatusBar.jsx'
import ScreenHeader from '../components/ScreenHeader.jsx'
import TabBar from '../components/TabBar.jsx'
import { magnifyingGlass, caretRight } from '../assets/figma/index.js'

// Traced 1:1 from the Figma "Inscribir producto" frame (375×864) — step 2 of
// adding a new account (after picking Colombia in PaisSelector). Replaces
// the first hand-built version of this screen (nombre/tipo de cuenta toggle)
// now that Laura designed the real fields herself: documento, an optional
// nickname, a bank dropdown (opened via onBancoClick, an overlay — see
// BancoPicker.jsx), and account number.
export default function NuevaCuenta({ onBack, onContinue, banco, onBancoClick }) {
  const [documento, setDocumento] = useState('')
  const [nickname, setNickname] = useState('')
  const [numeroCuenta, setNumeroCuenta] = useState('')

  const puedeContinuar = documento.trim().length >= 4 && banco && numeroCuenta.trim().length >= 6

  function formatearCuenta(v) {
    const digits = v.replace(/\D/g, '')
    return digits.replace(/(\d{3})(?=\d)/g, '$1 ').trim()
  }

  function handleContinuar() {
    if (!puedeContinuar) return
    onContinue({
      name: nickname.trim() || `Cuenta ${banco}`,
      account: formatearCuenta(numeroCuenta),
      documento: documento.trim(),
      banco,
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
        <ScreenHeader title="Transferencias" onBack={onBack} />
      </div>

      <div className="absolute bg-white h-[745px] left-0 rounded-2xl shadow-[-2px_-3px_45.2px_rgba(0,0,0,0.21)] top-[119px] w-full overflow-y-auto">
        <div className="flex flex-col gap-5 items-start px-6 pt-6 pb-32">
          <div className="w-full">
            <div className="bg-white border-[0.5px] border-principal flex items-center gap-1.5 h-9 pl-3 pr-9 py-[17px] rounded-[41px] w-full">
              <img alt="" src={magnifyingGlass} className="size-[15px]" />
            </div>
          </div>

          <p className="text-[14px] text-principal leading-[23px]">
            Envía a una cuenta que todavía no has guardado como contacto.
          </p>

          <label className="flex flex-col gap-3.5 w-full">
            <span className="text-[14px] text-principal">Número de documento</span>
            <input
              value={documento}
              onChange={(e) => setDocumento(e.target.value.replace(/\D/g, ''))}
              inputMode="numeric"
              className="border border-black/[0.18] rounded-[15px] px-[18px] py-3 text-[14px] text-principal focus:outline-none focus:border-principal"
            />
          </label>

          <label className="flex flex-col gap-3.5 w-full">
            <span className="text-[14px] text-principal">Nickname</span>
            <input
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="Nickname (Opcional)"
              className="border border-black/[0.18] rounded-[15px] px-[18px] py-3 text-[14px] text-principal placeholder:text-principal/80 focus:outline-none focus:border-principal"
            />
          </label>

          <div className="flex flex-col gap-3.5 w-full">
            <span className="text-[14px] text-principal">Banco</span>
            <button
              onClick={onBancoClick}
              className="border border-black/[0.18] rounded-[15px] px-[18px] py-3 flex items-center justify-between"
            >
              <span className={`text-[14px] ${banco ? 'text-principal' : 'text-principal/80'}`}>
                {banco || 'Selecciona tu banco'}
              </span>
              <img alt="" src={caretRight} className="size-2 rotate-90" />
            </button>
          </div>

          <label className="flex flex-col gap-3.5 w-full">
            <span className="text-[14px] text-principal">Número de cuenta</span>
            <input
              value={formatearCuenta(numeroCuenta)}
              onChange={(e) => setNumeroCuenta(e.target.value.replace(/\D/g, ''))}
              inputMode="numeric"
              placeholder="Escribe el número de cuenta"
              className="border border-black/[0.18] rounded-[15px] px-[18px] py-3 text-[14px] text-principal placeholder:text-principal/80 focus:outline-none focus:border-principal"
            />
          </label>
        </div>
      </div>

      <button
        onClick={handleContinuar}
        disabled={!puedeContinuar}
        className="absolute bg-principal disabled:opacity-40 text-white flex items-center justify-center left-6 top-[701px] px-9 py-4 rounded-[15px] w-[326px]"
      >
        <p className="text-[14px] leading-[23px]">Siguiente</p>
      </button>

      <div className="absolute left-0 top-[773px] w-full">
        <TabBar />
      </div>
    </div>
  )
}
