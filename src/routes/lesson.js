async function routes(fastify, options) {
  // Placeholder route
  fastify.get('/api/lesson', async (request, reply) => {
    return { message: 'Lesson route placeholder' };
  });
}
module.exports = routes;
