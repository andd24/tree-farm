import settings from "./settings";
import { fetchIt } from "./fetch";

export default {
    async getAll() {
        return await fetchIt(`${settings.remoteURL}/users`)
    },
    async get(id) {
        return await fetchIt(`${settings.remoteURL}/users/${id}`)
    },
    async updateUser(editedUser) {
        return await fetchIt(
            `${settings.remoteURL}/users/${editedUser.id}`,
            "PUT",
            JSON.stringify(editedUser)
        )
    },
}