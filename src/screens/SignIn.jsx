import StatusBar from '../components/StatusBar.jsx'
import { galaLogo, smileySticker } from '../assets/figma/index.js'

// Traced 1:1 from the Figma "Sign in" frame — the real entry point of the
// flow, before Home (re-authentication screen: "Bienvenido a Gala").
export default function SignIn({ onEnter }) {
  return (
    <div className="bg-principal relative w-full h-[864px] overflow-hidden">
      <div className="absolute inset-x-0 top-0">
        <StatusBar />
      </div>

      <div className="absolute flex flex-col gap-[25px] items-start left-6 top-[235px] w-[327px]">
        <img alt="Banco GALA" src={galaLogo} className="h-[65px] w-[67px]" />
        <p className="text-white text-[45px] leading-[51px] w-[267px]">
          Bienvenido a <span className="font-semibold">Gala</span>
        </p>
        <p className="text-white text-[16px] leading-[26px] w-full">
          Por tu seguridad, ingresa nuevamente. Usa tu contraseña, huella o rostro para volver a entrar
        </p>
      </div>

      <div className="absolute flex flex-col gap-[25px] items-center left-6 top-[634px] w-[327px]">
        <button
          onClick={onEnter}
          className="bg-white flex h-11 items-center justify-center gap-1.5 rounded-[15px] w-full"
        >
          <img alt="" src={smileySticker} className="size-5" />
          <p className="text-[14px] leading-[23px] text-principal">Ingresa con face ID</p>
        </button>
        <button onClick={onEnter} className="text-[14px] leading-[23px] text-white">
          Entrar con contraseña
        </button>
      </div>

      <div className="absolute bottom-[9px] left-1/2 -translate-x-1/2 h-[5px] w-[134px] rounded-full bg-[#cacaca]" />
    </div>
  )
}
