import React, { useState } from "react";

function EditarJugadorModal({ jugador, onGuardar, onCerrar }) {
  const [form, setForm] = useState({ ...jugador });

  const handleChange = (campo, valor) => {
    const num = Math.max(0, Math.min(10, parseInt(valor) || 0)); // límite 0-10
    setForm({ ...form, [campo]: num });
  };

  const handleSubmit = () => {
    onGuardar(form);
    onCerrar();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Editar {jugador.nombre}</h2>
        {["velocidad", "defensa", "pase", "habilidad", "pegada"].map((campo) => (
          <div key={campo}>
            <label>{campo.charAt(0).toUpperCase() + campo.slice(1)}: </label>
            <input
              type="number"
              value={form[campo]}
              onChange={(e) => handleChange(campo, e.target.value)}
            />
          </div>
        ))}
        <button onClick={handleSubmit}>Guardar</button>
        <button onClick={onCerrar}>Cancelar</button>
      </div>
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999;
        }
        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 10px;
          width: 90%;
          max-width: 400px;
        }
      `}</style>
    </div>
  );
}

export default EditarJugadorModal;
