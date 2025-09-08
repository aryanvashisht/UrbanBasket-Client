import React from 'react'
import Header from '../AdminHeader/Header'

function AllProducts() {
     const [products, setProducts] = React.useState([
        // Sample data for demonstration
        {
          id: 1,
          name: 'Sample Product',
          quantity: 10,
          price: 99.99,
          discount: 10,
          category: 'Electronics',
          image: 'https://via.placeholder.com/150'
        },
        {
          id: 11,
          name: 'Sample Product',
          quantity: 10,
          price: 99.99,
          discount: 10,
          category: 'Electronics',
          image: 'https://via.placeholder.com/150'
        }
      ]);
      const [editingId, setEditingId] = React.useState(null);
      const [editFormData, setEditFormData] = React.useState({});
      const [imagePreview, setImagePreview] = React.useState(null);
      const [errors, setErrors] = React.useState({});

      const validateForm = (formData) => {
        const newErrors = {};
        if (!formData.quantity || formData.quantity < 0) newErrors.quantity = 'Valid quantity is required';
        if (!formData.price || formData.price < 0) newErrors.price = 'Valid price is required';
        if (formData.discount && (formData.discount < 0 || formData.discount > 100)) {
          newErrors.discount = 'Discount must be between 0 and 100';
        }
        return newErrors;
      };

      const handleEditClick = (product) => {
        setEditingId(product.id);
        setEditFormData({
          quantity: product.quantity,
          price: product.price,
          discount: product.discount,
          image: null
        });
        setImagePreview(product.image);
        setErrors({});
      };

      const handleCancel = () => {
        setEditingId(null);
        setEditFormData({});
        setImagePreview(null);
        setErrors({});
      };

      const handleChange = (e) => {
        const { name, value } = e.target;
        setEditFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: '' }));
      };

      const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          if (file.type.startsWith('image/') && file.size <= 5 * 1024 * 1024) { // 5MB limit
            setEditFormData(prev => ({ ...prev, image: file }));
            setImagePreview(URL.createObjectURL(file));
            setErrors(prev => ({ ...prev, image: '' }));
          } else {
            setErrors(prev => ({ ...prev, image: 'Please upload a valid image (max 5MB)' }));
          }
        }
      };

      const handleSave = (productId) => {
        const validationErrors = validateForm(editFormData);
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
          return;
        }

        const updatedProduct = {
          ...products.find(p => p.id === productId),
          quantity: editFormData.quantity,
          price: editFormData.price,
          discount: editFormData.discount,
          image: editFormData.image ? URL.createObjectURL(editFormData.image) : imagePreview
        };

        setProducts(products.map(p => (p.id === productId ? updatedProduct : p)));
        alert('Product updated successfully!');
        setEditingId(null);
        setEditFormData({});
        setImagePreview(null);
        setErrors({});
      };


      return (
       <div>
        <Header/>
       <div className="min-h-screen bg-gray-700 p-6 pt-20">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-800 rounded-xl shadow-lg p-8">
              <h1 className="text-3xl font-bold mb-6">Product List</h1>
              {products.length === 0 ? (
                <p className="text-gray-500 text-center">No products available.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map(product => (
                    <div key={product.id} className="border rounded-lg p-4 bg-gray-800 hover:shadow-md transition">
                      {editingId === product.id ? (
                        <div className="space-y-4">
                          <img src={imagePreview} alt={product.name} className="w-full h-40 object-contain rounded-lg mb-4" />
                          <div>
                            <label className="block text-sm font-medium  mb-1">Available Quantity</label>
                            <input
                              type="number"
                              name="quantity"
                              value={editFormData.quantity}
                              onChange={handleChange}
                              className={`w-full px-4 py-2 border ${errors.quantity ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none`}
                              placeholder="Enter quantity"
                              min="0"
                            />
                            {errors.quantity && <p className="text-red-500 text-sm mt-1">{errors.quantity}</p>}
                          </div>
                          <div>
                            <label className="block text-sm font-medium  mb-1">Price ($)</label>
                            <input
                              type="number"
                              name="price"
                              value={editFormData.price}
                              onChange={handleChange}
                              className={`w-full px-4 py-2 border ${errors.price ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none`}
                              placeholder="Enter price"
                              min="0"
                              step="0.01"
                            />
                            {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
                          </div>
                          <div>
                            <label className="block text-sm font-medium  mb-1">Discount (%)</label>
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
                          <div>
                            <label className="block text-sm font-medium  mb-1">Product Image</label>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                              <input
                                type="file"
                                name="image"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                                id={`image-upload-${product.id}`}
                              />
                              <label
                                htmlFor={`image-upload-${product.id}`}
                                className="cursor-pointer block w-full py-2 px-4 bg-gray-100  rounded-lg hover:bg-gray-200"
                              >
                                {imagePreview ? 'Change Image' : 'Upload Image'}
                              </label>
                              {errors.image && <p className="text-red-500 text-sm mt-2">{errors.image}</p>}
                            </div>
                          </div>
                          <div className="flex justify-end space-x-4">
                            <button
                              onClick={handleCancel}
                              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={() => handleSave(product.id)}
                              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <img src={product.image} alt={product.name} className="w-full h-50 object-contain rounded-lg mb-4" />
                          <h3 className="text-lg font-semibold">{product.name}</h3>
                          <p className="">Quantity: {product.quantity}</p>
                          <p className="">Price: ₹{product.price.toFixed(2)}</p>
                          <p className="">Discount: {product.discount}%</p>
                          <p className="">Category: {product.category}</p>
                          {/* <button
                            onClick={() => handleEditClick(product)}
                            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          >
                            Edit
                          </button> */}
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

export default AllProducts
