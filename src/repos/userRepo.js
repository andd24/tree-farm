import settings from "./settings";

export default {
    async getAll() {
        return await fetchIt(`${Settings.remoteURL}/users`)
    },
    async getUserById() {

    }
}