import settings from "./settings";

export default {
    async getAll() {
        const e = await fetch(`${settings.remoteURL}/users`)
        return await e.json()
    },
    async get(id) {
        const e = await fetch(`${settings.remoteURL}/users/${id}`)
        return await e.json()
    },
    async updateUser(id, editedUser) {
        const e = await fetch(`${settings.remoteURL}/users/${id}`, {
            "method": "PUT",
            "headers": {
                "Content-Type": "application/json",
            },
            "body": JSON.stringify(editedUser)
        })    
        return await e.json()
    },
}

