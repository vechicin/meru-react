import { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import cookie from 'cookie';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [authToken, setAuthToken] = useState(null);
    const [user, setUser] = useState(null);

    const register = async (username, password) => {
        try {
            const response = await axios.post('http://127.0.0.1:3000/users', {
                user: { username, password },
            });
        } catch (error) {
            console.error('Error registering', error);
        }
    };

    useEffect(() => {
        const cookies = cookie.parse(document.cookie);
        const token = cookies.authToken;
        if (token) {
            setAuthToken(token);
        }
    }, []);

    useEffect(() => {
        if (authToken) {
            const decodedToken = jwtDecode(authToken);
            setUser(decodedToken);
        } else {
            setUser(null);
        }
    }, [authToken]);

    const logout = async () => {
        try {
            await axios.post('http://127.0.0.1:3000/logout', {}, {
                headers: { Authorization: `Bearer ${authToken}` }
            });
        } catch (error) {
            console.error('Error logging out', error);
        } finally {
            document.cookie = cookie.serialize('authToken', '', { path: '/', maxAge: -1});

            setAuthToken(null);
            window.location.href = '/login';
        }
    };

    return (
        <AuthContext.Provider value={{ authToken, setAuthToken, user, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}