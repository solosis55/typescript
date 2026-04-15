/**
 * Entidad de dominio: persona matriculada en la universidad.
 * El identificador es inmutable tras la creación del registro (readonly).
 */
export interface Estudiante {
    readonly id: string;
    nombre: string;
    apellidos: string;
    /** Correo institucional único por estudiante */
    email: string;
    /** Fecha de alta o matrícula en formato ISO 8601 (solo fecha: YYYY-MM-DD) */
    fechaMatricula: string;
}
