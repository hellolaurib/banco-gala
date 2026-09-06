// Common Colombian surnames — used to turn the nickname typed in "Agregar
// cuenta" into something that reads as a real full name once the transfer
// reaches the calculator (Envío) and beyond, as if the account had just
// been verified. Not from Figma; Laura asked for this specifically.
const APELLIDOS = [
  'Gómez',
  'Rodríguez',
  'Martínez',
  'López',
  'García',
  'Pérez',
  'González',
  'Sánchez',
  'Ramírez',
  'Torres',
  'Flórez',
  'Muñoz',
  'Vargas',
  'Castro',
  'Ortiz',
  'Rojas',
  'Moreno',
  'Jiménez',
  'Álvarez',
  'Romero',
]

export function conApellidoAleatorio(nombre) {
  const apellido = APELLIDOS[Math.floor(Math.random() * APELLIDOS.length)]
  return `${nombre} ${apellido}`
}
