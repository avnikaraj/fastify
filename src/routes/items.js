const {getItems, getItem, addItem, deleteItem, updateItem} = require('../controllers/items')
//ITEM SCHEMA
const Item = {
    type: 'object',
            properties: {
              id: { type: 'string' },
              name: { type: 'string' }  
            }
}


//OPTIONS FOR GET ALL ITEMS
const getItemsOpts = {
    schema: {
      response: {
        200: {
          type: 'array',
          items: Item
        }
      }
    },
   handler: getItems
}

const getItemOpts = {
    schema:{
        response: {
            200: Item,
        },
    },
    handler: getItem,
}

const postItemOpts = {
    schema:{
        body:{
            type: 'object',
            required: ['name'],
            properties:{
                name: { type: 'string'},
            },
        },
        response: {
            201: Item,
        },
    },
    handler: addItem,
}

const deleteItemOpts = {
    schema:{
        response: {
            200: {
                type: 'object',
                properties:{
                    message:{type:'string'}
                }

            },
        },
    },
    handler: deleteItem,
}

const updateItemOpts = {
    schema:{
        response: {
            200: Item,
        },
    },
    handler: updateItem,
}
function itemRoutes  (fastify, options, done) {
    //GET ALL ITEMS
    fastify.get('/items',getItemsOpts)
    //GET SINGLE ITEMS
      fastify.get('/items/:id',getItemOpts)
    
    // ADD ITEM
    fastify.post('/items', postItemOpts)

    // DELET ITEM
    fastify.delete('/items/:id', deleteItemOpts)

    // UPDATE ITEM
    fastify.put('/items/:id', updateItemOpts)

    done()
  };
  module.exports = {itemRoutes}