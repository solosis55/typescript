# Arquitectura del módulo 2

## Objetivo

Este módulo simula un cliente de API para practicar TypeScript con tipado fuerte, asincronía y genéricos.

El archivo principal es `src/services/api-client.ts`.

## Modelo de respuesta

Se usa `RespuestaAPI<T>` para representar dos casos:

- Éxito: devuelve datos tipados (`T`).
- Error: devuelve un mensaje.

Esto evita respuestas ambiguas y hace más claro el manejo de errores.

## Por qué se usa `type` en `RespuestaAPI<T>`

`RespuestaAPI<T>` está modelado como una unión (éxito o error).  
Para este caso, `type` resulta simple y directo.

## Dónde usar `interface`

`interface` se puede usar para entidades del dominio, por ejemplo:

- `Estudiante`
- `Curso`

Es útil cuando quieres describir la forma de objetos de negocio.

## Uso de genéricos

El método `obtenerRecurso<T>(endpoint: string)` permite reutilizar la misma lógica para distintos tipos de datos.

Ejemplo:

- `obtenerRecurso<Estudiante>('/estudiantes/1')`

Así, el tipo de `datos` queda definido desde la llamada.

## Flujo del método `obtenerRecurso`

1. Limpia y valida el `endpoint`.
2. Simula latencia con `setTimeout` y `Promise`.
3. Busca el recurso en datos mock.
4. Devuelve éxito o error con el formato `RespuestaAPI<T>`.

## Ventajas y límite actual

### Ventajas

- Código claro y fácil de mantener.
- Tipado fuerte en toda la respuesta.
- Método reutilizable para varios recursos.

### Límite actual

Se trabaja con datos simulados (`mock`), no con una API real.

## Conclusión

La arquitectura prioriza simplicidad y tipado seguro.  
El uso de genéricos y una respuesta estandarizada facilita escalar el código sin duplicar lógica.
