export const querys = {
    prueba: "SELECT * FROM [consolidado_ventas].[dbo].[usuarios] ORDER BY id_usuario DESC",
    addUsuario: `INSERT INTO [consolidado_ventas].[dbo].[usuarios] (
        nombre_usuario,
        clave,
        tipo_usuario
        ) VALUES (
          @nombre_usuario,
          @clave,
          @tipo_usuario
          );`
}