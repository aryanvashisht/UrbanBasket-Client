import React from 'react'
import Header from '../AdminHeader/Header'

function AddProduct() {
    const [formData, setFormData] = React.useState({
        name: '',
        quantity: '',
        price: '',
        discount: '',
        category: '',
        image: null
      });
      const [imagePreview, setImagePreview] = React.useState(null);
      const [errors, setErrors] = React.useState({});

      const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Product name is required';
        if (!formData.quantity || formData.quantity < 0) newErrors.quantity = 'Valid quantity is required';
        if (!formData.price || formData.price < 0) newErrors.price = 'Valid price is required';
        if (formData.discount && (formData.discount < 0 || formData.discount > 100)) {
          newErrors.discount = 'Discount must be between 0 and 100';
        }
        if (!formData.category) newErrors.category = 'Category is required';
        if (!formData.image) newErrors.image = 'Product image is required';
        return newErrors;
      };

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: '' }));
      };

      const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          if (file.type.startsWith('image/') && file.size <= 5 * 1024 * 1024) { // 5MB limit
            setFormData(prev => ({ ...prev, image: file }));
            setImagePreview(URL.createObjectURL(file));
            setErrors(prev => ({ ...prev, image: '' }));
          } else {
            setErrors(prev => ({ ...prev, image: 'Please upload a valid image (max 5MB)' }));
          }
        }
      };

      const handleSubmit = () => {
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
          return;
        }

        // Simulate API call
        const formDataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
          formDataToSend.append(key, value);
        });

        console.log('Submitting product:', Object.fromEntries(formDataToSend));
        alert('Product added successfully!');
        
        // Reset form
        setFormData({
          name: '',
          quantity: '',
          price: '',
          discount: '',
          category: '',
          image: null
        });
        setImagePreview(null);
      };

  return (
    <div>
      <Header/>
      <div className="min-h-screen bg-gray-700 p-9 pt-20 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-xl shadow-lg p-8">
              <h1 className="text-3xl font-bold mb-6">Add New Product</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Product Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none`}
                      placeholder="Enter product name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Available Quantity</label>
                    <input
                      type="number"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border ${errors.quantity ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none`}
                      placeholder="Enter quantity"
                      min="0"
                    />
                    {errors.quantity && <p className="text-red-500 text-sm mt-1">{errors.quantity}</p>}
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Price (₹)</label>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border ${errors.price ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none`}
                      placeholder="Enter price"
                      min="0"
                      step="0.01"
                    />
                    {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Discount (%)</label>
                    <input
                      type="number"
                      name="discount"
                      value={formData.discount}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border ${errors.discount ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none`}
                      placeholder="Enter discount (0-100)"
                      min="0"
                      max="100"
                      step="0.1"
                    />
                    {errors.discount && <p className="text-red-500 text-sm mt-1">{errors.discount}</p>}
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className={`w-full px-4  bg-gray-800 py-2 border ${errors.category ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none`}
                  >
                    <option value="">Select a category</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Books">Books</option>
                    <option value="Home">Home</option>
                    <option value="Milk">Milk</option>
                    <option value="Watches">Watches</option>
                    <option value="Groceries">Groceries</option>
                    <option value="Home & Living">Home & Living</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
                </div>
              </div>
              <div className="mt-6 flex justify-center">
                <div className="w-full max-w-md">
                  <label className="block text-sm font-medium mb-1 text-center">Product Image</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <input
                      type="file"
                      name="image"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                      id="image-upload"
                    />
                    <label
                      htmlFor="image-upload"
                      className="cursor-pointer block w-full py-2 px-4 bg-gray-500 rounded-lg hover:bg-gray-600"
                    >
                      {imagePreview ? 'Change Image' : 'Upload Image'}
                    </label>
                    {imagePreview && (
                      <div className="mt-4">
                        <img src={imagePreview} alt="Preview" className="w-full h-48 object-contain rounded-lg" />
                      </div>
                    )}
                    {errors.image && <p className="text-red-500 text-sm mt-2">{errors.image}</p>}
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  onClick={handleSubmit}
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Add Product
                </button>
              </div>
            </div>
          </div>
        </div>
 
    </div>
  )
}

export default AddProduct
