import { useState } from 'react'
import PhoneFrame from './components/PhoneFrame.jsx'
import SignIn from './screens/SignIn.jsx'
import Home from './screens/Home.jsx'
import EnviaRecibe from './screens/EnviaRecibe.jsx'
import Transferencia from './screens/Transferencia.jsx'
import Envio from './screens/Envio.jsx'
import Confirmacion from './screens/Confirmacion.jsx'
import Recibo from './screens/Recibo.jsx'
import EstadoTransferencia from './screens/EstadoTransferencia.jsx'
import ComisionesInfo from './screens/ComisionesInfo.jsx'
import NuevaCuenta from './screens/NuevaCuenta.jsx'
import PaisSelector from './screens/PaisSelector.jsx'
import CurrencyPicker from './screens/CurrencyPicker.jsx'
import BancoPicker from './screens/BancoPicker.jsx'
import { buildTransferStatus } from './data/transferStatus.js'
import { CURRENCIES } from './data/currencies.js'

const MAX_DIGITS = 9

export default function App() {
  const [screen, setScreen] = useState('signin')
  const [sheetOpen, setSheetOpen] = useState(false)
  const [contact, setContact] = useState(null)
  const [amount, setAmount] = useState('')
  const [selectedTransfer, setSelectedTransfer] = useState(null)
  const [comisionesOpen, setComisionesOpen] = useState(false)
  const [currencyPickerOpen, setCurrencyPickerOpen] = useState(false)
  const [currency, setCurrency] = useState(CURRENCIES[0])
  const [bancoPickerOpen, setBancoPickerOpen] = useState(false)
  const [banco, setBanco] = useState('')

  function reset() {
    setSheetOpen(false)
    setContact(null)
    setAmount('')
    setCurrency(CURRENCIES[0])
    setBanco('')
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
        ) : comisionesOpen ? (
          <ComisionesInfo onClose={() => setComisionesOpen(false)} />
        ) : currencyPickerOpen ? (
          <CurrencyPicker
            current={currency}
            onClose={() => setCurrencyPickerOpen(false)}
            onSelect={(c) => {
              setCurrency(c)
              setCurrencyPickerOpen(false)
            }}
          />
        ) : (
          bancoPickerOpen && (
            <BancoPicker
              current={banco}
              onClose={() => setBancoPickerOpen(false)}
              onSelect={(b) => {
                setBanco(b)
                setBancoPickerOpen(false)
              }}
            />
          )
        )
      }
    >
      {screen === 'signin' && <SignIn onEnter={() => setScreen('home')} />}

      {screen === 'home' && (
        <Home
          onTransferir={() => setSheetOpen(true)}
          onSelectTransfer={(t) => {
            setSelectedTransfer(t)
            setScreen('estadoTransferencia')
          }}
        />
      )}

      {screen === 'transferencia' && (
        <Transferencia
          onBack={reset}
          onSelectContact={(c) => {
            setContact(c)
            setScreen('envio')
          }}
          onAgregar={() => setScreen('paisSelector')}
        />
      )}

      {screen === 'paisSelector' && (
        <PaisSelector
          onBack={() => setScreen('transferencia')}
          onSelectCountry={() => setScreen('nuevaCuenta')}
        />
      )}

      {screen === 'nuevaCuenta' && (
        <NuevaCuenta
          banco={banco}
          onBancoClick={() => setBancoPickerOpen(true)}
          onBack={() => setScreen('paisSelector')}
          onContinue={(c) => {
            setContact(c)
            setScreen('envio')
          }}
        />
      )}

      {screen === 'envio' && (
        <Envio
          contact={contact}
          amount={amount}
          currency={currency}
          onCurrencyClick={() => setCurrencyPickerOpen(true)}
          onDigit={addAmountDigit}
          onBackspace={() => setAmount((a) => a.slice(0, -1))}
          onBack={() => setScreen('transferencia')}
          onSend={() => amount && setScreen('confirmacion')}
          onInfoClick={() => setComisionesOpen(true)}
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
          onVerEstado={() => {
            setSelectedTransfer(buildTransferStatus(contact, amount))
            setScreen('estadoTransferencia')
          }}
          onDescargar={() => {}}
          onInfoClick={() => setComisionesOpen(true)}
        />
      )}

      {screen === 'estadoTransferencia' && <EstadoTransferencia transfer={selectedTransfer} onBack={reset} />}
    </PhoneFrame>
  )
}
