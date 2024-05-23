import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { clearToken, getToken, setToken } from '@/common/storage/local-storage.js';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const login = async (data) => {
        setToken(data);
        navigate("/main", { replace: true });
    };

    const logout = () => {
        clearToken(null);
        navigate("/", { replace: true });
    };

    const value = useMemo(
        () => ({
            token: getToken(),
            login,
            logout
        }),
        [getToken()]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};
