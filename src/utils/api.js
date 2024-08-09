import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
import { useCallback } from "react";

const api = axios.create({
    baseURL: 'http://127.0.0.1:3000/',
});

export function useApi() {
    const { authToken } = useAuth();

    api.interceptors.request.use(config => {
        if (authToken) {
            config.headers.Authorization = `Bearer ${authToken}`;
        }
        return config;
    });

    const getProducts = useCallback(async () => {
        return api.get('/products');
    }, [authToken]);

    const createProduct = useCallback(async (product) => {
        return api.post('/products', product);
    }, [authToken]);

    const updateProduct = useCallback(async (id, product) => {
        return api.put(`/products/${id}`, product);
    }, [authToken]);

    const deleteProduct = useCallback(async (id) => {
        return api.delete(`/products/${id}`);
    }, [authToken]);

    return {
        getProducts,
        createProduct,
        updateProduct,
        deleteProduct,
    };
}