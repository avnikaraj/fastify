const Todo = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        description: { type: 'string' },
        groos_amount: { type: 'number' }
    }
}


const postTodoOpts = {
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

module.exports = {postTodoOpts}