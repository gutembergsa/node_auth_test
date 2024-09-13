const express = require("express");
const router = express.Router()
const { createNewUser } = require("./controller");
router.post("/signup", async(req, res) => {
    try {
        let { name, email,  password } = req.body;
        name = name.trim();
        email = email.trim();
        password = password.trim();

        if (!name || !email || !password) {
            throw Error("Fields can't be empty");            
        }
        
        return
    } catch (error) {
        console.error({error}); 
    }
})