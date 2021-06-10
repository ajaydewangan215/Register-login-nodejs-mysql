const db = require("../config/config")
const bcrypt = require('bcrypt')

module.exports.homepage = (req, res) => {
    res.render('index')
}

module.exports.getregister = (req, res) => {
    res.render('register')
}

module.exports.getlogin = (req, res) => {
    res.render('login')
}

module.exports.postregister = async (req, res) => {
    const {firstname, lastname, email, phone, password, confirm_password} = req.body
    if( !firstname || !lastname || !email || !phone || !password || !confirm_password){
        res.render('register', {error:'All field is required'})
    }

    if(password !== confirm_password) {
        res.render('register', {error:'Confirm Password doesn\'t match'})
    }

    const hashpassword = await bcrypt.hash(password, 10)
    
    const sqlInsert = "INSERT INTO users(first_name, last_name, email, phone, password, confirm_password) VALUES(?, ?, ?, ? ,?, ?)"
    db.query(sqlInsert, [firstname, lastname, email, phone, hashpassword, hashpassword], (err, result) => {
        if(err) throw err
        res.render('register', {error:'register successfully'})
    })
}