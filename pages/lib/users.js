


export async function getUsers(name) {
    const allUsers = await fetch('https://jsonplaceholder.typicode.com/users');
    let convertedUsers = await allUsers.json()
    return name ?  convertedUsers.find(user => user.name == name) : convertedUsers
}

export async function getAllUsersNames() {
    return new Promise((response) => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(data => data.json())
        .then(data => {
            response(data.map(user => {
                return {
                    params: {
                        name: user.name.toString()
                    }
                }
            }))
        })
    })
}