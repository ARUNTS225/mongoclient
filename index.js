const express = require('express')
const UserRoute = require('./routes/user')
const app = express()
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use('/users',UserRoute)

app.get('/',(req,res)=>{
    res.send('<h1>Welcome to Express</h1>')
})


app.listen(PORT, ()=>console.log(`App is running in port ${PORT}`))