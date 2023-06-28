const { log } = require("console");
const { pptls } = require("../src/pptls");

const testCases = [
        ["Piedra", "Piedra", "Empatan"],
        ["Piedra", "Papel", "Gana Jugador 2"],
        ["Piedra", "Tijera", "Gana Jugador 1"],
        ["Piedra", "Lagarto", "Gana Jugador 1"],
        ["Piedra", "Spock", "Gana Jugador 2"],
        ["Papel", "Papel", "Empatan"],
        ["Papel", "Piedra", "Gana Jugador 1"],
        ["Papel", "Tijera", "Gana Jugador 2"],
        ["Papel", "Lagarto", "Gana Jugador 2"],
        ["Papel", "Spock", "Gana Jugador 1"],
        ["Tijera", "Tijera", "Empatan"],
        ["Tijera", "Piedra", "Gana Jugador 2"],
        ["Tijera", "Papel", "Gana Jugador 1"],
        ["Tijera", "Lagarto", "Gana Jugador 1"],
        ["Tijera", "Spock", "Gana Jugador 2"],
        ["Lagarto", "Lagarto", "Empatan"],
        ["Lagarto", "Piedra", "Gana Jugador 2"],
        ["Lagarto", "Papel", "Gana Jugador 1"],
        ["Lagarto", "Tijera", "Gana Jugador 2"],
        ["Lagarto", "Spock", "Gana Jugador 1"],
        ["Spock", "Spock", "Empatan"],
        ["Spock", "Piedra", "Gana Jugador 1"],
        ["Spock", "Papel", "Gana Jugador 2"],
        ["Spock", "Tijera", "Gana Jugador 1"],
        ["Spock", "Lagarto", "Gana Jugador 2"]
];

describe.skip("Pruebas dinámicas para pptls", () => {
        for (let i of testCases) {
                const [jugador1, jugador2, resultadoEsperado] = i;
                test(`Jugador 1 saca ${jugador1} y Jugador 2 saca ${jugador2}`, () => {
                        expect(pptls(jugador1, jugador2)).toBe(resultadoEsperado);
                });
        }
});
