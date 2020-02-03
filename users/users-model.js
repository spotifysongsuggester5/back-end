const db = require("../data/dbConfig")

module.exports = {
    getUsers,
    addUser,
    updateUser,
    deleteUser,
    
}

function getUsers(){
    return db("users")
}

async function addUser(reqBody){
  const [ id ] = await db("users").insert(reqBody)
    return db("users").where("id", id).first()
}

function updateUser(id, changes) {
    return db("users")
    .where("id", id)
    .update(changes)
    .then(count => (count > 0 ? this.get(id) : null));
}

function deleteUser(id) {
    return db("users")
    .where("id", id)
    .del();
}