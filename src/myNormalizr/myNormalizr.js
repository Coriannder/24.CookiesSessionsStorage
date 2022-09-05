import { denormalize, normalize, schema } from 'normalizr'




//Definimos esquema author
const authorSchema = new schema.Entity('author', {} , { idAttribute: 'email' });

//Definimos esquema mesagges
const mesaggeSchema = new schema.Entity('message' , { author: authorSchema} , { idAttribute: 'id' })

//Definimos esquema chat
const chatSchema = new schema.Entity('chat',{ mensajes: [mesaggeSchema] }, { idAttribute: 'id' })

//Funcion que normaliza el array de mensajes
export const normalizador = (arrayMensajes) => {
  return normalize({ id: 'mensajes', chat: arrayMensajes }, chatSchema)
}

//Funcion que normaliza el objeto de mensajes
export const desnormalizador = (mensajesNormalizados) => {
  return denormalize( mensajesNormalizados.result , chatSchema , mensajesNormalizados.entities )
}





































/* export const longitudes =[
    `longitud desnormalizado: ${JSON.stringify(denormalizedChat).length }`,
    `longitud normalizado: ${JSON.stringify(normalizedChat).length}`
] */































/* const objeto = {
    id: 'chatUno',
    mesagges: [
      {
        id: '211.112.139.155',
        author: {
            id: 'Maricarmen_Durn@yahoo.com',
            nombre: 'Maricarmen',
            apellido: 'Durán',
            edad: 31,
            alias: 'Maricarmen6'
        },
        text: 'rerum natus modi voluptatem quo iusto sit consequatur maiores earum iste et tempora quod odit'
      },
      {
        id: '65.63.235.112',
        author: {
            id: 'Gabriel.Garza@gmail.com',
            nombre: 'Gabriel',
            apellido: 'Garza',
            edad: 47,
            lias: 'Gabriel_Garza'
        },
        text: 'eveniet sit et excepturi numquam sed magnam aut tempora non vero dolorum sit velit quia'
      }
    ]
  } */
