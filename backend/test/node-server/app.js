const express = require('express');
const cors = require('cors');
const { json } = require('body-parser');
const app = express();

app.use(cors());
app.use(express.json());

const port = 8080;

const signup = (req, res) => {
    console.log(req.body);
    if(req.body.password == "00000000"){
        return res.status(409).json({error: "asjksd"});
    }
    res.status(200).json({success: true});
}

const signin = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;


}

const subscriptions = (req, res) => {
    const data = [
        {sub_id: 11, mag_id: 1, sub_time: 20, price: 200},
        {sub_id: 11, mag_id: 1, sub_time: 20, price: 200},
        {sub_id: 11, mag_id: 1, sub_time: 20, price: 200},
        {sub_id: 11, mag_id: 1, sub_time: 20, price: 200},
        {sub_id: 11, mag_id: 1, sub_time: 20, price: 200},
    ];
    res.json(data);
}

const users = (req, res) => {
    const data = [
        {user_id: 101, user_role: 1, fullname: "Nitin", email: "email@gmail.com", password: "password"},
        {user_id: 101, user_role: 1, fullname: "Nitin", email: "email@gmail.com", password: "password"},
        {user_id: 101, user_role: 1, fullname: "Nitin", email: "email@gmail.com", password: "password"},
        {user_id: 101, user_role: 1, fullname: "Nitin", email: "email@gmail.com", password: "password"},
        {user_id: 101, user_role: 1, fullname: "Nitin", email: "email@gmail.com", password: "password"},
        {user_id: 101, user_role: 1, fullname: "Nitin", email: "email@gmail.com", password: "password"},
        {user_id: 101, user_role: 1, fullname: "Nitin", email: "email@gmail.com", password: "password"},
        {user_id: 101, user_role: 1, fullname: "Nitin", email: "email@gmail.com", password: "password"},
        {user_id: 101, user_role: 1, fullname: "Nitin", email: "email@gmail.com", password: "password"},
        {user_id: 101, user_role: 1, fullname: "Nitin", email: "email@gmail.com", password: "password"},
        {user_id: 101, user_role: 1, fullname: "Nitin", email: "email@gmail.com", password: "password"},
    ];
    
    res.json(data);
}

const test = (req, res) => {
    console.log(req.headers);
}


app.get("/", (req, res)=>{
    res.send("home page");
});


app.post("/signup", signup);

app.get("/subscriptions", subscriptions);

app.get("/users", users);

app.get("/test", test);

app.listen(port, ()=>console.log("server is listening at "+port));