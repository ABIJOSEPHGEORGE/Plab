import React from 'react';
import { FiPlus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

function NewPatientEntry() {
  return (
    <div className="bg-white p-6 rounded-lg flex-grow h-full overflow-auto hide-scrollbar">
      <h2 className="text-xl font-semibold mb-4">New Patient Entry</h2>
      <form className="space-y-4">
        <div className='flex justify-between gap-2'>
          <input type="text" placeholder="Mobile Number" className="w-full p-2 border border-gray-100 bg-gray-100 rounded placeholder:text-sm placeholder:text-gray-500"/>
          <input type="text" placeholder="Name" className="w-full p-2 border border-gray-100 bg-gray-100 rounded placeholder:text-sm placeholder:text-gray-500"/>
        </div>
        <div className='flex justify-between gap-2'>
          <input type="email" placeholder="Email id" className="w-full p-2 border border-gray-100 bg-gray-100 rounded placeholder:text-sm placeholder:text-gray-500"/>
          <input type="date" placeholder="Date of birth" className="w-full p-2 border border-gray-100 bg-gray-100 rounded placeholder:text-sm placeholder:text-gray-500"/>
        </div>
        <div className='flex justify-between gap-2'>
          <div className='flex justify-between gap-2'>
            <input type="number" placeholder="Age" className="w-full p-2 border border-gray-100 bg-gray-100 rounded placeholder:text-sm placeholder:text-gray-500"/>
            <select className="w-full p-2 border border-gray-100 bg-gray-100 rounded text-sm">
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <input type="text" placeholder="Place" className="w-full p-2 border border-gray-100 bg-gray-100 rounded placeholder:text-sm placeholder:text-gray-500"/>
        </div>
        <div className='flex justify-between gap-2'>
          <input type="text" placeholder="Ref by lab" className="w-full p-2 border border-gray-100 bg-gray-100 rounded placeholder:text-sm placeholder:text-gray-500"/>
          <input type="text" placeholder="Ref by doctor" className="w-full p-2 border border-gray-100 bg-gray-100 rounded placeholder:text-sm placeholder:text-gray-500"/>
        </div>

        <div className='flex justify-between'>
          <div className="flex justify-between gap-5">
            <label className="flex items-center">
              <input type="radio" name="status" value="waiting" className="mr-2"/> Waiting
            </label>
            <label className="flex items-center">
              <input type="radio" name="status" value="urgent" className="mr-2"/> Urgent
            </label>
          </div>
          <div className='flex flex-1 justify-between gap-4 ml-7'>
            <select className="w-full p-2 border border-gray-300 bg-gray-100 rounded text-sm">
              <option>Select Syringe</option>
            </select>
            <button type="button" className="w-3/4 py-2 bg-btnblue text-white rounded">Generate Privilege card</button>
          </div>
        </div>
        
        
        <div className='flex flex-col gap-2'>
      <div className="flex justify-between">
        <h3 className="font-semibold text-lg">Particulars</h3>
        <div className='p-2 rounded-lg bg-blue-600'>
          <FiPlus size={15} color='white' />
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg">
        <div className="grid grid-cols-[3fr_1fr_0.4fr] bg-gray-300 p-1 gap-4">
          <span>Test Name</span>
          <span>Amount</span>
          <span></span>
        </div>
        
        <div className='p-2 space-y-4'>
        <div className="grid grid-cols-[3fr_1fr_0.3fr] gap-4">
          <p className='w-full'>Rheumatoid Factor (RF)</p>
          <p className='text-left'>300</p>
          <p className='text-right'><MdDelete size={20} color='red' /></p>
        </div>
        <div className="grid grid-cols-[3fr_1fr_0.3fr] gap-4">
          <p className='w-full'>Complete Blood Count</p>
          <p className='text-left'>300</p>
          <p className='text-right'><MdDelete size={20} color='red' /></p>
        </div>
        <div className="grid grid-cols-[3fr_1fr_0.3fr] gap-4">
          <p className='w-full'>SGPT</p>
          <p className='text-left'>300</p>
          <p className='text-right'><MdDelete size={20} color='red' /></p>
        </div>
        <div className="grid grid-cols-[3fr_1fr_0.3fr] gap-4">
          <p className='w-full'>Urine Examination</p>
          <p className='text-left'>300</p>
          <p className='text-right'><MdDelete size={20} color='red' /></p>
        </div>
        <div className="grid grid-cols-[3fr_1fr_0.3fr] gap-4">
          <p className='w-full'>Urine Culture</p>
          <p className='text-left'>300</p>
          <p className='text-right'><MdDelete size={20} color='red' /></p>
        </div>
        </div>
        
        {/* Repeat as needed */}
      </div>
    </div>
        <div className='flex justify-between gap-5 w-full'>
          <button type="submit" className="w-64 py-2 bg-white text-btnblue border border-gray-200 rounded-xl ml-auto">Send Invoice</button>
          <button type="button" className="w-64 py-2 bg-btnblue text-white rounded-xl">Create Invoice</button>
        </div>
      </form>
    </div>
  );
}

export default NewPatientEntry;
