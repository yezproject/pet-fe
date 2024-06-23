import HTTP from "@/services/base-api-service"

function signIn(params) {
    return HTTP.post("public/sign_in", params)
}

function signUp(params) {
    return HTTP.post("public/sign_up", params)
}

export default class JoinService {
    static signIn = signIn
    static signUp = signUp
}