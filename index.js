const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

let cNames = []; 

app.get('/', (req, res) => {
  res.render("index",{country: cNames});
})

app.get('/about', (req, res) => {
    res.render("about",{});
})

app.post('/', (req, res) => {
    const cName = req.body.cName;
    cNames.push(cName);
    res.redirect("/");
  })

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})