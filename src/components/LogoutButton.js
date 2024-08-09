import React from "react";
import { useAuth } from "../contexts/AuthContext";

function LogoutButton() {
    const { logout } = useAuth();

    return (
        <button
            onClick={logout}
            className="py-2 px-4 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-150 ease-in-out"
        >
            Logout
        </button>
    );
}

export default LogoutButton;