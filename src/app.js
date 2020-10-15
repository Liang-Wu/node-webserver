const path = require('path')
const express = require('express')
const hbs = require('hbs')

console.log(__dirname)
console.log(__filename)
console.log(path.join(__dirname,'../public'))


const app = express()
//define path for express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewPath = path.join(__dirname,'../template/views')
const partialsPath = path.join(__dirname,'../template/partials')

//setup handlebars engine and view location
app.set('view engine','hbs')
app.set('views',viewPath)
hbs.registerPartials(partialsPath)

//set up static resources css js
app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather',
        createdBy:'Steven'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help',
        description:'help is on the way',
        createdBy:'Steven'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About',
        Name:'Steven Wu',
        createdBy:'Steven'
    })
})
app.get('/help/*',(req,res)=>{
    res.render('errors',{
        title:'404',
        description:'help page is not found',
        createdBy:'Steven'
    })
})
app.get('*',(req,res)=>{
    res.render('errors',{
        title:'404',
        description:'page is not found',
        createdBy:'Steven'
    })
})



app.get('/weather',(req,res)=>{
    res.send('weather')
})


app.listen(3000,()=>{
    console.log('server is up on port 3000')
})