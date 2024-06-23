import HTTP from "@/services/base-api-service"

export function signIn(params) {
    return HTTP.post("public/sign_in", params)
}

export function signUp(params) {
    return HTTP.post("public/sign_up", params)
}

