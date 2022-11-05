const express = require('express')
const fs = require('fs')
const app = express()
//this line is required to parse the request body
app.use(express.json())
/* Create - POST method */
app.post('/user/add', (req, res) => {
    //get the existing user data
    const existUsers = getUserData()
    
    //get the new user data from post request
    const userData = req.body
    //check if the userData fields are missing
    if (userData.user_id == null || userData.profile == null || userData.desc == null || userData.email == null || userData.doc == null || userData.created_at == null || userData.updated_at == null || userData.last_login == null) {
        return res.status(401).send({error: true, msg: 'User data missing'})
    }
    
    //check if the username exist already
    const findExist = existUsers.find( user => user.user_id === userData.user_id )
    if (findExist) {
        return res.status(409).send({error: true, msg: 'username already exist'})
    }
    //append the user data
    existUsers.push(userData)
    //save the new user data
    saveUserData(existUsers);
    res.send({success: true, msg: 'User data added successfully'})
})

app.post('/user-lista/add', (req, res) => {
    //get the existing user data
    const existUsers = getUserDataLista()
    
    //get the new user data from post request
    const userData = req.body
    //check if the userData fields are missing
    if (userData.user_id == null) {
        return res.status(401).send({error: true, msg: 'User data missing'})
    }
    
    //check if the username exist already
    const findExist = existUsers.find( user => user.user_id === userData.user_id )
    if (findExist) {
        return res.status(409).send({error: true, msg: 'username already exist'})
    }
    //append the user data
    existUsers.push(userData)
    //save the new user data
    saveUserDataLista(existUsers);
    res.send({success: true, msg: 'User data added successfully'})
})
/* Read - GET method */
app.get('/user/list', (req, res) => {
    const users = getUserData()
    res.send(users)
})
app.get('/user-lista/list', (req, res) => {
    const users = getUserDataLista()
    res.send(users)
})

app.get('/user-lista/id', (req, res) => {
    const users = getUserDataLista()
    res.send(users[0].user_id)
})

/* Update - Patch method */
app.patch('/user/update/:user_id', (req, res) => {
    //get the username from url
    const user_id = req.params.user_id
    const profile = req.params.profile
    const desc = req.params.desc
    const email = req.params.email
    const type = req.params.type
    const doc = req.params.doc
    const created_at = req.params.created_at	
    const updated_at = req.params.updated_at	
    const last_login = req.params.last_login	
    //get the update data
    const userData = req.body
    //get the existing user data
    const existUsers = getUserData()
    //check if the username exist or not       
    const findExist = existUsers.find( user => user.user_id === user_id )
    if (!findExist) {
        return res.status(409).send({error: true, msg: 'username not exist'})
    }
    //filter the userdata
    const updateUser = existUsers.filter( user => user.user_id !== user_id )
    //push the updated data
    updateUser.push(userData)
    //finally save it
    saveUserData(updateUser)
    res.send({success: true, msg: 'User data updated successfully'})
})
/* Delete - Delete method */
app.delete('/user/delete/:user_id', (req, res) => {
    const user_id = req.params.user_id
    //get the existing userdata
    const existUsers = getUserData()
    //filter the userdata to remove it
    const filterUser = existUsers.filter( user => user.user_id !== user_id )
    if ( existUsers.length === filterUser.length ) {
        return res.status(409).send({error: true, msg: 'username does not exist'})
    }
    //save the filtered data
    saveUserData(filterUser)
    res.send({success: true, msg: 'User removed successfully'})
    
})

app.delete('/user-lista/delete/:user_id', (req, res) => {
    const user_id = req.params.user_id
    //get the existing userdata
    const existUsers = getUserDataLista()
    //filter the userdata to remove it
    const filterUser = existUsers.filter( user => user.user_id !== user_id )
    if ( existUsers.length === filterUser.length ) {
        return res.status(409).send({error: true, msg: 'username does not exist'})
    }
    //save the filtered data
    saveUserDataLista(filterUser)
    res.send({success: true, msg: 'User removed successfully'})
    
})

/* util functions */
//read the user data from json file
const saveUserData = (data) => {
    const stringifyData = JSON.stringify(data)
//    fs.appendFile('users.json', stringifyData)
    fs.writeFileSync('users.json', stringifyData)	
}
//get the user data from json file
const getUserData = () => {
    const jsonData = fs.readFileSync('users.json')
    return JSON.parse(jsonData)    
}
/* util functions */
//read the user data from json file
const saveUserDataLista = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync('users-lista.json', stringifyData)	
}
//get the user data from json file
const getUserDataLista = () => {
    const jsonData = fs.readFileSync('users-lista.json')
    return JSON.parse(jsonData)    
}

/* util functions ends */
//configure the server port
app.listen(3001, () => {
    console.log('Server runs on port 3001')
})
