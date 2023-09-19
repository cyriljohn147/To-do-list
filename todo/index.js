import express from "express";

var todo = [];
var daily=[];
var head="";

const port = 1000;
const app = express();

app.use(express.urlencoded({extended : true}));
app.use(express.static("public"));

app.listen(port,()=> {
    console.log("Server started on 1000");
})

app.get("/daily",(req,res)=> {
    //daily=[];
    head = "Daily"
    if(req.body.task){daily.push(req.body.task);}
    res.render("daily.ejs",{head : head, tasks : daily});
})

app.get("/todo",(req,res)=> {
    //todo=[];
    head = "To Do"
    if(req.body.task){todo.push(req.body.task);}
    res.render("index.ejs",{head :head, tasks : todo});
})

app.post("/daily",(req,res)=> {
    head = "daily";
    daily.push(req.body.task);
    res.render("daily.ejs",{head : head, tasks : daily});
})

app.post("/todo",(req,res)=> {
    head = "To Do";
    todo.push(req.body.task);
    res.render("index.ejs",{head :head, tasks : todo});
})