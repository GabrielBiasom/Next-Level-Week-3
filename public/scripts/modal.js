// const modality = document.querySelector("#bordas")
// const modal = document.querySelector("#modal-geral")




// const express = require("express")
// const server = express()

// //Pegar o banco de dados
// const db = require("./database/db")

// //Configurar pasta publica
// server.use(express.static("public"))

// // habilitar o uso do req.body na aplicação
// server.use(express.urlencoded({ extended: true }))

// //utilizando template engine
// const nunjucks = require("nunjucks")
// nunjucks.configure("src/views", {
//     express: server,
//     noCache: true
// })
// //configurar caminhos da minha aplicação
// //página inicial
// // req: Requisição
// // res: Resposta
// server.get("/", (req, res) => {
//     return res.render("index.html", { title: "um título" })
// })

// server.get("/create-point", (req, res) => {
//     //req.Query: Query Strings da url
//     //console.log(req.query)

//     return res.render("create-point.html")
// })

// server.post("/savepoint", (req, res) => {
//     // req.body: O corpo do formulario

//     // inserir dados no banco de dados

//     const query = `
//     INSERT INTo places (
//         image,
//         name,
//         address,
//         address2,
//         state,
//         city,
//         items
//     ) VALUES (?,?,?,?,?,?,?);
// `

//     const values = [
//         req.body.image,
//         req.body.name,
//         req.body.address,
//         req.body.address2,
//         req.body.state,
//         req.body.city,
//         req.body.items
//     ]

//     function afterInsertData(err) {
//         if (err) {
//             console.log(err)
//             return res.send("Erro no cadastro!")

//         }

//         console.log("Cadastro com sucesso")
//         console.log(this)

//         return res.render("create-point.html", { saved: true })

//     }

//     db.run(query, values, afterInsertData)
// })

// server.get("/search-results", (req, res) => {

//     const search = req.query.search
//     // const esses = search

//     if (search == "") {

//         //pesquisa vazia
//         return res.render("search-results.html", { total: 0/* , esses: esses.length  */})
//     }

//     //pegar os dados do banco de dados
//     db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) {
//         if (err) {
//             return console.log(err)
//         }
//         const total = rows.length

//         //mostrar a pagina html com os dados do banco de dados
//         console.log("Aqui seus registros: ")
//         console.log(rows)
//         return res.render("search-results.html", { places: rows, total: total })

//     })
// })

// //ligar o servidor
// server.listen(3000)