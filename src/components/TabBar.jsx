import { HomeIcon, Search, Mail, Settings } from './Icons.jsx'

// Bottom tab bar shared across every screen — Home is always the active tab
// in this prototype (the other tabs aren't part of the transfer flow).
export default function TabBar() {
  return (
    <div className="sticky bottom-0 z-10 bg-white rounded-t-[20px] shadow-[0px_-5px_30px_0px_rgba(54,41,183,0.07)] px-4 pt-3 pb-2 mt-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 bg-accent text-white text-xs font-medium px-4 py-2.5 rounded-full">
          <HomeIcon className="size-4" />
          Home
        </div>
        <Search className="size-5 text-line" />
        <Mail className="size-5 text-line" />
        <Settings className="size-5 text-line" />
      </div>
      <div className="mx-auto mt-3 h-[5px] w-[134px] rounded-full bg-line-2" />
    </div>
  )
}
