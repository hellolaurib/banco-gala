import { useState } from 'react'
import PhoneFrame from './components/PhoneFrame.jsx'
import SignIn from './screens/SignIn.jsx'
import Home from './screens/Home.jsx'
import EnviaRecibe from './screens/EnviaRecibe.jsx'
import Transferencia from './screens/Transferencia.jsx'
import Envio from './screens/Envio.jsx'
import Confirmacion from './screens/Confirmacion.jsx'
import Recibo from './screens/Recibo.jsx'
import EstadoTransferenciasList from './screens/EstadoTransferenciasList.jsx'
import EstadoTransferencia from './screens/EstadoTransferencia.jsx'
import ComisionesInfo from './screens/ComisionesInfo.jsx'

const MAX_DIGITS = 9

export default function App() {
  const [screen, setScreen] = useState('signin')
  const [sheetOpen, setSheetOpen] = useState(false)
  const [contact, setContact] = useState(null)
  const [amount, setAmount] = useState('')
  const [selectedTransfer, setSelectedTransfer] = useState(null)
  const [comisionesOpen, setComisionesOpen] = useState(false)

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
        sheetOpen ? (
          <EnviaRecibe
            onClose={() => setSheetOpen(false)}
            onEnvia={() => {
              setSheetOpen(false)
              setScreen('transferencia')
            }}
          />
        ) : (
          comisionesOpen && <ComisionesInfo onClose={() => setComisionesOpen(false)} />
        )
      }
    >
      {screen === 'signin' && <SignIn onEnter={() => setScreen('home')} />}

      {screen === 'home' && (
        <Home
          onTransferir={() => setSheetOpen(true)}
          onVerEstado={() => setScreen('estadoTransferenciasList')}
        />
      )}

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
          onSend={() => amount && setScreen('confirmacion')}
        />
      )}

      {screen === 'confirmacion' && (
        <Confirmacion
          contact={contact}
          amount={amount}
          onConfirm={() => setScreen('recibo')}
          onCancel={reset}
          onInfoClick={() => setComisionesOpen(true)}
        />
      )}

      {screen === 'recibo' && (
        <Recibo
          contact={contact}
          amount={amount}
          onVerEstado={() => setScreen('estadoTransferenciasList')}
          onDescargar={() => {}}
          onInfoClick={() => setComisionesOpen(true)}
        />
      )}

      {screen === 'estadoTransferenciasList' && (
        <EstadoTransferenciasList
          onBack={reset}
          onSelectTransfer={(t) => {
            setSelectedTransfer(t)
            setScreen('estadoTransferencia')
          }}
        />
      )}

      {screen === 'estadoTransferencia' && (
        <EstadoTransferencia transfer={selectedTransfer} onBack={() => setScreen('estadoTransferenciasList')} />
      )}
    </PhoneFrame>
  )
}
