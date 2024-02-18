import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const checkAuthStatus = () => {
        //best way to check is using jwt token
        const token = localStorage.getItem("token");
        if (!token) {
            return Promise.reject("Not authenticated");
        }
        return Promise.resolve("Authenticated");
    };

    useEffect(() => {
        // Simulate checking authentication status
        checkAuthStatus()
            .then((result) => {
                setIsAuthenticated(true);
            })
            .catch((error) => {
                setIsAuthenticated(false);
                console.error(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    // Placeholder for auth check logic
    const login = () => {
        setIsAuthenticated(true);
        localStorage.setItem("token", "123");
    };
    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider
            value={{ isAuthenticated, isLoading, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
};
