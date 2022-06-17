const {v4: uuidv4} = require ('uuid')

let todos = require('../todos');


//handlers implementation
const getTodos = (request, reply) => {
    reply.send(todos);
}

const getTodo = (request, reply) => {
    const {id} = request.params;
    const todo = todos.find(data=>data.id === id);
    reply.send(todo);
}

const addTodo = (request, reply) => {
    const {name, description} = request.body;
    const todo = {id: uuidv4(),name,description };

    todos= [...todos,todo];
    reply.code(201).send(todo);

}

const deleteTodo = (request,reply) => {
    const {id} = request.params;

    todos = todos.filter((data) =>data.id !== id);
    reply.send({message: `this todo ${id} is deleted`});
}

const updateTodo = (request, reply) => {
    const {id} = request.params;
    const {name,description} = request.body;

    todos = todos.map(todo => (todo.id === id ? {id,name,description}: todo));
    todo = todos.find(todo =>todo.id ===id);

    reply.send(todo);
}

module.exports = {
    getTodos,
    getTodo,
    addTodo,
    deleteTodo,
    updateTodo
}