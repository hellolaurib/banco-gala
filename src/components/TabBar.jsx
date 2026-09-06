import { tabIconHome, tabIconTransfer, tabIconInvest, tabIconSave } from '../assets/figma/index.js'

const TABS = [
  { key: 'home', label: 'Home', icon: tabIconHome },
  { key: 'transfer', label: 'Transfer', icon: tabIconTransfer },
  { key: 'invest', label: 'Invest', icon: tabIconInvest },
  { key: 'save', label: 'Save', icon: tabIconSave },
]

// "Tab bar" component from Figma (375×91, replaced the old "Tab bar / Home"
// component Laura had before) — 4 labeled tabs, active one gets the light
// rounded-rect background. Only Home is wired to anything in this prototype;
// the rest are decorative, same as the old bar's non-Home icons were.
// Positioned by the caller — every screen frame is 864 tall with this
// docked at top-[773px], exactly like the Figma frame.
export default function TabBar({ active = 'home' }) {
  return (
    <div className="relative bg-white shadow-[0px_-5px_30px_0px_rgba(54,41,183,0.07)] h-[91px] w-full">
      <div className="flex items-center gap-0 h-full pl-[39px] pt-[9px]">
        {TABS.map((tab) => (
          <div
            key={tab.key}
            className={`flex flex-col items-center gap-[7px] w-[76px] pt-[15px] pb-[15px] rounded-[14px] ${
              tab.key === active ? 'bg-[rgba(217,217,217,0.46)]' : ''
            }`}
          >
            <img alt="" src={tab.icon} className="size-[26px]" />
            <p className="font-light text-[12px] leading-[23px] text-principal">{tab.label}</p>
          </div>
        ))}
      </div>
      <div className="absolute bottom-[9px] left-1/2 -translate-x-1/2 h-[5px] w-[134px] rounded-full bg-[#cacaca]" />
    </div>
  )
}
