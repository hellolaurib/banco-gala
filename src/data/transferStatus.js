// Sample data for "Estado de transferencias" (list) and "Estado de la
// transferencia" (detail) — not part of the original Figma file (that frame
// was still an empty stub), built to match the app's visual language and
// its own recent transfers shown on Home.
export const TRANSFERS = [
  {
    contactName: 'Camila Ríos',
    account: '321 123 *** ***',
    amount: 2000,
    date: '05 SEPT 2026',
    statusLabel: 'En camino',
    eta: 'Llega hoy antes de las 6:00 p.m.',
    steps: [
      { label: 'Enviada', time: '10:32 a.m.', description: 'Tu transferencia salió de tu cuenta.', status: 'done' },
      { label: 'Procesando', time: '10:33 a.m.', description: 'Banco GALA está procesando el envío.', status: 'done' },
      { label: 'En camino', time: '10:35 a.m.', description: 'El dinero va camino a la cuenta de Camila.', status: 'current' },
      { label: 'Entregada', time: 'Estimado: hoy', description: 'Camila recibirá el dinero en su cuenta.', status: 'pending' },
    ],
  },
  {
    contactName: 'Angela Ríos',
    account: '321 123 *** ***',
    amount: 6000,
    date: '05 SEPT 2026',
    statusLabel: 'Completada',
    eta: 'Entregada el 05 SEPT 2026 a las 11:10 a.m.',
    steps: [
      { label: 'Enviada', time: '10:58 a.m.', description: 'Tu transferencia salió de tu cuenta.', status: 'done' },
      { label: 'Procesando', time: '10:59 a.m.', description: 'Banco GALA procesó el envío.', status: 'done' },
      { label: 'En camino', time: '11:02 a.m.', description: 'El dinero viajó a la cuenta de Angela.', status: 'done' },
      { label: 'Entregada', time: '11:10 a.m.', description: 'Angela recibió el dinero en su cuenta.', status: 'done' },
    ],
  },
]

export const TRACKED_TRANSFER = TRANSFERS[0]
