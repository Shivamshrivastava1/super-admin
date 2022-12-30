const express  = require('express');
const helmet = require('helmet');

const Port = process.env.Port||6000;
const app   = express();
app.use = express.json();
app.use(helmet());
app.use(morgan());

app.get("/", (req,res)=>{
    console.log(req.body);
    res.json({
        message:"server is running"
    })
});

// we will import Login router here and use it
const Loginrouter = require("../router/Loginrouter");
app.post("/backend",Loginrouter);

app.use("*",(req,res)=>[
    res.status(404).send("Page Not Found")
])

app.listen(Port,()=>{
    console.log("Port is running on 6000");
})