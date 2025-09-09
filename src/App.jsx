import React, { useState } from "react";
import Inicio from "./pages/Inicio";
import Jugadores from "./pages/Jugadores";
import Equipos from "./pages/Equipos";
import Resultados from "./pages/Resultados";
import { useJugadores } from "./hooks/useJugadores";

function App() {
  const [pantalla, setPantalla] = useState("inicio");
  const [equipos, setEquipos] = useState(null);

  // Hook que maneja jugadores guardados en Preferences
  const { jugadores, agregarJugador, setJugadores } = useJugadores();
  const [jugadoresSeleccionados, setJugadoresSeleccionados] = useState([]);


const volverInicio = () => {
  setJugadoresSeleccionados([]);   // limpia jugadores seleccionados
  setEquipos(null);                // limpia los equipos generados
  setPantalla("inicio");           // vuelve a la pantalla inicial
};


  return (
    <div>
      {pantalla === "inicio" && (
        <Inicio irAJugadores={() => setPantalla("jugadores")} />
      )}

      {pantalla === "jugadores" && (
  <Jugadores
    irAEquipos={(jugadoresSeleccionados) => {
      setJugadoresSeleccionados(jugadoresSeleccionados);
      setPantalla("equipos");
    }}
  />
)}


      {pantalla === "seleccion" && (
        <SeleccionJugadores
          jugadores={jugadores}
          setJugadoresSeleccionados={setJugadoresSeleccionados}
          irAJugadores={() => setPantalla("jugadores")}
        />
      )}

      {pantalla === "equipos" && (
        <Equipos
          jugadores={jugadoresSeleccionados}
          irAResultados={(equiposGen) => {
            setEquipos(equiposGen);
            setPantalla("resultados");
          }}
        />
      )}

      {pantalla === "resultados" && (
        <Resultados equipos={equipos} irAInicio={volverInicio} />
      )}
    </div>
  );
}

export default App;
