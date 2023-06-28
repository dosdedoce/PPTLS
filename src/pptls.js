const pptls=(jugador1,jugador2)=>{
    if(jugador1===jugador2){
        return "Empatan";
    } else {
        const jugadas={
            Piedra: {
                Papel: "Empatan",
                Tijera: "Gana Jugador 1",
                Lagarto: "Gana Jugador 1",
                Spock: "Gana Jugador 2"
            },
            Papel: {
                Piedra: "Gana Jugador 1",
                Tijera: "Gana Jugador 2",
                Lagarto: "Gana Jugador 2",
                Spock: "Gana Jugador 1"
            },
            Tijera: {
                Piedra: "Gana Jugador 2",
                Papel: "Gana Jugador 1",
                Lagarto: "Gana Jugador 1",
                Spock: "Gana Jugador 2"
            },
            Lagarto: {
                Piedra: "Gana Jugador 2",
                Papel: "Gana Jugador 1",
                Tijera: "Gana Jugador 2",
                Spock: "Gana Jugador 1"
            }
            ,
            Spock: {
                Piedra: "Gana Jugador 1",
                Papel: "Gana Jugador 2",
                Tijera: "Gana Jugador 1",
                Lagarto: "Gana Jugador 2"
            }
        };
            return jugadas[jugador1][jugador2];
        };
    };

module.exports = { pptls }; //% Usar parar los test