//  variables para la creacion de usuario/paciente
let nombrePaciente = ''
let edadPaciente = ''
let diagnostico = ''
let ciudad = ''

// funcion para pedir datos y crear el objeto(?) o array(?)
function Paciente(nombrePaciente, edadPaciente, diagnostico, ciudad) {
    this.nombrePaciente = nombrePaciente
    this.edadPaciente = edadPaciente
    this.diagnostico = diagnostico
    this.ciudad = ciudad
}

// constructor de usuario paciente
let nuevoPaciente = new Paciente(prompt("Nombre del niño"), Number(prompt("edad")), prompt("diagnostico"), prompt("Ciudad de residencia"))
console.log(nuevoPaciente)

// alert('Hemos cargado correcatamente los datos de ', nombrePaciente, 'de ', edadPaciente, 'años', 'con diagnostico de:', diagnostico)

// alert('Hemos cargado correcatamente los datos de ', Paciente[0], 'de ', Paciente[1], 'años', 'con diagnostico de:', Paciente[2]) 

// alert('Hemos cargado correcatamente los datos de ', nuevoPaciente[0], 'de ', nuevoPaciente[1], 'años', 'con diagnostico de:', nuevoPaciente[2]) 

// alert('Hemos cargado correcatamente los datos de ', nuevoPaciente.nombrePaciente, 'de ', nuevoPaciente.edadPaciente, 'años', 'con diagnostico de:', nuevoPaciente.diagnostico) 

// alert('Hemos cargado correcatamente los datos de ', Paciente.nombrePaciente, 'de ', Paciente.edadPaciente, 'años', 'con diagnostico de:', Paciente.diagnostico) 

// alert('Hemos cargado correcatamente los datos de ', nuevoPaciente.nombrePaciente, 'de ', nuuevoPaciente.edadPaciente, 'años', 'con diagnostico de:', nuevoPaciente.diagnostico) 
console.log(nuevoPaciente.nombrePaciente)
console.log(nuevoPaciente.edadPaciente)
console.log(nuevoPaciente.diagnostico)

console.log('Hemos cargado correcatamente los datos de ', nuevoPaciente.nombrePaciente, 'de ', nuevoPaciente.edadPaciente, 'años', 'con diagnostico de:', nuevoPaciente.diagnostico) 
alert('Hemos cargado correcatamente los datos de ', nuevoPaciente.nombrePaciente, 'de ', nuevoPaciente.edadPaciente, 'años', 'con diagnostico de:', nuevoPaciente.diagnostico) 
alert('Hemos cargado correcatamente los datos de ', nombrePaciente, 'de ', edadPaciente, 'años', 'con diagnostico de:', Paciente.diagnostico) 
// ! deje comentado todo lo que fui realizando, recién cuando hice el console.log de cata variable, depues lo mostro correnctamente el mensaje en consola, pero nunca me aperió en los alert.



// variables para la creación de contacto
const nombreContacto = ''
const mailContacto = ''
const celularContacto = ''
const fechaEntrevista = ''
const horaEntrevista = ''

// Función para datos de contacto
function Contactar(nombreContacto, mailContacto, celularContacto, fechaEntrevista, horaEntrevista) {
    this.nombreContacto = nombreContacto
    this.mailContacto = mailContacto
    this.celularContacto = celularContacto
    this.fechaEntrevista = fechaEntrevista
    this.horaEntrevista = horaEntrevista
}

const nuevoContacto = new Contactar(prompt('Ingrese su nombre'), prompt('Ingrese su mail'), Number(prompt('ingrese su numero de celular')), Date(prompt('ingrese la fecha disponible para la entrevista')), Date(prompt('Ingrese la hora para contactarnos')))

console.log(nuevoContacto.nombreContacto)
console.log(nuevoContacto.mailContacto)
console.log(nuevoContacto.celularContacto)
console.log(nuevoContacto.fechaEntrevista)
console.log(nuevoContacto.horaEntrevista)

console.log('Gracias ', nuevoContacto.nombreContacto, ' Se reservo un cita telefónica para el día', nuevoContacto.fechaEntrevista, nuevoContacto.horaEntrevista, 'Nos comunicaremos al teléfono',  nuevoContacto.celularContacto,)
alert('Gracias ', nuevoContacto.nombreContacto, ' Se reservo un cita telefónica para el día', nuevoContacto.fechaEntrevista, nuevoContacto.horaEntrevista, 'Nos comunicaremos al teléfono',  nuevoContacto.celularContacto,)
console.log('Le enviamos en recordatorio a ',nuevoContacto.mailContacto )
alert('Le enviamos en recordatorio a ',nuevoContacto.mailContacto )