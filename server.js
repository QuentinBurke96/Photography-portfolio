const express = require('express')
const app = express()
const nodemailer = require('nodemailer')
require("dotenv").config()

const PORT = process.env.PORT || 3000

//Middleware

app.use(express.static('Public'))
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Public/contact.html')
})

app.post('/', (req, res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'qkspace.info@gmail.com',
            pass: process.env.PASS 

        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'qkspace.info@gmail.com',
        subject: `Message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log(error);
            res.send('error');
        }else{
            console.log('Email sent ' + info.response);
            res.send('success')
        }
     })
})

app.listen(PORT, () => {
    console.log(`Speeding on port ${PORT}`)
})