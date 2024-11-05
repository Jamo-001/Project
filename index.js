const server = require ('express')
const app = server()
const port = 4123
const path = require('path');
app.use(server.static(path.join(__dirname, 'public')));

app.get('/dashboard', (req,res)=>{
    res.sendFile(__dirname + '/public/dashboard.html')
})
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/public/login.html')
})
app.post('/login', (req,res)=>{
    res.redirect('/dashboard')
})

app.listen(port, ()=>{
    console.log(`The server is working on ${port}`);
    
})