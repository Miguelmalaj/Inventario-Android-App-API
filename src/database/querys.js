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
    
    addInventario: `INSERT INTO [Indicadores].[dbo].[Inventario] (
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

    getInventario: `SELECT * FROM [Indicadores].[dbo].[Inventario]`,
    
    getInventarioAgencia: `SELECT * FROM [Indicadores].[dbo].[Inventario] WHERE Empresa=@Empresa AND Sucursal=@Sucursal AND Id_usuario=@Id_usuario`,

    existenRegistros: `SELECT * FROM [Indicadores].[dbo].[Inventario] WHERE Empresa=@Empresa AND Sucursal=@Sucursal AND Id_fecha=@Id_fecha`,

    updateInventario: `UPDATE [Indicadores].[dbo].[Inventario] 
    SET 
    Empresa = @Empresa, 
    Sucursal = @Sucursal, 
    Id_fecha = @Id_fecha, 
    Nombre_ubicacion = @Nombre_ubicacion
   
     WHERE 
     VIN = @VIN`,

     eliminarRegistrosHoy:`DELETE FROM [Indicadores].[dbo].[Inventario] WHERE Empresa=@Empresa AND Sucursal=@Sucursal AND Id_fecha=@Id_fecha`


     //--DELETE FROM [Indicadores].[dbo].[Inventario] WHERE Empresa=@Empresa AND Sucursal=@Sucursal AND Id_fecha=@Id_fecha;


}