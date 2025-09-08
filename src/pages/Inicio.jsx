import React from "react";

function Inicio({ irAJugadores }) {
  return (
    <div style={styles.container}>
      <h1>⚽ TeamBalancer</h1>
      <button onClick={irAJugadores} style={styles.button}>
        Crear partido
      </button>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", marginTop: "100px" },
  button: { padding: "15px 30px", fontSize: "18px", cursor: "pointer" }
};

export default Inicio;
