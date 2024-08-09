import { useEffect } from "react";
import { useRouter } from "next/router";
import { AuthProvider } from "../contexts/AuthContext";
import '../app/globals.css';
import ProtectedRoute from "../components/ProtectedRoute";

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        if (router.pathname === '/') {
            router.push('/register');
        }
    }, [router]);

    return (
        <AuthProvider>
            <ProtectedRoute>
                <Component {...pageProps} />
            </ProtectedRoute>
        </AuthProvider>
    );
}

export default MyApp