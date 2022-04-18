import { getConnection, querys, sql } from "../database";

export const getInventario = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querys.getInventario);
        res.json({inventario:result.recordset});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const crearInventarioAgencia = async(req, res) => {
    //destructuring
    // const { Empresa, Sucursal, Id_usuario } = req.body;
    // console.log(req.body);

    /* for(const registro of req.body){
        console.log(registro.Nombre_ubicacion);

    } */
    // res.json({mensaje:"done"});

    try {
        const pool = await getConnection();
        // const result = await pool.request()
        for(const registro of req.body){
            await pool.request()
            .input("VIN", sql.VarChar, registro.VIN)
            .input("Id_fecha",sql.Date, registro.Id_fecha)
            .input("Nombre_ubicacion", sql.VarChar, registro.Nombre_ubicacion)
            .input("Empresa", sql.Int, registro.Empresa)
            .input("Sucursal", sql.Int, registro.Sucursal)
            .input("Id_usuario", sql.Int, registro.Id_usuario)
            
            .query(querys.addInventario);

        }

        res.json({mensaje:"La sincronización se ha hecho correctamente"});
        console.log({mensaje:"registro exitoso"});

    } catch (error) {
        res.status(500);
        res.send(error.message);
        console.log(error.message);

    }
}

export const createInventario = async(req,res) => {
    //destructuring variables en body
    /* 
    VIN - varchar
    Id_fecha - date
    Nombre_ubicacion - varchar
    Empresa - int
    Sucursal - int
    Id_usuario - int
    */

    const { VIN, Id_fecha, Nombre_ubicacion, Empresa, Sucursal, Id_usuario } = req.body;

    try {
        const pool = await getConnection();

        await pool
        .request()
        .input("VIN", sql.VarChar, VIN)
        .input("Id_fecha", sql.Date, Id_fecha)
        .input("Nombre_ubicacion", sql.VarChar, Nombre_ubicacion)
        .input("Empresa", sql.Int, Empresa)
        .input("Sucursal", sql.Int, Sucursal)
        .input("Id_usuario", sql.Int, Id_usuario)
        
        .query(querys.addInventario);


        //RESPUESTA DE RETORNO
        res.json({
            inventario:{
                VIN
          }
          })
        
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }

}

//TODO
//2.- QUERYS
//1.- CAMPOS DE TABLA PARA REALIZAR EL REGISTRO 