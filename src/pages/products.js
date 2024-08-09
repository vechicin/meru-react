import { useEffect, useState, useCallback } from "react";
import { useApi } from "../utils/api";
import { useRouter } from "next/router";
import LogoutButton from "../components/LogoutButton";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [editProductId, setEditProductId] = useState(null);
    const { getProducts, createProduct, updateProduct, deleteProduct } = useApi();
    const router = useRouter();

    const fetchProducts = useCallback(async () => {
        try {
            const response = await getProducts();
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products', error);
        }
    }, [getProducts]);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const handleCreateOrUpdate = async (e) => {
        e.preventDefault();

        const product = {
            name: productName,
            description: productDescription,
            price: productPrice
        };

        try {
            if (editProductId) {
                await updateProduct(editProductId, product);
            } else {
                await createProduct(product);
            }

            fetchProducts();
            clearForm();
        } catch (error) {
            console.error('Error creating or updating product', error);
        }
    };

    const handleEdit = (product) => {
        setEditProductId(product.id);
        setProductName(product.name);
        setProductDescription(product.description);
        setProductPrice(product.price);
    };

    const handleDelete = async (id) => {
        try {
            await deleteProduct(id);
            fetchProducts();
        } catch (error) {
            console.error('Error deleting product', error);
        }
    };

    const clearForm = () => {
        setEditProductId(null);
        setProductName('');
        setProductDescription('');
        setProductPrice('');
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-black">Products</h1>
                <LogoutButton />
            </div>
            <form onSubmit={handleCreateOrUpdate} className="mb-6 bg-white p-6 rounded shadow-md">
                <h2 className="text-xl font-semibold mb-4">{editProductId ? 'Edit Product' : 'Add Product'}</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
                        Product Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        placeholder="Product Name"
                        className="w-full p-2 border border-gray-300 rounded text-black"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="description">
                        Description
                    </label>
                    <input
                        type="text"
                        id="description"
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                        placeholder="Description"
                        className="w-full p-2 border border-gray-300 rounded text-black"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="price">
                        Price
                    </label>
                    <input
                        type="number"
                        id="price"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                        placeholder="Price"
                        className="w-full p-2 border border-gray-300 rounded text-black"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    {editProductId ? 'Update Product' : 'Create Product'}
                </button>
                {editProductId && (
                    <button
                        type="button"
                        onClick={clearForm}
                        className="w-full mt-2 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                )}
            </form>
            <ul>
                {products.map(product => (
                    <li key={product.id} className="bg-white p-4 mb-4 rounded shadow-md">
                        <h2 className="text-xl font-semibold text-black">{product.name}</h2>
                        <p className="text-gray-600">{product.description}</p>
                        <p className="text-gray-800 font-bold">Price: ${product.price}</p>
                        <div className="mt-4">
                            <button
                                onClick={() => handleEdit(product)}
                                className="mr-2 py-1 px-3 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(product.id)}
                                className="py-1 px-3 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}