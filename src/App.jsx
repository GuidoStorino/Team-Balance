import React, { useState } from "react";
import Inicio from "./pages/Inicio";
import Jugadores from "./pages/Jugadores";
import Equipos from "./pages/Equipos";
import Resultados from "./pages/Resultados";

function App() {
  const [pantalla, setPantalla] = useState("inicio");
  const [jugadores, setJugadores] = useState([]);
  const [equipos, setEquipos] = useState(null);

  return (
    <div>
      {pantalla === "inicio" && (
        <Inicio irAJugadores={() => setPantalla("jugadores")} />
      )}
      {pantalla === "jugadores" && (
        <Jugadores
          jugadores={jugadores}
          setJugadores={setJugadores}
          irAEquipos={() => setPantalla("equipos")}
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
        <Resultados equipos={equipos} irAInicio={() => {
          setJugadores([]);
          setEquipos(null);
          setPantalla("inicio");
        }} />
      )}
    </div>
  );
}

export default App;
