import { useState } from 'react'
import PhoneFrame from './components/PhoneFrame.jsx'
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
  const [screen, setScreen] = useState('home')
  const [sheetOpen, setSheetOpen] = useState(false)
  const [contact, setContact] = useState(null)
  const [amount, setAmount] = useState('')
  const [pin, setPin] = useState('')

  function reset() {
    setSheetOpen(false)
    setContact(null)
    setAmount('')
    setPin('')
    setScreen('home')
  }

  function addAmountDigit(d) {
    setAmount((a) => (a.length >= MAX_DIGITS ? a : a === '0' ? d : a + d))
  }

  function addPinDigit(d) {
    setPin((p) => {
      if (p.length >= 4) return p
      const next = p + d
      if (next.length === 4) {
        setTimeout(() => setScreen('confirmacion'), 250)
      }
      return next
    })
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
        <Verificacion
          pin={pin}
          onDigit={addPinDigit}
          onBackspace={() => setPin((p) => p.slice(0, -1))}
          onBack={() => {
            setPin('')
            setScreen('envio')
          }}
        />
      )}

      {screen === 'confirmacion' && (
        <Confirmacion
          contact={contact}
          amount={amount}
          onBack={() => setScreen('verificacion')}
          onConfirm={() => setScreen('popupConfirmacion')}
        />
      )}

      {screen === 'popupConfirmacion' && (
        <PopupConfirmacion
          contact={contact}
          amount={amount}
          onContinue={() => setScreen('estadoTransaccion')}
        />
      )}

      {screen === 'estadoTransaccion' && (
        <EstadoTransaccion contact={contact} amount={amount} onDone={reset} />
      )}
    </PhoneFrame>
  )
}
