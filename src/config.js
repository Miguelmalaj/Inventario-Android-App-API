import {config } from 'dotenv'
config()

export default {
    port: 3000,
    dbUser: "userroot",
    dbPassword: "1234567890",
    dbServer: "10.10.10.52", //ip donde está el servicio rest
    // dbServer: "localhost", //ip localhost para emulador
    dbDatabase: "Inventario" //nombre de la base de datos
}