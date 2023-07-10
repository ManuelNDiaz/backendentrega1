class TicketManager {
    #PrecioBaseDeGanancia=0.15
    constructor() {
      this.eventos = [];
    }
  
    getEventos() {
      return this.eventos;
    }
  
    agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
      const evento = {
        id: this.eventos.length + 1,
        nombre,
        lugar,
        precio: precio + this.#PrecioBaseDeGanancia,
        capacidad,
        fecha,
        participantes: []
      };
  
      this.eventos.push(evento);
    }
  
    agregarUsuario(eventoId, usuarioId) {
      const evento = this.eventos.find(evento => evento.id === eventoId);
      if (!evento) {
        console.log("El evento no existe.");
        return;
      }
  
      if (evento.participantes.includes(usuarioId)) {
        console.log("El usuario ya está registrado en este evento.");
        return;
      }
  
      evento.participantes.push(usuarioId);
    }
  
    ponerEventoEnGira(eventoId, nuevaLocalidad, nuevaFecha) {
      const eventoExistente = this.eventos.find(evento => evento.id === eventoId);
      if (!eventoExistente) {
        console.log("El evento no existe.");
        return;
      }
  
      const eventoEnGira = {
        ...eventoExistente,
        id: this.eventos.length + 1,
        lugar: nuevaLocalidad,
        fecha: nuevaFecha,
        participantes: []
      };
  
      this.eventos.push(eventoEnGira);
    }
  }

  const ticketManager = new TicketManager();
  
  ticketManager.agregarEvento("Concierto", "Cancha", 100, 2000, new Date());
  ticketManager.agregarEvento("Película", "Cine", 5, 50);
  
  console.log(ticketManager.getEventos());
  
  ticketManager.agregarUsuario(1, "usuario1");
  ticketManager.agregarUsuario(1, "usuario2");
  
  ticketManager.ponerEventoEnGira(2, "Festival", new Date("2023-11-21"));
  
  console.log(ticketManager.getEventos());
  
