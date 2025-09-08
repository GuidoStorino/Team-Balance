import React, { useState } from "react";
import { balancearPorAtributos } from "../utils/balancearEquipos";

function Equipos({ jugadores, irAResultados }) {
  const [equipos, setEquipos] = useState(null);

  const generarEquipos = () => {
    const resultado = balancearPorAtributos(jugadores);
setEquipos(resultado);
  };

  return (
    <div style={styles.container}>
      <h1>Armar equipos</h1>
      <button onClick={generarEquipos} style={styles.button}>
        Generar equipos
      </button>

      {equipos && (
        <div style={styles.equipos}>
          <div style={styles.equipo}>
            <h2>Equipo A</h2>
            <ul>
              {equipos.equipoA.map((j, i) => (
                <li key={i}>{j.nombre} (Puntaje: {j.puntaje})</li>
              ))}
            </ul>
          </div>
          <div style={styles.equipo}>
            <h2>Equipo B</h2>
            <ul>
              {equipos.equipoB.map((j, i) => (
                <li key={i}>{j.nombre} (Puntaje: {j.puntaje})</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {equipos && (
        <button onClick={() => irAResultados(equipos)} style={styles.button}>
          Confirmar equipos
        </button>
      )}
    </div>
  );
}

const styles = {
  container: { padding: "20px", textAlign: "center" },
  button: { padding: "10px 20px", fontSize: "16px", margin: "20px" },
  equipos: { display: "flex", justifyContent: "space-around", marginTop: "20px" },
  equipo: { border: "1px solid #ccc", padding: "10px", borderRadius: "8px", width: "40%" }
};

export default Equipos;
