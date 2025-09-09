import React, { useState, useEffect } from "react";
import { balancearPorAtributos } from "../utils/balancearEquipos";

// Lista de nombres divertidos para equipos
const nombresEquipos = [
  "Tormenta de Facha",
  "Tortugas Ninjas",
  "Mates con Yuyito",
  "Fernet con Pepsi",
  "Antropomórfico",
  "Pelitos Planchados",
  "Lectores de Twits",
  "Gatitos Naranjas",
 
];

// Función para elegir un nombre aleatorio
function nombreAleatorio(excluir) {
  const disponibles = nombresEquipos.filter((n) => n !== excluir);
  const index = Math.floor(Math.random() * disponibles.length);
  return disponibles[index];
}

function Equipos({ jugadores, irAResultados }) {
  const [equipos, setEquipos] = useState(null);

  useEffect(() => {
    if (jugadores.length >= 2) {
      const balanceados = balancearPorAtributos(jugadores);
      const nombreA = nombreAleatorio();
      const nombreB = nombreAleatorio(nombreA);

      setEquipos({
        nombreA,
        nombreB,
        equipoA: balanceados.equipoA,
        equipoB: balanceados.equipoB,
      });
    }
  }, [jugadores]);

  if (!equipos) return <div>Cargando equipos...</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Equipos Generados</h1>

      <h2>{equipos.nombreA}</h2>
      <ul>
        {equipos.equipoA.map((j, i) => (
          <li key={i}>
            {j.nombre} (Vel: {j.velocidad}, Def: {j.defensa}, Pase: {j.pase})
          </li>
        ))}
      </ul>

      <h2>{equipos.nombreB}</h2>
      <ul>
        {equipos.equipoB.map((j, i) => (
          <li key={i}>
            {j.nombre} (Vel: {j.velocidad}, Def: {j.defensa}, Pase: {j.pase})
          </li>
        ))}
      </ul>

      <button
        onClick={() => irAResultados(equipos)}
        style={{ marginTop: "20px" }}
      >
        Ver Resultados
      </button>
    </div>
  );
}

export default Equipos;
