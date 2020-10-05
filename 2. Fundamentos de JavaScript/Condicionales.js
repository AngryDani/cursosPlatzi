// Condicionales

Dan={
    name: "Alvaro",
    edad: 25,
    game: "csgo",
    peso: 72
}

Meepo={
    name: "El niño Meepo",
    edad: 11,
    game: "dota 2"
}

const MAYORIA_EDAD = 18;

// FUNCIOÓN LAMBDA O FUNCIONES ANÓNIMAS :: 
/*
const SiEsMayorEdad = function (persona){
    return persona.edad >= MAYORIA_EDAD
}
también en vez de const puede ser var

*/

// ARROWS FUNCTION  =>

/*const SiEsMayorEdad =  (persona) => {
    return persona.edad >= MAYORIA_EDAD
}
*/

// Si la función solo tiene en su cuerpo RETURN :: 

const SiEsMayorEdad =  persona =>  persona.edad >= MAYORIA_EDAD



function mayorEdad(persona){
    if (SiEsMayorEdad(persona)){
        console.log(`${persona.name} es mayor de edad. Por ello puede ingresar`)
    } else {
        console.log(`${persona.name} no es mayor de edad, retirarlo de inmediato`)
    }
}

// mayorEdad(Dan)

// ayorEdad(Meepo)

// Estructuras repetitivas: FOR


console.log(`${Dan.name} empezó pesando: ${Dan.peso} kg`)

// funciones::

/* const AUMENTAR_PESO = (persona) => {
    persona.peso += 200; 
}
*/

// la función es equivalente a la anterior::

const PESO_VARIABLE = 0.2;

const AUMENTAR_PESO = persona => persona.peso += PESO_VARIABLE;

const BAJAR_PESO = persona => persona.peso -= PESO_VARIABLE;


for (var i = 1; i <= 365; i++) {
    var random = Math.random() // 0 - 1

    if (random < 0.25){
        // aumentar de peso::
        AUMENTAR_PESO(Dan);
    } else if (random < 0.5) {
        // bajar de peso
        BAJAR_PESO(Dan);
    }
}


console.log(`${Dan.name} terminó pesando: ${Dan.peso.toFixed(2)} kg`);