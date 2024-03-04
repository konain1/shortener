
const userSessionIdMap = new Map()

function setUser(id,user){
    return userSessionIdMap.set(id,user)
}

function getUser(id){
    return userSessionIdMap.get(id)
}

module.exports = {setUser,getUser}