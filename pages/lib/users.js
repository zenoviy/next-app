


export async function getUsers(id) {
    const allUsers = await fetch('https://jsonplaceholder.typicode.com/users');
    let convertedUsers = await allUsers.json()
    return id ?  convertedUsers.find(user => user.id == id) : convertedUsers
}

export async function getAllUsersIds() {
    return new Promise((response) => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(data => data.json())
        .then(data => {
            response(data.map(user => {
                return {
                    params: {
                        id: user.id.toString()
                    }
                }
            }))
        })
    })
}