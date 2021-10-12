import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import schema from './graphql/schemasMap';

const PORT = 4000;

const app = express();

async function startServer() {
	const server = new ApolloServer({
		schema
	});
	await server.start();
	server.applyMiddleware({ app, path: '/graphql'})
}

startServer().then(() => {
	app.listen(PORT, () => {
		console.log(`Graphql is now running on localhost:${PORT}/graphql`)
	})
});
