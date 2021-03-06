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




// funciones::

/* const AUMENTAR_PESO = (persona) => {
    persona.peso += 200; 
}
*/

// la función es equivalente a la anterior::

const PESO_VARIABLE = 0.2;

const AUMENTAR_PESO = persona => persona.peso += PESO_VARIABLE;

const BAJAR_PESO = persona => persona.peso -= PESO_VARIABLE;

function pesoRandom(){
    console.log(`${Dan.name} empezó pesando: ${Dan.peso} kg`);

    for (var i = 1; i <= 365; i++){
        var random = Math.random() // entre 0 - 1

        if (random < 0.25){
            AUMENTAR_PESO(Dan);
        } else if (random < 0.5){
            BAJAR_PESO(Dan);
        }
    }
    console.log(`${Dan.name} terminó pesando: ${Dan.peso.toFixed(2)} kg`);
}

// pesoRandom();


// CICLOS WHILE:: 

const META_PESO = Dan.peso + 4;

const GYM = () => Math.random() < 0.31;
const EATING= () => Math.random() < 0.15;
const NO_EATING= () => Math.random() < 0.05;

var dias= 0;

console.log(`${Dan.name} empezó pesando: ${Dan.peso} kg`);
while (Dan.peso < META_PESO){
    if (GYM()){
        AUMENTAR_PESO(Dan);
    }
    if (EATING()){
        AUMENTAR_PESO(Dan);
    }
    if (NO_EATING()){
        BAJAR_PESO(Dan);
    }
    dias += 1;
}
console.log(`${Dan.name} terminó pesando: ${Dan.peso.toFixed(2)} kg\nEn ${dias} días!`);


// CICLO DO-WHILE

var contador=0;

const llueve = () => Math.random() < 0.25;

do{
    contador++;
} while(!llueve())
if (contador > 1){
    console.log(`Fui a ver si llovía ${contador} veces!`);
} else{
    console.log(`Fui a ver si llovía ${contador} vez!`);
}

/*
OTRA FORMA
console.log(`fui a ver si llovia ${contador} ${contador > 1 ? 'veses' : 'vez'} `);

*/

// CONDICIONAL: SWITCH

var name_autoriced = prompt('Cuál es tu nombre? :');

switch (name_autoriced){
    case 'angrydani':
        console.log("Nick autorizado, puede jugar!")
        break
    case 'oggy2000':
        console.log("Nick autorizado, puede jugar!")
        break
    case 'angrydan':
        console.log("Nick autorizado, puede jugar!")
        break
    default:
        console.log("Nick NO autorizado, NO puede jugar!!!")
}






