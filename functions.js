const superheroes = [
    {
        name: 'IronMan',
        date: '03/01/1963'
    },
    {
        name: 'SpiderMan',
        date: '03/07/1961'
    },
    {
        name: 'Captain America',
        date: '03/08/1941'
    },
    {
        name: 'Doctor Strange',
        date: '07/20/1963'
    },
    {
        name: 'Shang-Chi',
        date: '12/05/1973'
    }
]

function getSortedSuperheroes(superheroes) {
    // your code goes here
    return superheroes.sort ((a,b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b. date);
        return dateA - dateB 
    });
}
// la funcion getSorted... toma el arreglo superheroes y los ordena gracias al metodo sort
// se crean 2 objetos de tipo Date para poder compararlos entre sí

 const sortedSuperHeroes = getSortedSuperheroes(superheroes);
 console.log (sortedSuperHeroes);

// el resultado queda guardado en la variable sortedSuperHeroes
// es mala practica utilizar nombres similares a la hora de asignar variables?





function specialLogs(interval) {
    // your code goes here
    let count = 1;
    const timer = setInterval(() => {
        console.log(count);
        count ++;
    
        if (count > 10) {
            clearInterval (timer);
        }
    }, interval);
}

specialLogs (2000);

// Setlogs ejecuta de forma repetida un intervalo de tiempo determinado
// este ultimo se va incrementado con count++
// con el if lo que generamos es lograr el control para que sea menor que 10 el conteo
