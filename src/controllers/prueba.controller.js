import { getConnection, querys, sql } from "../database";

export const getUsuarios = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querys.prueba);
        res.json({usuarios:result.recordset});
      } catch (error) {
        res.status(500);
        res.send(error.message);
      }

}

export const createUsuarios = async (req, res) => {
    //la validacion para saber si ya existe ese usuario se hará dessde aqui
  
    const { nombre_usuario, clave, empresa, sucursal, tipo_usuario, responsable } = req.body;
  
    try {
      const pool = await getConnection();
  
      await pool
        .request()
        .input("nombre_usuario", sql.VarChar, nombre_usuario)
        .input("clave", sql.VarChar, clave)
        // .input("empresa", sql.Int, empresa)
        // .input("sucursal", sql.Int, sucursal)
        .input("tipo_usuario", sql.Int, tipo_usuario)
        // .input("responsable", sql.Int, responsable)
        .query(querys.addUsuario);
  
      res.json({
        nombre_usuario,
        clave
      })
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  }