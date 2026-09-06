// Centers the app in a phone-shaped frame — this is a click-through
// high-fidelity prototype, so we present it the way Figma's own
// "Present" view would: one device, centered, on a neutral backdrop.
export default function PhoneFrame({ children, overlay }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center py-10 px-4">
      <div className="relative w-[375px] h-[864px] max-h-[92vh] bg-white rounded-[44px] shadow-[0_30px_70px_-15px_rgba(25,28,60,0.45)] ring-8 ring-principal/90 overflow-hidden">
        <div className="absolute inset-0 overflow-y-auto overflow-x-hidden">{children}</div>
        {/* Rendered against this outer, fixed-size box — not the scrollable
            content above — so a bottom sheet always docks to the device's
            visible bottom edge, no matter how tall the screen behind it is. */}
        {overlay}
      </div>
    </div>
  )
}
