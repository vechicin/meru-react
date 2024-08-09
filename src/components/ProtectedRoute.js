import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
    const { authToken } = useAuth();
    const router = useRouter();

    useEffect(() => {
        const isAuthPage = router.pathname === '/login' || router.pathname === '/register';
        if (!authToken && !isAuthPage) {
            router.push('/login');
        }
    }, [authToken, router]);

    return children;
}

export default ProtectedRoute;