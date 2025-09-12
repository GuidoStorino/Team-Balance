import React, { useState } from "react";
import Inicio from "./pages/Inicio";
import Jugadores from "./pages/Jugadores";
import Equipos from "./pages/Equipos";
import Resultados from "./pages/Resultados";
import ListaJugadores from "./pages/ListaJugadores";

function App() {
  const [pantalla, setPantalla] = useState("inicio");
  const [jugadores, setJugadores] = useState([]); // jugadores del partido actual
  const [equipos, setEquipos] = useState(null);

  // Función para agregar jugadores al partido
  const agregarJugadorAlPartido = (nuevosJugadores) => {
    const jugadoresArray = Array.isArray(nuevosJugadores)
      ? nuevosJugadores
      : [nuevosJugadores];

    setJugadores((prev) => [...prev, ...jugadoresArray]);
  };

  return (
    <div>
      {pantalla === "inicio" && (
        <Inicio
          irAJugadores={() => setPantalla("jugadores")}
          irAListaJugadores={() => setPantalla("listaJugadores")}
        />
      )}

      {pantalla === "jugadores" && (
        <Jugadores
          jugadores={jugadores}
          setJugadores={setJugadores}
          irAEquipos={(jugadoresSeleccionados) => {
            setJugadores(jugadoresSeleccionados || jugadores);
            setPantalla("equipos");
          }}
          irAListaJugadores={() => setPantalla("listaJugadores")}
          agregarJugadorAlPartido={agregarJugadorAlPartido}
        />
      )}

      {pantalla === "equipos" && (
        <Equipos
          jugadores={jugadores}
          irAResultados={(equiposGen) => {
            setEquipos(equiposGen);
            setPantalla("resultados");
          }}
        />
      )}

      {pantalla === "resultados" && (
        <Resultados
          equipos={equipos}
          irAInicio={() => {
            setJugadores([]);
            setEquipos(null);
            setPantalla("inicio");
          }}
        />
      )}

      {pantalla === "listaJugadores" && (
        <ListaJugadores
          irAInicio={() => setPantalla("inicio")}
          agregarAlPartido={agregarJugadorAlPartido}
        />
      )}
    </div>
  );
}

export default App;
