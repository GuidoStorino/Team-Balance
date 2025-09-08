import React, { useState } from "react";

function JugadorForm({ onAgregar }) {
  const [nombre, setNombre] = useState("");
  const [velocidad, setVelocidad] = useState(5);
  const [defensa, setDefensa] = useState(5);
  const [pase, setPase] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim()) return;

    const nuevoJugador = { nombre, velocidad, defensa, pase };
    onAgregar(nuevoJugador);

    // reset
    setNombre("");
    setVelocidad(5);
    setDefensa(5);
    setPase(5);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Nombre del jugador"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        style={styles.input}
      />

      <label>Velocidad: {velocidad}</label>
      <input type="range" min="1" max="10" value={velocidad}
        onChange={(e) => setVelocidad(Number(e.target.value))}
      />

      <label>Defensa: {defensa}</label>
      <input type="range" min="1" max="10" value={defensa}
        onChange={(e) => setDefensa(Number(e.target.value))}
      />

      <label>Pase: {pase}</label>
      <input type="range" min="1" max="10" value={pase}
        onChange={(e) => setPase(Number(e.target.value))}
      />

      <button type="submit" style={styles.button}>Agregar jugador</button>
    </form>
  );
}

const styles = {
  form: { display: "flex", flexDirection: "column", gap: "10px", margin: "20px" },
  input: { padding: "8px", fontSize: "1em" },
  button: { padding: "10px", background: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }
};

export default JugadorForm;

