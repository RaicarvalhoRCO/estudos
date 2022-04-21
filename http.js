var http = require("http")

http.createServer(function(requisicao,resposta){resposta.end("Resposta")}).listen(666)

console.log("FLAMENGO")