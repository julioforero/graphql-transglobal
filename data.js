const reservas = [
  {
    id: "1",
    cliente: "Carlos Perez",
    destino: "Aeropuerto Medellín",
    conductor: {
      id: "10",
      nombre: "Juan Gómez",
      vehiculo: {
        id: "100",
        placa: "ABC123",
        modelo: "Toyota Hilux"
      }
    }
  },

  {
    id: "2",
    cliente: "Maria Lopez",
    destino: "Centro Medellín",
    conductor: {
      id: "11",
      nombre: "Andres Ruiz",
      vehiculo: {
        id: "101",
        placa: "XYZ789",
        modelo: "Chevrolet Dmax"
      }
    }
  },

  {
    id: "3",
    cliente: "Laura Martinez",
    destino: "Terminal del Norte",
    conductor: {
      id: "12",
      nombre: "Felipe Castro",
      vehiculo: {
        id: "102",
        placa: "TRS456",
        modelo: "Kia Sportage"
      }
    }
  }
];

module.exports = reservas;