import settings from "./settings";

export default {
    async getAll() {
        const e = await fetch(`${settings.remoteURL}/locations`)
        return await e.json()
    },
    async get(id) {
        const e = await fetch(`${settings.remoteURL}/locations/${id}`)
        return await e.json()
    }
}