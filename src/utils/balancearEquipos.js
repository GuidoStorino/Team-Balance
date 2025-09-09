export function balancearPorAtributos(jugadores) {
  if (jugadores.length < 2) return { equipoA: [...jugadores], equipoB: [] };

  const equipoA = [];
  const equipoB = [];

  // Función para calcular promedio de atributos de un equipo
  const promedioEquipo = (equipo) => {
    if (equipo.length === 0) return { defensa:0, velocidad:0, habilidad:0, pase:0, pegada:0 };
    const sum = equipo.reduce((acc, j) => ({
      defensa: acc.defensa + j.defensa,
      velocidad: acc.velocidad + j.velocidad,
      habilidad: acc.habilidad + j.habilidad,
      pase: acc.pase + j.pase,
      pegada: acc.pegada + j.pegada
    }), {defensa:0, velocidad:0, habilidad:0, pase:0, pegada:0});
    const n = equipo.length;
    return {
      defensa: sum.defensa / n,
      velocidad: sum.velocidad / n,
      habilidad: sum.habilidad / n,
      pase: sum.pase / n,
      pegada: sum.pegada / n
    };
  };

  // Puntaje global de un jugador (suma de atributos)
  const puntajeJugador = (j) => j.velocidad + j.defensa + j.habilidad + j.pase + j.pegada;

  // Ordenamos jugadores de mayor a menor puntaje
  const jugadoresOrdenados = [...jugadores].sort((a,b) => puntajeJugador(b) - puntajeJugador(a));

  // Asignamos jugadores uno a uno al equipo con menor promedio por atributo
  jugadoresOrdenados.forEach((jugador) => {
    const promA = promedioEquipo(equipoA);
    const promB = promedioEquipo(equipoB);

    // Calculamos desbalance total por diferencia de atributos
    const desbalanceA = Math.abs(promA.velocidad + promA.defensa + promA.habilidad + promA.pase + promA.pegada);
    const desbalanceB = Math.abs(promB.velocidad + promB.defensa + promB.habilidad + promB.pase + promB.pegada);

    // Limitamos cantidad de jugadores por equipo para que queden iguales
    if (equipoA.length < equipoB.length) {
      equipoA.push(jugador);
    } else if (equipoB.length < equipoA.length) {
      equipoB.push(jugador);
    } else {
      // Agregamos al equipo que quede más equilibrado
      if (desbalanceA <= desbalanceB) {
        equipoA.push(jugador);
      } else {
        equipoB.push(jugador);
      }
    }
  });

  return { equipoA, equipoB };
}
