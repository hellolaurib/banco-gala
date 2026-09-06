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

// Builds a fresh "Estado de la transferencia" for the transfer the user just
// sent (Recibo's "Ver estado de transferencia" button) — the amount/contact
// are real, the timestamps and steps follow the same shape as TRANSFERS.
export function buildTransferStatus(contact, amountUsd) {
  const now = new Date()
  const at = (offsetMin) =>
    new Date(now.getTime() + offsetMin * 60000).toLocaleTimeString('es-CO', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    })
  const nombre = contact?.name ?? 'tu contacto'
  const primerNombre = nombre.split(' ')[0]

  return {
    contactName: nombre,
    account: contact?.account ?? '',
    amount: Number(amountUsd) || 0,
    date: now
      .toLocaleDateString('es-CO', { day: '2-digit', month: 'short', year: 'numeric' })
      .replace('.', '')
      .toUpperCase(),
    eta: 'Llega hoy antes de las 6:00 p.m.',
    steps: [
      { label: 'Enviada', time: at(-6), description: 'Tu transferencia salió de tu cuenta.', status: 'done' },
      { label: 'Procesando', time: at(-4), description: 'Banco GALA está procesando el envío.', status: 'done' },
      {
        label: 'En camino',
        time: at(-1),
        description: `El dinero va camino a la cuenta de ${primerNombre}.`,
        status: 'current',
      },
      {
        label: 'Entregada',
        time: 'Estimado: hoy',
        description: `${nombre} recibirá el dinero en su cuenta.`,
        status: 'pending',
      },
    ],
  }
}
