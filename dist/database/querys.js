"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.querys = void 0;
var querys = {
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
  addInventario: "INSERT INTO [Inventario].[dbo].[Inventario] (\n      VIN,\n      Id_fecha,\n      Nombre_ubicacion,\n      Empresa,\n      Sucursal,\n      Id_usuario\n\n      ) VALUES (\n        @VIN,\n        @Id_fecha,\n        @Nombre_ubicacion,\n        @Empresa,\n        @Sucursal,\n        @Id_usuario\n\n        );",
  getInventario: "SELECT * FROM [Inventario].[dbo].[Inventario]",
  getInventarioAgencia: "SELECT * FROM [Inventario].[dbo].[Inventario] WHERE Empresa=@Empresa AND Sucursal=@Sucursal AND Id_usuario=@Id_usuario"
};
exports.querys = querys;