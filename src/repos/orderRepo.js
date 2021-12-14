import settings from "./settings";
import { fetchIt } from "./fetch";

export default {
    async getAllHeights() {
        return await fetchIt(`${settings.remoteURL}/heights`)
    },
    async getAllLights() {
        return await fetchIt(`${settings.remoteURL}/lights`)
    },
    async getAllFlocks() {
        return await fetchIt(`${settings.remoteURL}/flocks`)
    },
    async getAllWreaths() {
        return await fetchIt(`${settings.remoteURL}/wreaths`)
    },
    async addOrder(newOrder) {
        return await fetchIt(
            `${settings.remoteURL}/orders`,
            "POST",
            JSON.stringify(newOrder)
        )
    }, 
    async delete(id) {
        return await fetch(`${settings.remoteURL}/orders/${id}`, {method: "DELETE"})
    },
    async getOrderByUserId(id) {
        return await fetchIt(`${settings.remoteURL}/orders?userId=${id}`)
    },

}