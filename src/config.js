import {config } from 'dotenv'
config()

export default {
    port: 4001,
    dbUser: "miguel",//"userroot",
    dbPassword: "sistemas",//"1234567890",
    dbServer: "10.10.10.253", //ip donde está el servicio rest
    // dbServer: "10.10.10.52", //ip donde está el servicio rest
    dbDatabase: "Indicadores"//"Inventario" //nombre de la base de datos
}