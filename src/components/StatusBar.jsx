// Simplified phone status bar (time + signal glyphs) reused on every screen.
export default function StatusBar({ light = false }) {
  const color = light ? 'text-white' : 'text-principal'
  return (
    <div className={`flex items-center justify-between px-6 pt-3 pb-2 text-[13px] font-semibold ${color}`}>
      <span>9:09</span>
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 16 12" className="w-4 h-3" fill="none">
          <path d="M1 9.5 3 8v3H1V9.5ZM5 7l2-1.3V11H5V7ZM9 4.3 11 3v8H9V4.3ZM13 1l2-1v11h-2V1Z" fill="currentColor" />
        </svg>
        <svg viewBox="0 0 16 12" className="w-4 h-3" fill="none">
          <path d="M8 10.5a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Zm0-7.9C4.9 2.6 2.2 4 .6 6.1a.6.6 0 0 0 .1.9l1 .8a.6.6 0 0 0 .8-.1C3.9 5.9 5.8 5 8 5s4.1.9 5.5 2.7a.6.6 0 0 0 .8.1l1-.8a.6.6 0 0 0 .1-.9C13.8 4 11.1 2.6 8 2.6Z" fill="currentColor" />
        </svg>
        <div className="w-[22px] h-[11px] rounded-[3px] border border-current opacity-90 relative">
          <div className="absolute inset-[1.5px] right-[3px] rounded-[1px] bg-current" />
        </div>
      </div>
    </div>
  )
}
