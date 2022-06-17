const Todo = {
    type: 'object',
    properties: {
        id: { type: 'number' },
        name: { type: 'string' },
        description: { type: 'string' },
        groos_amount: { type: "number" }

    }
}


const postTodoOptions = {
    schema: {
        body: {
            type: 'object',
            required: ['name', 'description', 'groos_amount'],
            properties: {
                name: { type: 'string' },
                description: { type: 'string' },
                groos_amount: { type: 'number' },
            },
        },
        response: {
            201: Todo
        }
    }
}


const getTodosOptions = {
    schema: {
        response: {
            200: {
                type: 'array',
                todos: Todo
            }
        }
    }

}
const getTodoOptions = {
    schema: {
        response: {
            200: Todo

        },
    }

}

const deleteTodoOptions = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    message: { type: 'string' }
                }
            }

        }
    }

}

const updateTodoOptions = {
    schema: {
        response: {
            200: Todo,
        }
    }
}



module.exports = { getTodosOptions, getTodoOptions, postTodoOptions, deleteTodoOptions, updateTodoOptions }