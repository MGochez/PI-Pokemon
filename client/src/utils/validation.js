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
        const regexLetters = /^[A-Za-z]+$/;
        return regexLetters.test(input);
    }

    function onlyURL (input) {
        const regexURL =  /^(http(s):\/\/.)[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)$/
         return regexURL.test(input)
    }

    const {name , image ,hp, attack, defense, spattack, spdefense, speed, height, weight } = pokemon;

    //---------------------------- name ----------------------------------------
    
    if (!name) {
        errorsPokemon.name = "El pokemon debe tener un nombre"
    } else if (!onlyLetters(name)) {
        errorsPokemon.name = "El nombre del pokemon debe contener solo letras"
    } else if (name.length > 20 ) {
        errorsPokemon.name = "El nombre del pokemon debe tener como máximo 20 letras"
    }

    //---------------------------- URL -------------------------------------------

    if (!image) {
        //
    } else if (!onlyURL(image)) {
        errorsPokemon.image = "Introduce una URL válida"
    }

    //---------------------------- hp --------------------------------------------

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
    } else if (!(attack >= 0 && attack <= 255)) {
        errorsPokemon.attack = "El ataque del pokemon debe ser entre 0 y 255"
    }

    
    //---------------------------- defense ----------------------------------------

    if (!defense) {
        errorsPokemon.defense = "El pokemon debe tener un valor de defensa"
    } else if (isNaN(defense)) {
        errorsPokemon.defense = "La defensa de un pokemon debe ser un numero"
    } else if (!(defense >= 0 && defense <= 255)) {
        errorsPokemon.defense = "La defensa del pokemon debe ser entre 0 y 255"
    }

    //---------------------------- spattack ----------------------------------------

    if (!spattack) {
        errorsPokemon.spattack = "El pokemon debe tener un valor de ataque especial"
    } else if (isNaN(spattack)) {
        errorsPokemon.spattack = "El ataque especial de un pokemon debe ser un numero"
    } else if (!(spattack >= 0 && spattack <= 255)) {
        errorsPokemon.spattack = "El ataque especial del pokemon debe ser entre 0 y 255"
    }

    //---------------------------- spdefense ----------------------------------------

    if (!spdefense) {
        errorsPokemon.spdefense = "El pokemon debe tener un valor de defensa especial"
    } else if (isNaN(spdefense)) {
        errorsPokemon.spdefense = "La defensa especial de un pokemon debe ser un numero"
    } else if (!(spdefense >= 0 && spdefense <= 255)) {
        errorsPokemon.spdefense = "La defensa espoecial del pokemon debe ser entre 0 y 255"
    }

    //---------------------------- speed ----------------------------------------

    if (!speed) {
        errorsPokemon.speed = "El pokemon debe tener un valor de defensa especial"
    } else if (isNaN(speed)) {
        errorsPokemon.speed = "La defensa especial de un pokemon debe ser un numero"
    } else if (!(speed >= 0 && speed <= 255)) {
        errorsPokemon.speed = "La defensa espoecial del pokemon debe ser entre 0 y 255"
    }

    //---------------------------- height ----------------------------------------

    if (height) {
        if (isNaN(height)) { //verificacion que sea un numero
            errorsPokemon.height = "La altura del pokemon debe ser un numero"
        } else if (!(weight >= 0 && weight <= 999)) {
            errorsPokemon.height = "La altura de un pokemon debe ser entre 0 y 999"
        }
    }

    //---------------------------- wegith ----------------------------------------

    if (weight) {
        if (isNaN(weight)) {
            errorsPokemon.weight = "El peso del pokemon tiene que ser un numero"
        } else if (!(weight >= 0 && weight <= 999)) {
            errorsPokemon.weight = "El peso del pokemon debe ser entre 0 y 999"
        }
    }

    return errorsPokemon;
}



