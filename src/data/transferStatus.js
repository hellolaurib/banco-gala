// Sample data for the "Estado de la transferencia" screen (Home's "Ver el
// estado" button) — not part of the original Figma file, built to match its
// visual language (same recent transfer shown on Home: Camila Ríos, $2.000).
export const TRACKED_TRANSFER = {
  contactName: 'Camila Ríos',
  account: '321 123 *** ***',
  amount: 2000,
  date: '05 SEPT 2026',
  eta: 'Llega hoy antes de las 6:00 p.m.',
  steps: [
    {
      label: 'Enviada',
      time: '10:32 a.m.',
      description: 'Tu transferencia salió de tu cuenta.',
      status: 'done',
    },
    {
      label: 'Procesando',
      time: '10:33 a.m.',
      description: 'Banco GALA está procesando el envío.',
      status: 'done',
    },
    {
      label: 'En camino',
      time: '10:35 a.m.',
      description: 'El dinero va camino a la cuenta de Camila.',
      status: 'current',
    },
    {
      label: 'Entregada',
      time: 'Estimado: hoy',
      description: 'Camila recibirá el dinero en su cuenta.',
      status: 'pending',
    },
  ],
}
