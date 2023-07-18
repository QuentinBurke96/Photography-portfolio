const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

//Middleware

app.use(express.static('Public'))
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Public/contact.html')
})

app.post('/', (req, res) => {
    console.log(req.body);
})

app.listen(PORT, () => {
    console.log(`wiufhwirufh ${PORT}`)
})