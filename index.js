const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@as-integrations/express4");
const cors = require("cors");
const bodyParser = require("body-parser");

async function startServer() {

  // Inicializar Express
  const app = express();

  // Schema GraphQL
  const typeDefs = `#graphql

    type Vehiculo {
      id: ID!
      placa: String
      modelo: String
    }

    type Conductor {
      id: ID!
      nombre: String
      vehiculo: Vehiculo
    }

    type Reserva {
      id: ID!
      cliente: String
      destino: String
      conductor: Conductor
    }

    type Query {
      reservas: [Reserva]
    }

    type Mutation {
        crearReserva(cliente: String!, destino: String!): Reserva
    }

  `;

  // Datos 
    const reservas = require("./data");

  // Resolvers
    const resolvers = {

        Query: {
            reservas: () => reservas,
        },

        Mutation: {

            crearReserva: (_, { cliente, destino }) => {

            const nuevaReserva = {
                id: String(reservas.length + 1),
                cliente,
                destino,
                conductor: null
            };

            reservas.push(nuevaReserva);

            return nuevaReserva;
            }

        }

};

  // Apollo Server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  // Iniciar servidor Apollo
  await server.start();

  // Middleware GraphQL
  app.use(
    "/graphql",
    cors(),
    express.json(),
    expressMiddleware(server)
  );

  // Levantar servidor
  app.listen(4000, () => {
    console.log("Servidor listo en http://localhost:4000/graphql");
  });
}

startServer();