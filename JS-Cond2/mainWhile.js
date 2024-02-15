//en este js he probado a hacer un bucle para comprobar que las respuestas siempre sean si o no. 

alert("Vamos a hacerte unas preguntas para averiguar por qué no arranca tu coche. Utiliza respuestas de si o no.");

let home = prompt('¿Estas cerca de tu casa?');
let walk = prompt('¿Te apetece caminar un poco?');

home = home.toLowerCase();
walk = walk.toLowerCase();

while ((home != 'si' && home != 'no') || (walk != 'si' && walk != 'no')) {
        alert('Has introducido alguna respuesta que es diferente de si o no, vuelve a intentarlo');
        home = prompt('¿Estas cerca de tu casa?');
        walk = prompt('¿Te apetece caminar un poco?');

        home = home.toLowerCase();
        walk = walk.toLowerCase();

}


if (home == 'si' && walk == 'si') {
        document.write('¡Perfecto! Mejor que vayas a casa caminando y lo vuelvas a revisar mañana.');
}

// else if ((home != 'si' && home != 'no') || (walk != 'si' && walk != 'no')) {

//         document.write('Disculpa, prueba nuevamente usando respuestas de si o no.');

// }


else {
        let gas = prompt('Que mal, ¿tienes gasolina?');
        gas = gas.toLowerCase();

        while (gas != 'si' && gas != 'no'){
                alert('Has introducido alguna respuesta que es diferente de si o no, vuelve a intentarlo');
                gas = prompt('Que mal, ¿tienes gasolina?');
                gas = gas.toLowerCase();

        }

        if (gas == 'no') {
                let money = prompt('¿Tienes dinero para gasolina?');
                money = money.toLowerCase();

                while (money != 'si' && money != 'no'){
                        alert('Has introducido alguna respuesta que es diferente de si o no, vuelve a intentarlo');
                        money = prompt('¿Tienes dinero para gasolina?');
                        money = money.toLowerCase();

                }

                if (money == 'si') {
                        document.write('¡Genial! Si le pones gasolina lo tendrás solucionado.');
                }
                else /*if (money == 'no')*/ {
                        document.write('Ooh! Me sabe mal pero tendrás que volver a casa en metro, coger dinero y ponerle gasolina mañana.');
                }
                // else {
                //         document.write('Disculpa, prueba nuevamente usando respuestas de si o no.');

                // }
        }
        else /*if (gas == 'si')*/ {
                let battery = prompt('Comprueba que tengas batería.');
                battery = battery.toLowerCase();

                while (battery != 'si' && battery != 'no'){
                        alert('Has introducido alguna respuesta que es diferente de si o no, vuelve a intentarlo');
                        battery = prompt('Comprueba que tengas batería.');
                        battery = battery.toLowerCase();
                }


                if (battery == 'si') {
                        document.write('Ooh! Deberás pasarte por el mecánico para revisarlo.');

                }
                else /*if (battery == 'no')*/ {
                        document.write('¡Estupendo, creo que puedo ayudarte. Recargando la batería podrás arrancar tu coche.');
                }
                // else {
                //         document.write('Disculpa, prueba nuevamente usando respuestas de si o no.');

                // }

        }
        // else {
        //         document.write('Disculpa, prueba nuevamente usando respuestas de si o no.');
        // }

}
