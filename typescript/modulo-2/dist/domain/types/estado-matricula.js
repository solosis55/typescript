/**
 * Genera un texto descriptivo según el estado de la matrícula (Módulo 3 lo refinará).
 */
export function generarReporte(estado) {
    switch (estado.tipo) {
        case 'ACTIVA': {
            const n = estado.asignaturas.length;
            const nombres = estado.asignaturas.map((a) => a.nombre).join(', ');
            return `Matrícula ACTIVA: ${n} asignatura(s)${nombres ? ` (${nombres})` : ''}.`;
        }
        case 'SUSPENDIDA':
            return `Matrícula SUSPENDIDA. Motivo: ${estado.motivo}`;
        case 'FINALIZADA':
            return `Matrícula FINALIZADA. Nota media: ${estado.notaMedia}.`;
        default: {
            const exhaustivo = estado;
            return exhaustivo;
        }
    }
}
//# sourceMappingURL=estado-matricula.js.map