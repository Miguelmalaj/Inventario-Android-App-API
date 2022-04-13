export const querys = {
    /* prueba: "SELECT * FROM [consolidado_ventas].[dbo].[usuarios] ORDER BY id_usuario DESC",
    addUsuario: `INSERT INTO [consolidado_ventas].[dbo].[usuarios] (
        nombre_usuario,
        clave,
        tipo_usuario
        ) VALUES (
          @nombre_usuario,
          @clave,
          @tipo_usuario
          );`, */
    
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

    getInventario: `SELECT * FROM [Inventario].[dbo].[Inventario]`,
    
    getInventarioAgencia: `SELECT * FROM [Inventario].[dbo].[Inventario] WHERE Empresa=@Empresa AND Sucursal=@Sucursal AND Id_usuario=@Id_usuario`
}