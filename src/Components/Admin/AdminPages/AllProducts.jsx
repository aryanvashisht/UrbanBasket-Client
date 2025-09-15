import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../AdminHeader/Header';

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({});
  const [errors, setErrors] = useState({});

  // Fetch products from backend
  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/products/allProducts`, {
        withCredentials: true
      });
      setProducts(res.data.Products || []);
      console.log(res.data.Products);
      console.log(res.data.message);
      
    } catch (error) {
      console.error('Error fetching products:', error);
      setErrors({ fetch: error.response?.data.message || 'Failed to fetch products' });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const validateForm = (formData) => {
    const newErrors = {};
    if (!formData.available || formData.available < 1) {
      newErrors.available = 'Available quantity must be 1 or greater';
    }
    if (!formData.price || formData.price <= 0) {
      newErrors.price = 'Price must be greater than 0';
    }
    if (formData.discount && (formData.discount < 0 || formData.discount > 100)) {
      newErrors.discount = 'Discount must be between 0 and 100';
    }
    return newErrors;
  };

  const handleEditClick = (product) => {
    setEditingId(product._id);
    setEditFormData({
      available: product.available,
      price: product.price,
      discount: product.discount
    });
    setErrors({});
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditFormData({});
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSave = async (productId) => {
    const validationErrors = validateForm(editFormData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const res = await axios.put(`${import.meta.env.VITE_API_URL}/product/updateProduct/${productId}`, {
        price: editFormData.price,
        available: editFormData.available,
        discount: editFormData.discount || 0
      }, {
        withCredentials: true
      });
      setProducts(products.map(p => (p._id === productId ? { ...p, ...res.data.product } : p)));
      alert('Product updated successfully!');
      setEditingId(null);
      setEditFormData({});
      setErrors({});
    } catch (error) {
      console.error('Error updating product:', error);
      setErrors({ api: error.response?.data.message || 'Failed to update product' });
    }
  };

  const handleDelete = async (productId) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;

    try {
      const res = await axios.delete(`${import.meta.env.VITE_API_URL}/product/deleteProduct/${productId}`, {
        withCredentials: true
      });
      if (res.data.success) {
        setProducts(products.filter(p => p._id !== productId));
        alert('Product deleted successfully!');
      }
      
    } catch (error) {
      console.error('Error deleting product:', error);
      setErrors({ api: error.response?.data.message || 'Failed to delete product' });
    }
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-700 p-6 pt-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-800 rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-6">Product List</h1>
            {errors.fetch && <p className="text-red-500 text-center">{errors.fetch}</p>}
            {errors.api && <p className="text-red-500 text-center">{errors.api}</p>}
            {products.length === 0 ? (
              <p className="text-gray-500 text-center">No products available.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(product => (
                  <div key={product._id} className="border rounded-lg p-4 bg-gray-800 hover:shadow-md transition">
                    {editingId === product._id ? (
                      <div className="space-y-4">
                        <img src={`http://localhost:3000/${product.displayimage}`} alt={product.name} className="w-full h-40 object-contain rounded-lg mb-4" />
                        <div>
                          <label className="block text-sm font-medium mb-1">Available Quantity</label>
                          <input
                            type="number"
                            name="available"
                            value={editFormData.available}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border ${errors.available ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none`}
                            placeholder="Enter quantity"
                            min="1"
                          />
                          {errors.available && <p className="text-red-500 text-sm mt-1">{errors.available}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Price (₹)</label>
                          <input
                            type="number"
                            name="price"
                            value={editFormData.price}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border ${errors.price ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none`}
                            placeholder="Enter price"
                            min="1"
                            step="0.01"
                          />
                          {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Discount (%)</label>
                          <input
                            type="number"
                            name="discount"
                            value={editFormData.discount}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border ${errors.discount ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none`}
                            placeholder="Enter discount (0-100)"
                            min="0"
                            max="100"
                            step="0.1"
                          />
                          {errors.discount && <p className="text-red-500 text-sm mt-1">{errors.discount}</p>}
                        </div>
                        <div className="flex justify-end space-x-4">
                          <button
                            onClick={handleCancel}
                            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => handleSave(product._id)}
                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <img src={`http://localhost:3000/product/images/product_1757935227771.png`} alt={product.name} className="w-full h-50 object-contain rounded-lg mb-4" />
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        <p className="">Quantity: {product.available}</p>
                        <p className="">Price: ₹{product.price.toFixed(2)}</p>
                        <p className="">Discount: {product.discount}%</p>
                        <p className="">Category: {product.category}</p>
                        <div className="flex justify-end space-x-4 mt-4">
                          <button
                            onClick={() => handleEditClick(product)}
                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(product._id)}
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                          >
                            Delete
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
