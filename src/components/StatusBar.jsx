import { statusBattery, statusWifi, statusSignal } from '../assets/figma/index.js'

// Phone status bar — traced 1:1 from the Figma "System / StatusBars / White" component.
export default function StatusBar() {
  return (
    <div className="relative h-10 w-full">
      <p className="absolute left-[8.57%] top-1/2 -translate-y-1/2 text-white text-[15px] font-semibold">
        9:09
      </p>
      <div className="absolute right-[11.74%] top-1/2 -translate-y-1/2">
        <img alt="" src={statusWifi} className="w-4 h-3" />
      </div>
      <div className="absolute right-[17.16%] top-1/2 -translate-y-1/2">
        <img alt="" src={statusSignal} className="w-4 h-3" />
      </div>
      <div className="absolute right-[8.57%] top-1/2 -translate-y-1/2 w-[22px] h-[11.3px] rounded-[2.7px] border border-white opacity-90 flex items-center px-[1.5px]">
        <div className="h-[7.3px] w-[18px] rounded-[1.3px] bg-white" />
        <img alt="" src={statusBattery} className="absolute -right-1 h-1 w-[1.3px]" />
      </div>
    </div>
  )
}
