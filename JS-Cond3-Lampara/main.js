let problem = prompt('¿Tienes problemas con la lámpara?¿Está enchufada?')

if (problem == 'si'){
    let problem = prompt('Probemos si tu foco está quemado');

    if (problem == 'si'){
        document.write('Deberías cambiar esta bombilla');
    }
    else if (problem != 'no'){
        document.write('No te he entendido bien, ¿puedes volver a comenzar?');
    }
    else {
        document.write('Siento no poder ayudarte. Creo que deberías cambiar de lámpara.');
    }
}

else if (problem != 'no'){
    document.write('No te he entendido bien, ¿puedes volver a comenzar?');
}

else {
    document.write('Deberias probar a enchufarla');
}

alert('Hola! Me comentan que tienes problemas con tu lámpara. Te haré algunas preguntas para poder ayudarte.')

let problem = prompt('¿Tienes problemas con la lámpara?¿Está enchufada?')
problem = problem.toLowerCase;

let problem2 = prompt('Revisa si tu foco está quemado');
problem2 = problem2.toLowerCase;

if (problem == 'si' && problem2 != 'si'){
    document.write('Siento no poder ayudarte. Creo que deberías cambiar de lámpara.');
}
else if (problem == 'no' && problem2 != 'si'){
    document.write('Deberias probar a enchufarla');
}
