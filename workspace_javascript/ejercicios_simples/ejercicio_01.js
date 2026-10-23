let alumnos = [
    {nombre: "Juan", nota: 5},
    {nombre: "Jose", nota: 7},
    {nombre: "Ana", nota: 2}
]

alumnos.push({nombre: "fermin", nota: 1})

console.log(alumnos[2].nota)

console.log(alumnos.length)

function calculoAprobados(alumnos) {
    let contador = 0
    array.forEach(alumnos => {
        if(alumnos.nota >= 5) {
            contador ++
        };
    });
    return contador
}

console.log(calculoAprobados(alumnos))