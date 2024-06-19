import React from 'react';
import {useState} from 'react';
import { FiPlus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import { CiCreditCard2 } from "react-icons/ci";


const data = [
  { slno: "01", name: "Syringe 2ml", batch: "B-25hy56", exp: "05/08/2025", qty: "1000", free: "2", rate:"25", amount: "150", mrp:"300",  discount:"2%" },
  { slno: "02", name: "Syringe 5ml", batch: "B-25hy56", exp: "05/08/2025", qty: "1000", free: "2", rate:"25", amount: "150", mrp:"300",  discount:"2%" },
];

function NewPurchaseEntry() {

  const [filter, setFilter] = useState('All');

  const filteredData = filter === 'All' ? data : data.filter(row => row.status === filter);
    const [selectedButton, setSelectedButton] = useState(null);
    const [remarks, setRemarks] = useState('');
    const maxCharacters = 225;
  
    const handleButtonClick = (buttonType) => {
      setSelectedButton(buttonType);
    };
  
    const handleRemarksChange = (event) => {
      if (event.target.value.length <= maxCharacters) {
        setRemarks(event.target.value);
      }
    };

  return (
    <div className="bg-white p-10 rounded-lg flex-grow h-full overflow-auto hide-scrollbar">
      <h2 className="text-xl font-normal mb-4">New Purchase Entry</h2>
      <p className="text-md mb-4">Supplier Details</p>
      <form className="space-y-4 p-2">
        <div className='flex justify-between gap-2 w-full'>
          <input type="text" placeholder="Supplier Name" className="w-full p-2 border border-gray-100 bg-gray-100 rounded placeholder:text-sm placeholder:text-gray-500"/>
          <input type="text" placeholder="Invoice Number" className="w-full p-2 border border-gray-100 bg-gray-100 rounded placeholder:text-sm placeholder:text-gray-500"/>
          <input type="text" placeholder="Purchase  Number" className="w-full p-2 border border-gray-100 bg-gray-100 rounded placeholder:text-sm placeholder:text-gray-500"/>
        </div>
        <div className='flex justify-between w-full gap-2'>
          <div className='flex justify-between w-8/12 gap-2'>
            <input type="date" placeholder="Date of birth" className="w-full p-2 border border-gray-100 bg-gray-100 rounded placeholder:text-sm placeholder:text-gray-500"/>
            <input type="number" placeholder="Amount" className="w-full p-2 border border-gray-100 bg-gray-100 rounded placeholder:text-sm placeholder:text-gray-500"/>
          </div>
          <div className='flex justify-between w-4/12 gap-2'>
            <button 
              type="button" 
              className={`w-1/2 py-2 flex items-center justify-center rounded ${selectedButton === 'debit' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-black'}`} 
              onClick={() => handleButtonClick('debit')}
            >
              <IoWalletOutline className="mr-2" /> Debit
            </button>
            <button 
              type="button" 
              className={`w-1/2 py-2 flex items-center justify-center rounded ${selectedButton === 'credit' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-black'}`} 
              onClick={() => handleButtonClick('credit')}
            >
              <CiCreditCard2 className="mr-2" /> Credit
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-1 w-8/12 pr-2">
          <textarea
            rows="5"
            value={remarks}
            onChange={handleRemarksChange}
            placeholder="Remarks"
            className="w-full p-2 border border-gray-100 bg-gray-100 rounded placeholder:text-sm placeholder:text-gray-500"
          />
          <div className="text-right text-sm text-gray-500">
            {maxCharacters - remarks.length} characters remaining
          </div>
        </div>

        <div className='flex flex-col gap-2'>
            <div className="flex justify-between items-center">
                <h3 className="text-lg">Products</h3>
                <div className='p-2 rounded-lg bg-blue-600'>
                    <FiPlus size={15} color='white' />
                </div>
            </div>

            <div className="rounded-lg mb-4">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-2 text-gray-500 text-sm font-normal text-left">Sl</th>
                  <th className="p-2 text-left text-gray-500 font-normal text-sm">Product</th>
                  <th className="p-2 text-left text-gray-500 font-normal text-sm">Batch</th>
                  <th className="p-2 text-left text-gray-500 font-normal text-sm">Expiry</th>
                  <th className="p-2 text-left text-gray-500 font-normal text-sm">Quantity</th>
                  <th className="p-2 text-left text-gray-500 font-normal text-sm">Free</th>
                  <th className="p-2 text-left text-gray-500 font-normal text-sm">Rate</th>
                  <th className="p-2 text-left text-gray-500 font-normal text-sm">Amount</th>
                  <th className="p-2 text-left text-gray-500 font-normal text-sm">MRP</th>
                  <th className="p-2 text-left text-gray-500 font-normal text-sm">Discount</th>
                  <th className="p-2 text-left text-gray-500 font-normal text-sm"></th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row, index) => (
                  <tr key={index}>
                    <td className=" text-gray-500 font-normal text-sm p-2">{row.slno}</td>
                    <td className="font-normal text-sm p-2">{row.name}</td>
                    <td className="font-normal text-sm p-2">{row.batch}</td>
                    <td className="font-normal text-sm p-2">{row.exp}</td>
                    <td className="font-normal text-sm p-2">{row.qty}</td>
                    <td className="font-normal text-sm p-2">{row.free}</td>
                    <td className="font-normal text-sm p-2">{row.rate}</td>
                    <td className="font-normal text-sm p-2">{row.amount}</td>
                    <td className="font-normal text-sm p-2">{row.mrp}</td>
                    <td className="font-normal text-sm p-2">{row.discount}</td>
                    <td>
                      <span className="flex items-center justify-center w-6 h-6 bg-red-200 rounded-lg">
                        <MdDelete size={15} color='red' />
                      </span>
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>

                
            </div>
        </div>


        <div className='flex justify-between gap-5 w-full'>
          <button type="submit" className="w-40 py-2 bg-btnblue text-white border border-gray-200 rounded-xl ml-auto">Save</button>
        </div>
      </form>
    </div>
  );
}

export default NewPurchaseEntry;
