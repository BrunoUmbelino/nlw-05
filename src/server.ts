import express, { request, response } from "express";

const app = express();

app.get('/', (request , response) =>{
  return response.json({
    message: "olá terráqueos"
  })
}) 

app.post("/", (request, response)=>{
  return response.json({message: "Usuário cadastrado com sucesso!"})
})

app.listen(3333, () => console.log("server is running on port 3333"));
