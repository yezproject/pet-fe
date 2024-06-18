import { createContext, useContext, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { clearToken, clearUser, getToken, getUser, setToken, setUser } from "@/common/storage/local-storage.js"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const login = async (data) => {
        setToken(data)
        navigate("/", { replace: true })
    }

    const logout = () => {
        clearToken(null)
        navigate("/auth/sign-in", { replace: true })
    }

    const cacheUser = async (data, remember) => {
        if(!remember) {
            clearUser()
        } else {
            if(getUser()) clearUser()
            setUser(data)
        }
    }

    const value = useMemo(
        () => ({
            token: getToken(),
            login,
            logout,
            cacheUser
        }),
        [getToken()]
    )

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext)
}
