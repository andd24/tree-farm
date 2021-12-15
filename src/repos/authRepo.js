import settings from "./settings";

export default {
    async getUserByEmail(email) {
        const e = await fetch(`${settings.remoteURL}/users?email=${email}`)
        return await e.json()
    },
    async addUser(newUser) {
        const e = await fetch(`${settings.remoteURL}/users`, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(newUser)
        })
        return await e.json()
    },
    async getUsers() {
        const e = await fetch(`${settings.remoteURL}/users`)
        return await e.json()
    }
}