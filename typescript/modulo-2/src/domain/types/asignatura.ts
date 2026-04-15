/**
 * Entidad de dominio: unidad curricular ofertada por un departamento.
 * El identificador es inmutable (readonly); el código de asignatura suele ser estable en catálogo.
 */
export interface Asignatura {
    readonly id: string;
    /** Código alfanumérico oficial (ej. "GII2040") */
    codigo: string;
    nombre: string;
    /** Créditos ECTS (entero no negativo en el modelo europeo) */
    creditos: number;
    nombreDepartamento: string;
    /** Curso académico en que se imparte, ej. "2025-2026" */
    cursoAcademico: string;
}
