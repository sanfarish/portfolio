import axios from "axios"

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

export default async function visitorAPI({ method, url, body, config }) {
    try {
        const res = await axios[method](url, body, config)
        return res
    } catch (error) {
        if (error.response) {
            return error.response
        } else if (error.request) {
            return error.request
        } else {
            return { status: 400, data: { message: error.message } }
        }
    }
}
