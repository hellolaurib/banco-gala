import { tabIconHome, tabIconSearch, tabIconMail, tabIconSettings } from '../assets/figma/index.js'

// "Tab bar / Home" component from Figma (375×91), Home always the active tab.
// Positioned by the caller — every screen frame is 864 tall with this
// docked at top-[773px], exactly like the Figma frame.
export default function TabBar() {
  return (
    <div className="relative bg-white shadow-[0px_-5px_30px_0px_rgba(54,41,183,0.07)] h-[91px] w-full">
      <div className="flex items-center h-full px-[38px]">
        <div className="flex items-center gap-2 bg-[#3629b7] rounded-[20px] px-4 py-2">
          <img alt="" src={tabIconHome} className="w-4 h-4" />
          <p className="font-['Poppins'] text-[12px] leading-4 text-white">Home</p>
        </div>
        <div className="flex-1 flex items-center justify-around">
          <img alt="" src={tabIconSearch} className="w-5 h-5" />
          <img alt="" src={tabIconSettings} className="w-5 h-5" />
          <img alt="" src={tabIconMail} className="w-5 h-5" />
        </div>
      </div>
      <div className="absolute bottom-[9px] left-1/2 -translate-x-1/2 h-[5px] w-[134px] rounded-full bg-[#cacaca]" />
    </div>
  )
}
