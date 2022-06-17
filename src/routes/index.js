const {getTodosOpts,getTodoOpts,postTodoOpts,deleteTodoOpts,updateTodoOpts}= require('./todo')


function todoRoutes(fastify, options, done){

    fastify.get('/todos',getTodosOpts);
    fastify.get('/todos/:id', getTodoOpts);
    fastify.post('/todos', postTodoOpts);
    fastify.delete('/todos/:id', deleteTodoOpts);
    fastify.put('/todos/:id', updateTodoOpts);

    done()
}
module.exports = {todoRoutes};