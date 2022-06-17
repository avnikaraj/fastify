const { setupTestEnv } = require('./setupTestEnv');

const app = setupTestEnv();

describe("Integretion tests for CRUD opertaions connected to test postgres Db", () => {
    test("should create an todo via POST route", async () => {
        const todo = {
            name: "test",
            description: "test",
            groos_amount: 20
        }
        const response = await app.inject({
            method: 'POST',
            url: '/v2/',
            payload: todo
        })

        expect(response.statusCode).toBe(201);
        expect(response.json()).toMatchObject(todo);

    })

    test("Should get a list of todos via GET route", async () => {
        const response = await app.inject({
            method: "GET",
            url: "/v2",
        });

        expect(response.statusCode).toBe(200);

    });

    test("Should delete a todo", async () => {
        const response = await app.inject({
            method: "DELETE",
            url: "/v2/2",
        });

        expect(response.statusCode).toBe(200);
        expect(response).toMatchObject({
            "body": "{\"message\":\"Todo deleted\"}",
        });
    });



})


