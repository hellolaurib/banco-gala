import { useState } from 'react'
import PhoneFrame from './components/PhoneFrame.jsx'
import SignIn from './screens/SignIn.jsx'
import Home from './screens/Home.jsx'
import EnviaRecibe from './screens/EnviaRecibe.jsx'
import Transferencia from './screens/Transferencia.jsx'
import Envio from './screens/Envio.jsx'
import Verificacion from './screens/Verificacion.jsx'
import Confirmacion from './screens/Confirmacion.jsx'
import PopupConfirmacion from './screens/PopupConfirmacion.jsx'
import EstadoTransaccion from './screens/EstadoTransaccion.jsx'

const MAX_DIGITS = 9

export default function App() {
  const [screen, setScreen] = useState('signin')
  const [sheetOpen, setSheetOpen] = useState(false)
  const [contact, setContact] = useState(null)
  const [amount, setAmount] = useState('')

  function reset() {
    setSheetOpen(false)
    setContact(null)
    setAmount('')
    setScreen('home')
  }

  function addAmountDigit(d) {
    setAmount((a) => (a.length >= MAX_DIGITS ? a : a === '0' ? d : a + d))
  }

  return (
    <PhoneFrame
      overlay={
        sheetOpen && (
          <EnviaRecibe
            onClose={() => setSheetOpen(false)}
            onEnvia={() => {
              setSheetOpen(false)
              setScreen('transferencia')
            }}
          />
        )
      }
    >
      {screen === 'signin' && <SignIn onEnter={() => setScreen('home')} />}

      {screen === 'home' && <Home onTransferir={() => setSheetOpen(true)} />}

      {screen === 'transferencia' && (
        <Transferencia
          onBack={reset}
          onSelectContact={(c) => {
            setContact(c)
            setScreen('envio')
          }}
        />
      )}

      {screen === 'envio' && (
        <Envio
          contact={contact}
          amount={amount}
          onDigit={addAmountDigit}
          onBackspace={() => setAmount((a) => a.slice(0, -1))}
          onBack={() => setScreen('transferencia')}
          onSend={() => amount && setScreen('verificacion')}
        />
      )}

      {screen === 'verificacion' && (
        <Verificacion onBack={() => setScreen('envio')} onAdvance={() => setScreen('confirmacion')} />
      )}

      {screen === 'confirmacion' && (
        <Confirmacion onBack={() => setScreen('verificacion')} onAdvance={() => setScreen('popupConfirmacion')} />
      )}

      {screen === 'popupConfirmacion' && (
        <PopupConfirmacion
          onBack={() => setScreen('confirmacion')}
          onAdvance={() => setScreen('estadoTransaccion')}
        />
      )}

      {screen === 'estadoTransaccion' && <EstadoTransaccion onDone={reset} />}
    </PhoneFrame>
  )
}
