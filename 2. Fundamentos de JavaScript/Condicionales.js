// Condicionales

Dan={
    name: "Alvaro",
    edad: 25,
    game: "csgo"
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

mayorEdad(Dan)

mayorEdad(Meepo)