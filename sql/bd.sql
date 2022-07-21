CREATE SCHEMA dmc23;
SET search_path TO myschema, dmc23;

--Catalogo Tipo Perfil
CREATE TABLE museemin23001 (
  id serial PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  activo BOOLEAN NOT NULL DEFAULT TRUE,
  "usuarioRegistroID" INT NOT NULL,
  "fechaRegistro" TIMESTAMP NOT NULL DEFAULT NOW(),
  "usuarioModificacionID" INT,
  "fechaModificacion" TIMESTAMP
);