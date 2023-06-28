const { log } = require("console");
const { pptls } = require("../src/pptls");

const testCases = [
        "Piedra", "Piedra", "Empatan",
        "Piedra", "Papel", "Gana Jugador 2",
        //"Piedra", "Tijera", "Gana Jugador 1"
        // "Piedra", "Lagarto", "Gana Jugador 1",
        // "Piedra", "Spock", "Gana Jugador 2",
        "Papel", "Papel", "Empatan"
        // "Papel", "Piedra", "Gana Jugador 1",
        // "Papel", "Tijera", "Gana Jugador 2",
        // "Papel", "Lagarto", "Gana Jugador 2",
        // "Papel", "Spock", "Gana Jugador 1",
        // "Tijera", "Tijera", "Empatan",
        // "Tijera", "Piedra", "Gana Jugador 2",
        // "Tijera", "Papel", "Gana Jugador 1",
        // "Tijera", "Lagarto", "Gana Jugador 1",
        // "Tijera", "Spock", "Gana Jugador 2",
        // "Lagarto", "Lagarto", "Empatan",
        // "Lagarto", "Piedra", "Gana Jugador 2",
        // "Lagarto", "Papel", "Gana Jugador 1",
        // "Lagarto", "Tijera", "Gana Jugador 2",
        // "Lagarto", "Spock", "Gana Jugador 1",
        // "Spock", "Spock", "Empatan",
        // "Spock", "Piedra", "Gana Jugador 1",
        // "Spock", "Papel", "Gana Jugador 2",
        // "Spock", "Tijera", "Gana Jugador 1",
        // "Spock", "Lagarto", "Gana Jugador 2"
]

describe("Pruebas dinámicas para pptls", () => {
        let i=0;
        let salir=true;
        let jugador1, jugador2, resultadoEsperado;
        do{

                jugador1=testCases[i];
                jugador2=testCases[i+1];
                resultadoEsperado=testCases[i+2];
                console.log(jugador1);
                console.log(jugador2);
                console.log(resultadoEsperado);
                test(`Jugador 1 ${jugador1} | Jugador 2 ${jugador2} => ${resultadoEsperado}\n`, () => {
                        expect(pptls(jugador1, jugador2)).toBe(resultadoEsperado);
                });
                i+=3;
                if(i>=testCases.length-1){
                        salir=false;
                }
        }while(salir);
});
