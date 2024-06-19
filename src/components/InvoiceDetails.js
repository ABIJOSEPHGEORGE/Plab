import React from 'react';
import {useState} from 'react';

const data = [
  { slno: "01", name: "Syringe 2ml", batch: "B-25hy56", exp: "05/08/2025", qty: "1000", free: "2", rate:"25", amount: "150", mrp:"300",  discount:"2%" },
  { slno: "02", name: "Syringe 5ml", batch: "B-25hy56", exp: "05/08/2025", qty: "1000", free: "2", rate:"25", amount: "150", mrp:"300",  discount:"2%" },
  { slno: "01", name: "Syringe 2ml", batch: "B-25hy56", exp: "05/08/2025", qty: "1000", free: "2", rate:"25", amount: "150", mrp:"300",  discount:"2%" },
  { slno: "02", name: "Syringe 5ml", batch: "B-25hy56", exp: "05/08/2025", qty: "1000", free: "2", rate:"25", amount: "150", mrp:"300",  discount:"2%" },
  { slno: "01", name: "Syringe 2ml", batch: "B-25hy56", exp: "05/08/2025", qty: "1000", free: "2", rate:"25", amount: "150", mrp:"300",  discount:"2%" },
];

function InvoiceDetails() {
  const [filter, setFilter] = useState('All');

  const filteredData = filter === 'All' ? data : data.filter(row => row.status === filter);
  return (
    <div className="p-10 rounded-lg flex-grow h-full overflow-auto hide-scrollbar">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">#INV-0001</h2>
      
      <div className="flex gap-6">
        <div className="w-3/4 bg-white rounded-lg p-5">
          <div className='flex justify-between mb-5'>
              <h3 className="text-lg font-sm">Supplier details</h3>
              <span className="flex items-center justify-center text-xs bg-red-200 w-16 h-5 rounded">
                  <span className='w-2 h-2 rounded-full mr-2 bg-red-500'></span>
                  <span className='text-red-500'>Debit</span>
              </span>
          </div>
          <div className='mb-5'>
              <p className='text-xs'>Name :</p>
              <p className='text-sm'>MediCo Innovations</p>
          </div>
          
          <div className='flex justify-between'>
              
              <div className='border-l pl-2'>
                  <p className='text-xs text-gray-500'>Date :</p>
                  <p className='text-sm'>8 Sep, 2020</p>
              </div>

              <div className='border-l pl-2'>
                  <p className='text-xs text-gray-500'>Purchase No :</p>
                  <p className='text-sm'>SL-ABC/1030/09-23</p>
              </div>

              <div className='border-l pl-2'>
                  <p className='text-xs text-gray-500'>Amount :</p>
                  <p className='text-sm'>₹5,10,010</p>
              </div>

              <div className='border-l pl-2'>
                  <p className='text-xs text-gray-500'>Total Due :</p>
                  <p className='text-sm text-red-500'>₹5,30,010</p>
              </div>
          </div>
        </div>
        <div className="w-2/5 bg-white rounded-lg p-5">
            <div className='flex justify-between mb-5'>
                <h3 className="text-lg font-sm">History</h3>
            </div>
            <div className='flex justify-between mb-5'>
                <div className='mr-auto'>
                    <p className='text-xs text-gray-500'>Last Purchase Date :</p>
                    <p className='text-sm'>8 Sep, 2020</p>
                </div>
                <div className='mr-auto'>
                    <p className='text-xs text-gray-500'>Last Payment Date :</p>
                    <p className='text-sm'>8 Sep, 2020</p>
                </div>
            </div>
            

            <div className='flex justify-between mb-5'>
                <div className='mr-auto'>
                    <p className='text-xs text-gray-500'>Last Purchase Amount :</p>
                    <p className='text-sm'>₹5,30,010</p>
                </div>
                <div className='mr-auto'>
                    <p className='text-xs text-gray-500'>Last Payment Amount :</p>
                    <p className='text-sm'>₹5,30,010</p>
                </div>
            </div>
        </div>
      </div>

      <div className='flex flex-col h-auto bg-white rounded-lg mt-5 p-4'>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b p-2 text-gray-500 text-md font-normal text-left">Sl</th>
              <th className="border-b p-2 text-left text-gray-500 font-normal text-md">Product</th>
              <th className="border-b p-2 text-left text-gray-500 font-normal text-md">Batch</th>
              <th className="border-b p-2 text-left text-gray-500 font-normal text-md">Expiry</th>
              <th className="border-b p-2 text-left text-gray-500 font-normal text-md">Quantity</th>
              <th className="border-b p-2 text-left text-gray-500 font-normal text-md">Free</th>
              <th className="border-b p-2 text-left text-gray-500 font-normal text-md">Rate</th>
              <th className="border-b p-2 text-left text-gray-500 font-normal text-md">Amount</th>
              <th className="border-b p-2 text-left text-gray-500 font-normal text-md">MRP</th>
              <th className="border-b p-2 text-left text-gray-500 font-normal text-md">Discount</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index}>
                <td className="font-normal text-gray-600 text-md p-3">{row.slno}</td>
                <td className="font-normal text-gray-600 text-md p-3">{row.name}</td>
                <td className="font-normal text-gray-600 text-md p-3">{row.batch}</td>
                <td className="font-normal text-gray-600 text-md p-3">{row.exp}</td>
                <td className="font-normal text-gray-600 text-md p-3">{row.qty}</td>
                <td className="font-normal text-gray-600 text-md p-3">{row.free}</td>
                <td className="font-normal text-gray-600 text-md p-3">{row.rate}</td>
                <td className="font-normal text-gray-600 text-md p-3">{row.amount}</td>
                <td className="font-normal text-gray-600 text-md p-3">{row.mrp}</td>
                <td className="font-normal text-gray-600 text-md p-3">{row.discount}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
        <div className='flex justify-between p-5 mt-5'>
            <div className="flex flex-row items-center gap-2">
                <p className='text-sm text-gray-400'>Showing</p>
                <select className="p-1 border border-gray-200 bg-gray-100 rounded text-sm">
                    <option>01</option>
                </select>
                <p className='text-sm text-gray-400'>of 03</p>
            </div>
            <div className='flex gap-0.5'>
                <span className='bg-gray-200 flex items-center justify-center w-7 h-7 rounded-md'>-</span>
                <span className='bg-btnblue flex items-center justify-center w-7 h-7 rounded-md'>1</span>
                <span className='bg-gray-200 flex items-center justify-center w-7 h-7 rounded-md'>+</span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceDetails;
