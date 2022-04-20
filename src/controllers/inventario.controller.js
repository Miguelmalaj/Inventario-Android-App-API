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


export const existeInventario = async(req, res) => {
    // console.log(req.body);
    let mensaje = "existen";
    let estado = 1;


    try {
       const pool = await getConnection();
       let result = await pool.request()
       .input("Id_fecha",sql.Date, req.body.Id_fecha)
       .input("Empresa",sql.Int, req.body.Empresa)
       .input("Sucursal",sql.Int, req.body.Sucursal)
       .query(querys.existenRegistros);

    //    console.log(result.rowsAffected);
        if(result.rowsAffected > 0){
            // console.log("SI HAY REG");
            res.json({
                mensaje:mensaje,
                estado:estado
            });

        }else{
            // console.log("NO HAY REG");
            mensaje = "noexisten";
            estado=2;
            res.json({
                mensaje:mensaje,
                estado:estado
            });

        }
       

    } catch (error) {
        res.status(500);
        res.send(error.message);
        console.log(error.message);
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
    let mensaje = "La sincronización se ha hecho correctamente";
    let estado = 1;
    if(req.body.length === 0){
        mensaje = "No existen registros por sincronizar."
        estado = 2;
    }
    

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

        res.json({
            mensaje:mensaje,
            estado:estado
        });
        console.log({mensaje:"registro exitoso"});

    } catch (error) {
        res.status(500);
        res.send(error.message);
        console.log(error.message);

    }
}

export const eliminarInventarioAgencia = async(req, res) => {
    
    let mensaje = "Procesando sincronización...";
    let estado = 1;
    const id = req.params.id;

    //empresa
    let Empresa = id.substring(0,1);
    let Sucursal = id.substring(2,3);
    let Fecha = id.substring(4,14);
    
    /* console.log("parametros:"+id);
    console.log("Empresa: "+Empresa);
    console.log("Sucursal: "+Sucursal);
    console.log("Fecha: "+Fecha); */

    try {
         const pool = await getConnection();
        let result = await pool.request()
        .input("Id_fecha",sql.Date, Fecha)
        .input("Empresa", sql.Int, Empresa)
        .input("Sucursal", sql.Int, Sucursal)
        .query(querys.eliminarRegistrosHoy);

        // console.log("rows affected: "+ result.rowsAffected);

        res.json({
            mensaje:mensaje,
            estado:estado
        });

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