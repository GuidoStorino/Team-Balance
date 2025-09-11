import React, { useState } from "react";
import Inicio from "./pages/Inicio";
import Jugadores from "./pages/Jugadores";
import ListaJugadores from "./pages/ListaJugadores";
import Equipos from "./pages/Equipos";
import Resultados from "./pages/Resultados";

function App() {
  const [pantalla, setPantalla] = useState("inicio");
  const [jugadores, setJugadores] = useState([]); // jugadores del partido actual
  const [equipos, setEquipos] = useState(null);

  // Función para agregar jugadores seleccionados de la lista guardada al partido
  const agregarAlPartido = (seleccionados) => {
    setJugadores(prev => [...prev, ...seleccionados]);
    setPantalla("jugadores"); // vuelve automáticamente a la pantalla de creación de partido
  };

  // Resetear partido
  const volverInicio = () => {
    setJugadores([]);
    setEquipos(null);
    setPantalla("inicio");
  };

  return (
    <div>
      {pantalla === "inicio" && (
        <Inicio
          irAJugadores={() => setPantalla("jugadores")}
          irAListaJugadores={() => setPantalla("jugadoresGuardados")}
        />
      )}

      {pantalla === "jugadores" && (
        <Jugadores
          jugadores={jugadores}
          setJugadores={setJugadores}
          irAEquipos={(jugadoresSeleccionados) => setPantalla("equipos")}
          irAListaJugadores={() => setPantalla("jugadoresGuardados")}
        />
      )}

      {pantalla === "jugadoresGuardados" && (
        <ListaJugadores
          irAInicio={volverInicio}
          agregarAlPartido={agregarAlPartido}
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
          irAInicio={volverInicio}
        />
      )}
    </div>
  );
}

export default App;
