alert ("Vamos a comprobar si puedes optar por la Beca de Ironhack");

let edad = parseInt(prompt("¿Cuantos años tienes?"));
let ciudad = prompt("¿En que ciudad Resides?");

ciudad = ciudad.toLowerCase();


if (edad >= 18 && ciudad == 'barcelona'){

    document.write('¡Enhorabuena! La beca es tuya. Te llamaremos para comenzar en breves.');

}

else if (edad >= 30){
    let familia = prompt('¿Eres familia numeros? Responde si o no.');
    familia = familia.toLocaleLowerCase();
    if (familia == 'si'){
        document.write('¡Enhorabuena! La beca es tuya. Te llamaremos para comenzar en breves.');
    }
    else{
        document.write('Lo siento! Cuando tengas 3 o más hijos vuelve a intentarlo.');
    }
}

else if (edad >= 12 && edad < 18){
    let genio = prompt('Por cierto, ¿eres un génio de la Programación? Responde si o no.');
    genio = genio.toLowerCase();

    if (genio == 'si'){
        document.write('¡Enhorabuena! La beca es tuya gracias a tu intelecto. Aprovechala mucho.');
    }

    else {

        document.write('Lo siento! Pero no puedes conseguir esta beca. Si sigues interesado podemos ayudarte a financiarlo.');

    }

}
else {

    document.write('Lo siento! Pero no puedes conseguir esta beca. Si sigues interesado podemos ayudarte a financiarlo.');

}



