import React from 'react'

const Orders = () => {
  return (
   <div className='content-between mt-9 mx-auto center w-[90%]'>
     <div class="overflow-x-auto">
  <table class="min-w-full border border-gray-300 text-sm ">
    <thead class="bg-gray-200 text-gray-700">
      <tr>
        <th class="border px-4 py-2 text-left">Order ID</th>
        <th class="border px-4 py-2 text-left">Customer</th>
        <th class="border px-4 py-2 text-left">Date</th>
        <th class="border px-4 py-2 text-left">Items</th>
        <th class="border px-4 py-2 text-left">Total</th>
        <th class="border px-4 py-2 text-left">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr class="hover:bg-gray-600">
        <td class="border px-4 py-2">#1001</td>
        <td class="border px-4 py-2">karan</td>
        <td class="border px-4 py-2">2025-08-19</td>
        <td class="border px-4 py-2">2 (Shoes, Bag)</td>
        <td class="border px-4 py-2">₹2500</td>
        <td class="border px-4 py-2 text-green-600 font-semibold">Delivered</td>
      </tr>
      <tr class="hover:bg-gray-600">
        <td class="border px-4 py-2">#1002</td>
        <td class="border px-4 py-2">Rohan Sharma</td>
        <td class="border px-4 py-2">2025-08-18</td>
        <td class="border px-4 py-2">1 (Watch)</td>
        <td class="border px-4 py-2">₹1800</td>
        <td class="border px-4 py-2 text-yellow-600 font-semibold">Pending</td>
      </tr>
      <tr class="hover:bg-gray-600">
        <td class="border px-4 py-2">#1003</td>
        <td class="border px-4 py-2">Simran Kaur</td>
        <td class="border px-4 py-2">2025-08-17</td>
        <td class="border px-4 py-2">3 (Dress, Shoes, Perfume)</td>
        <td class="border px-4 py-2">₹4200</td>
        <td class="border px-4 py-2 text-blue-600 font-semibold">Shipped</td>
      </tr>
    </tbody>
  </table>
</div>
   </div>

  )
}

export default Orders
