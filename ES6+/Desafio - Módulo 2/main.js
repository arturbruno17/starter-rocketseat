// 1.1
import ClassesUsuarios from './functions'
ClassesUsuarios.info()


// 1.2
import { idade } from './functions'
console.log(idade)

// 1.3
import Usuario, { idade as idadeUsuario } from './functions'
Usuario.info()
console.log(idadeUsuario)