const express = require('express')
const app = express()

app.set("view engine", "ejs");
// middleware will not be work in this
// app.use((req, res, next) => {
//     console.log('Middleware Function');
//     next();
// })



// EJS==HTML+Calculation power

app.get('/', (req, res) => {
    res.render("index", { age: 20 });// this replaces age= 12 in the file index.ejs
})


app.listen(3000);