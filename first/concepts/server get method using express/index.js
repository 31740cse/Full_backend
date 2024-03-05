const express = require('express')
const app = express()

//middleware
app.use((req, res, next) => {
    console.log('Middleware Function');
    next();
})




app.get('/', (req, res) => {
    res.send('<h1>Ravi</h1>')
})


// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//     res.send('Hello World')
// })

// app.listen(3000)





app.get("/contact", (req, res) => {
    res.send("This is contact");
})





app.get('/profile/:username', (req, res) => {
    res.send(`this is ${req.params.username}`);
})

app.listen(3000);