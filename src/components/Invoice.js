import React from 'react';

function Invoice() {
  return (
    <div className="bg-white p-6 rounded-xl overflow-auto hide-scrollbar">
      <div className='flex justify-between pb-4'>
        <span className="text-2xl font-normal text-blue-600">Invoice #324235</span>
        <span className='font-normal text-gray-500'>12/4/2024</span>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className=''>Name : Aviraj Swaminathan</span>
          <span>45 years</span>
        </div>
        <span className='text-sm text-gray-500'>Phone : 9573839393</span>
      </div>

      <div className="mt-6">
        <div className='flex justify-between'>
          <div>
          </div>
          <div className='flex flex-col gap-1'>
            <div className='flex justify-between'>
              <span className='text-gray-500'>Total:</span>
              <span className='text-gray-500'>670</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-gray-500'>Discount:</span>
              <span className='text-gray-500'>70</span>
            </div>
            <div className='flex justify-between font-semibold space-x-24'>
              <span>Grand Total:</span>
              <span>600</span>
            </div>
            <div className='flex justify-between'>
              <span  className='text-gray-500'>Advance:</span>
              <span  className='text-gray-500'>500</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-red-500'>Balance:</span>
              <span className='text-red-500'>100</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Invoice;
