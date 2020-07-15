const express = require("express")
const server = express()

//configurar pasta public
server.use(express.static("publica"))


const nunjuncks = require("nunjucks")
nunjuncks.configure("src/views", {
    express: server,
    noCache: true
})


//configurar caminhos da aplicacao
//pagina inicial
//req: requisicao
//res: resposta
server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search", (req, res) => {
    return res.render("search.html")
})
//ligar o servidor 
server.listen(3000)