const {getTodos,getTodo,addTodo,deleteTodo,updateTodo} = require('../controllers/todo');

const {vatCalculator} = require('../utlis/vatCalculator');
//validation schemas and imported handlers
const Todo = {
    type: 'object',
                    properties:{
                        id: {type: 'string'},
                        name: {type: 'string'},
                        description: {type: 'string'}
                
                    }
}

const getTodosOpts = {
    schema: {
        response: {
            200: {
            type: 'array',
            todos: Todo
            }
        }
    },
    handler:getTodos
    
}
const getTodoOpts = {
    schema: {
        response: {
            200: Todo
           
        },
    },   
     handler: getTodo

}

const postTodoOpts = {
    schema: {
        body: {
            type: 'object',
            required: ['name', 'description'],
            properties: {
                name: {type: 'string'},
                description: {type: 'string'},
             
            },
        },
        response: {
            201: Todo
           
        },
    },   
     handler: addTodo 


}
const deleteTodoOpts = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    message: {type: 'string'}
                }
            }
           
        },
    },   
     handler: deleteTodo 

}

const updateTodoOpts = {
    schema: {
        response: {
            200: Todo,
        },
    },
    handler: updateTodo
}



module.exports = {getTodosOpts,getTodoOpts,postTodoOpts,deleteTodoOpts,updateTodoOpts}