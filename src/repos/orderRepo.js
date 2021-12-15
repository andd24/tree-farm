import settings from "./settings";

export default {
    async getAllHeights() {
        const e = await fetch(`${settings.remoteURL}/heights`)
        return await e.json()
    },
    async getAllLights() {
        const e = await fetch(`${settings.remoteURL}/lights`)
        return await e.json()
    },
    async getAllFlocks() {
        const e = await fetch(`${settings.remoteURL}/flocks`)
        return await e.json()
    },
    async getAllWreaths() {
        const e = await fetch(`${settings.remoteURL}/wreaths`)
        return await e.json()
    },
    async addOrder(newOrder) {
        const e = await fetch(`${settings.remoteURL}/orders`, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
            },
            "body": JSON.stringify(newOrder)
        })
        return await e.json()
    }, 
    async delete(id) {
        return await fetch(`${settings.remoteURL}/orders/${id}`, {method: "DELETE"})
    },
    async getOrderByUserId(id) {
        const e = await fetch(`${settings.remoteURL}/orders?userId=${id}`)
        return await e.json()
    },
    async get(id) {
        const e = await fetch(`${settings.remoteURL}/orders/${id}`)
        return await e.json()
    }
}