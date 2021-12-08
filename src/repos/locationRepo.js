import settings from "./settings";
import { fetchIt } from "./fetch";

export default {
    async getAll() {
        return await fetchIt(`${settings.remoteURL}/locations`)
    }
}