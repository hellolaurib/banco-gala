import StatusBar from '../components/StatusBar.jsx'
import ScreenHeader from '../components/ScreenHeader.jsx'
import TabBar from '../components/TabBar.jsx'
import { contactAvatar } from '../assets/figma/index.js'
import { TRACKED_TRANSFER } from '../data/transferStatus.js'

// "Estado de la transferencia" — not part of the original Figma file, added
// at Laura's request so people can see when the money will reach the
// recipient. Built to match the app's existing visual language.
function StepDot({ status }) {
  if (status === 'done') {
    return (
      <div className="size-6 rounded-full bg-positive flex items-center justify-center shrink-0">
        <svg viewBox="0 0 24 24" fill="none" className="size-3.5">
          <path d="m5 13 4.5 4.5L19 8" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    )
  }
  if (status === 'current') {
    return (
      <div className="size-6 rounded-full bg-accent-2 flex items-center justify-center shrink-0 relative">
        <span className="absolute inset-0 rounded-full bg-accent-2 opacity-40 animate-ping" />
        <div className="size-2.5 rounded-full bg-white relative" />
      </div>
    )
  }
  return <div className="size-6 rounded-full border-2 border-line shrink-0" />
}

export default function EstadoTransferencia({ onBack, transfer }) {
  const t = transfer ?? TRACKED_TRANSFER

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
        <ScreenHeader title="Estado de la transferencia" onBack={onBack} />
      </div>

      <div className="absolute bg-white h-[900px] left-0 rounded-2xl shadow-[-2px_-3px_45.2px_rgba(0,0,0,0.21)] top-[119px] w-full">
        <div className="px-6 pt-6">
          <div className="flex items-center gap-3.5">
            <div className="rounded-full size-9 shrink-0 overflow-hidden">
              <img alt="" src={contactAvatar} className="size-full object-cover" />
            </div>
            <div className="flex-1">
              <p className="text-[15px] font-medium leading-[26px]">Transferencia a {t.contactName}</p>
              <p className="text-[10px] leading-[26px] text-ink-2">{t.date} · {t.account}</p>
            </div>
            <p className="text-[17px] font-semibold text-negative opacity-56">
              ${t.amount.toLocaleString('es-CO')}
            </p>
          </div>

          <div className="mt-4 bg-positive/10 rounded-2xl px-4 py-3.5 flex items-center gap-2.5">
            <div className="size-8 rounded-full bg-positive/15 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="size-4 text-positive">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-[14px] leading-[20px] text-positive font-medium">{t.eta}</p>
          </div>

          <div className="mt-7">
            {t.steps.map((step, i) => (
              <div key={step.label} className="flex gap-3.5">
                <div className="flex flex-col items-center">
                  <StepDot status={step.status} />
                  {i < t.steps.length - 1 && (
                    <div className={`w-0.5 flex-1 min-h-[34px] ${step.status === 'done' ? 'bg-positive' : 'bg-line-2'}`} />
                  )}
                </div>
                <div className={`pb-7 ${step.status === 'pending' ? 'opacity-45' : ''}`}>
                  <div className="flex items-baseline gap-2">
                    <p className="text-[15px] font-medium leading-[22px]">{step.label}</p>
                    <p className="text-[10px] text-ink-2">{step.time}</p>
                  </div>
                  <p className="text-[13px] text-ink-2 leading-[20px] mt-0.5">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute left-0 top-[655px] w-full">
          <TabBar />
        </div>
      </div>
    </div>
  )
}
