import express from "express";
import cors from 'cors';
import { ApolloServer } from "apollo-server-express";
import dotenv from 'dotenv';
import conectarBD from "./db/db.js";
import {typeDefs} from './graphql/types.js';
import {resolvers} from './graphql/resolvers.js';



dotenv.config(); // para que nos deje usar variables en toda la app

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    
});

const app = express();

app.use(express.json()); // para que los request salgan en formato json

app.use(cors()); // para hacer request desde muchos origenes


app.listen({port: process.env.PORT || 4000}, async()=>{ //definimos puerto y con función asíncrona que ejecuta el servidor
    await conectarBD(); // para ponerlo a correr con express lo conectamos a la bd
    await server.start();

    server.applyMiddleware({ app });

    console.log('Servidor listo'); // aviso para poder saber si ya ancló
});