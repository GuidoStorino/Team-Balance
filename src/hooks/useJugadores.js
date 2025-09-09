import { useState, useEffect } from "react";
import { Preferences } from "@capacitor/preferences";

function useJugadores() {
  const [jugadores, setJugadores] = useState([]);

  useEffect(() => {
    (async () => {
      const { value } = await Preferences.get({ key: "jugadores" });
      if (value) setJugadores(JSON.parse(value));
    })();
  }, []);

  const guardar = async (lista) => {
    setJugadores(lista);
    await Preferences.set({
      key: "jugadores",
      value: JSON.stringify(lista),
    });
  };

  const agregar = async (nuevo) => {
    const actualizados = [...jugadores, nuevo];
    await guardar(actualizados);
  };

  const eliminar = async (nombre) => {
    const actualizados = jugadores.filter((j) => j.nombre !== nombre);
    await guardar(actualizados);
  };

  return { jugadores, agregar, eliminar, guardar };
}

export { useJugadores };

