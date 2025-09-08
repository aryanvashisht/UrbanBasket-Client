import React from 'react'
import Header from '../AdminHeader/Header';

function AllOrders() {
      const [orders, setOrders] = React.useState([
        // Sample data for demonstration
        {
          id: 1,
          userName: 'John Doe',
          address: '123 Main St, City, Country',
          quantity: 5,
          totalPrice: 249.95,
          status: 'Pending'
        },
        {
          id: 2,
          userName: 'Jane Smith',
          address: '456 Oak Ave, Town, Country',
          quantity: 2,
          totalPrice: 99.98,
          status: 'Out for Delivery'
        }
      ]);
      const [editingId, setEditingId] = React.useState(null);
      const [editFormData, setEditFormData] = React.useState({ status: '' });
      const [errors, setErrors] = React.useState({});

      const validateForm = (formData) => {
        const newErrors = {};
        if (!formData.status) newErrors.status = 'Status is required';
        return newErrors;
      };

      const handleEditClick = (order) => {
        setEditingId(order.id);
        setEditFormData({ status: order.status });
        setErrors({});
      };

      const handleCancel = () => {
        setEditingId(null);
        setEditFormData({ status: '' });
        setErrors({});
      };

      const handleChange = (e) => {
        const { name, value } = e.target;
        setEditFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: '' }));
      };

      const handleSave = (orderId) => {
        const validationErrors = validateForm(editFormData);
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
          return;
        }

        const updatedOrder = {
          ...orders.find(o => o.id === orderId),
          status: editFormData.status
        };

        setOrders(orders.map(o => (o.id === orderId ? updatedOrder : o)));
        alert('Order status updated successfully!');
        setEditingId(null);
        setEditFormData({ status: '' });
        setErrors({});
      };

      return (
        <div>
            <Header/>
        <div className="min-h-screen bg-gray-700 p-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-800 rounded-xl shadow-lg p-8">
              <h1 className="text-3xl font-bold mb-6">Manage Order Status</h1>
              {orders.length === 0 ? (
                <p className="text-gray-600 text-center">No orders available.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {orders.map(order => (
                    <div key={order.id} className="border rounded-lg p-4  hover:shadow-md transition">
                      <h3 className="text-lg font-bold text-gray-200">{order.userName}</h3>
                      <p className="">Address: {order.address}</p>
                      <p className="">Quantity: {order.quantity}</p>
                      <p className="">Total Price: ₹{order.totalPrice.toFixed(2)}</p>
                      {editingId === order.id ? (
                        <div className="space-y-4 mt-4">
                          <div>
                            <label className="block text-sm font-medium mb-1">Order Status</label>
                            <select
                              name="status"
                              value={editFormData.status}
                              onChange={handleChange}
                              className={`w-full bg-gray-800 px-4 py-2 border ${errors.status ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none`}
                            >
                              <option value="">Select status</option>
                              <option value="Cancelled">Cancelled</option>
                              <option value="Pending">Pending</option>
                              <option value="Delivered">Delivered</option>
                              <option value="Out for Delivery">Out for Delivery</option>
                            </select>
                            {errors.status && <p className="text-red-500 text-sm mt-1">{errors.status}</p>}
                          </div>
                          <div className="flex justify-end space-x-4">
                            <button
                              onClick={handleCancel}
                              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={() => handleSave(order.id)}
                              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <p className="text-gray-500">Status: {order.status}</p>
                          <button
                            onClick={() => handleEditClick(order)}
                            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          >
                            Edit Status
                          </button>
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

export default AllOrders
