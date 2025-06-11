require('dotenv').config();
const fastify = require('fastify')({ logger: true });
const fastifyCors = require('@fastify/cors');
const axios = require('axios');
const openaiRoutes = require('./src/routes/ai');
const lessonRoutes = require('./src/routes/lesson');

fastify.register(fastifyCors, { origin: '*' });
fastify.register(openaiRoutes);
fastify.register(lessonRoutes);

fastify.get('/', async (request, reply) => {
  return { message: 'Welcome to the server!' };
});

const start = async () => {
  try {
    await fastify.listen({ port: 3001 });
    console.log('🚀 Server running on http://localhost:3001');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();