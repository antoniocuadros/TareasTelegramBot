const lib = require('../functions/tareas')

test('Debemos poder obtener tareas IV', () =>{
    expect(typeof lib.getAsignaturas("IV")).toBe('string')
    expect(lib.getAsignaturas("IV")).not.toBeNull()
});

test('Debemos poder obtener tareas de todas las asignaturas definidas', () =>{
    expect(typeof lib.getAsignaturas()).toBe('string')
    expect(lib.getAsignaturas()).not.toBeNull()
});