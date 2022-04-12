import sql from 'mssql'
import config from "../config"

const dbSettings = {
    user: config.dbUser,
    password: config.dbPassword,
    server: config.dbServer, //se encuentra en instance name
    database: config.dbDatabase,
    //port: '#puerto' //se puede asignar el puerto, por defecto ya contiene uno

    options: {
        encrypt: false, // for azure
        trustServerCertificate: true, // change to true for local dev / self-signed certs
    },

};

export const getConnection = async () => {
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.log(error);
    }
};

export { sql };