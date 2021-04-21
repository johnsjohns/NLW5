import express, { request } from "express";

const app = express();

app.get('/', (resquest, response) =>{
    return response.json({
        message: "Ola NLW 005",
    });
});

app.post('/', (resquest, response) =>{
    return response.json({
        message: "Usuario salvo com sucesso",
    })
})

app.listen(3333, () => console.log('Server is running on port 3333'));