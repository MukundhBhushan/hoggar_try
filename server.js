const express=require('express')
const app=express()
const mongoose= require('mongoose')
const {menus} = require('./models/menu')
const {carts} = require('./models/cart')

var connectionString = "mongodb://mukundh123:mukundh123@ds016098.mlab.com:16098/hoggar"

mongoose.connect(connectionString);
mongoose.Promise = global.Promise;

app.use(cors())
app.use(express.urlencoded({
    extended: true
}));

app.post('/api/menu/m1',(req,res)=>{
    var menu = new menus({
        menuid: "M1",
        items:[
            {
                course: "Starters",
                name: "Bread",
                price: 12.0,
            },
            {
                course: "Starters",
                name: "Soup",
                price: 22.3,
            },
            {
                course: "Main",
                name: "Pasta",
                price: 55.6,
            },
            {
                course: "Main",
                name: "Pizza",
                price: 45.56,
            },
        ]
    }).save();
    res.json(menu)
})
app.post('/api/menu/m2',(req,res)=>{
    var menu = new menus({
        menuid: "M2",
        items:[
            {
                course: "Starters",
                name: "Nachos",
                price: 12.0,
            },
            {
                course: "Starters",
                name: "Chips",
                price: 22.3,
            },
            {
                course: "Main",
                name: "Burger",
                price: 55.6,
            },
            {
                course: "Main",
                name: "Taco",
                price: 45.56,
            },
        ]
    }).save();
    res.json(menu)
})

app.get('/api/showmenu/:menuid',(req,res)=>{
   let menuid = req.params.menuid
    console.log(menuid)
    menus.findOne({menuid},(err,docs)=>{
        if(!err){
            res.json(docs)
        }
        else{
            res.send("menu not present")
        }
    })
}) 

app.post('/api/addcart/',(req,res)=>{
    var cart = new carts({
        course:req.body.course,
        name:req.body.name,
        price:req.body.price
    }).save()

    res.json(req.body)
    res.json(cart)
})

app.get('/api/getcart/',(req,res)=>{
    carts.find({},(err,docs)=>{
        if(!err){
            res.json(docs)
        }
        else{
            res.send("something went wrong")
        }
    })
})


app.listen(8000)