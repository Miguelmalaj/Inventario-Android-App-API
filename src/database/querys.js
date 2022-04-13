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
          );`,
    
    addInventario: `INSERT INTO [Inventario].[dbo].[Inventario] (
      VIN,
      Id_fecha,
      Nombre_ubicacion,
      Empresa,
      Sucursal,
      Id_usuario

      ) VALUES (
        @VIN,
        @Id_fecha,
        @Nombre_ubicacion,
        @Empresa,
        @Sucursal,
        @Id_usuario

        );`,

    getInventario: `SELECT * FROM [Inventario].[dbo].[Inventario]`    
}