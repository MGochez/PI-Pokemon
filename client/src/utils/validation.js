export function validateTypes(types) {
    let errorsTypes = {};


    if (types.length === 0) {
        errorsTypes.types = "Debes elegir uno o dos tipos";
    } else if (types.length > 2) {
        errorsTypes.types = "Cada pokemon puede tener solo 1 o 2 tipos";
    }
    return errorsTypes;
}


export function validatePokemon(pokemon) {
    let errorsPokemon = {};

    function onlyLetters(input) {
        const regexLetters = /^[a-zA-Z\s]+$/;
        return regexLetters.test(input);
    }

    const {name , image, hp, attack, defense, spattack, spdefense, speed, height, weight } = pokemon;

    //---------------------------- name ----------------------------------------

    if (!name) {
        errorsPokemon.name = "El pokemon debe tener un nombre"
    } else if (!onlyLetters(name)) {
        errorsPokemon.name = "El nombre del pokemon debe contener solo letras"
    } else if (name.length > 20 ) {
        errorsPokemon.name = "El nombre del pokemon debe tener como máximo 20 letras"
    }

    //---------------------------- iamge ----------------------------------------

   /*  if (!image) {
        errorsPokemon.image = "La imagen debe contener un URL"
    } */

    //---------------------------- hp ----------------------------------------

    if (!hp) {
        errorsPokemon.hp = "La hp del pokemon no puede ser 0";
    } else if (isNaN(hp)) {
        errorsPokemon.hp = "La hp del pokemon debe ser un numero";
    } else if (!(hp >= 1 && hp <= 100)) {
        errorsPokemon.hp = "La vida del pokemon debe ser entre 1 y 100";
    }
   

    //---------------------------- attack ----------------------------------------
    
    if (!attack) {
        errorsPokemon.attack = "El pokemon debe tener un valor de ataque"
    } else if (isNaN(attack)) {
        errorsPokemon.attack = "El ataque de un pokemon debe ser un numero"
    } else if (!(attack >= 0 && attack <= 900)) {
        errorsPokemon.attack = "El ataque del pokemon debe ser entre 0 y 900"
    }

    
    //---------------------------- defense ----------------------------------------

    if (!defense) {
        errorsPokemon.attack = "El pokemon debe tener un valor de defensa"
    } else if (isNaN(defense)) {
        errorsPokemon.attack = "La defensa de un pokemon debe ser un numero"
    } else if (!(defense >= 0 && defense <= 900)) {
        errorsPokemon.attack = "La defensa del pokemon debe ser entre 0 y 900"
    }

    //---------------------------- spattack ----------------------------------------

    if (!spattack) {
        errorsPokemon.attack = "El pokemon debe tener un valor de ataque especial"
    } else if (isNaN(spattack)) {
        errorsPokemon.attack = "El ataque especial de un pokemon debe ser un numero"
    } else if (!(spattack >= 0 && spattack <= 900)) {
        errorsPokemon.attack = "El ataque especial del pokemon debe ser entre 0 y 900"
    }

    //---------------------------- spdefense ----------------------------------------

    if (!spdefense) {
        errorsPokemon.attack = "El pokemon debe tener un valor de defensa especial"
    } else if (isNaN(spdefense)) {
        errorsPokemon.attack = "La defensa especial de un pokemon debe ser un numero"
    } else if (!(spdefense >= 0 && spdefense <= 900)) {
        errorsPokemon.attack = "La defensa espoecial del pokemon debe ser entre 0 y 900"
    }

    //---------------------------- speed ----------------------------------------

    if (!speed) {
        errorsPokemon.attack = "El pokemon debe tener un valor de defensa especial"
    } else if (isNaN(speed)) {
        errorsPokemon.attack = "La defensa especial de un pokemon debe ser un numero"
    } else if (!(speed >= 0 && speed <= 900)) {
        errorsPokemon.attack = "La defensa espoecial del pokemon debe ser entre 0 y 900"
    }

    //---------------------------- height ----------------------------------------

    if (height) {
        if (isNaN(height)) { //verificacion que sea un numero
            errorsPokemon.height = "La altura del pokemon debe ser un numero"
        } else if (!(weight >= 0 && weight <= 900)) {
            errorsPokemon.height = "La altura de un pokemon debe ser entre 0 y 900"
        }
    }

    //---------------------------- wegith ----------------------------------------

    if (weight) {
        if (isNaN(weight)) {
            errorsPokemon.weight = "El peso del pokemon tiene que ser un numero"
        } else if (!(weight >= 0 && weight <= 900)) {
            errorsPokemon.weight = "El peso del pokemon debe ser entre 0 y 900"
        }
    }

    return errorsPokemon;
}



