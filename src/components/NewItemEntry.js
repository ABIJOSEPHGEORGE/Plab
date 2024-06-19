import React from 'react';


function NewItemEntry() {

  return (
    <div className="bg-white p-10 rounded-lg flex-grow h-full overflow-auto hide-scrollbar">
      <h2 className="text-xl font-normal mb-4">New Item Entry</h2>
      <form className="space-y-6 p-10">
        <div className='flex justify-between gap-5 w-full'>
          <input type="text" placeholder="Name" className="w-full p-3 border border-gray-100 bg-gray-100 rounded placeholder:text-sm placeholder:text-gray-500"/>
          <input type="text" placeholder="Company" className="w-full p-3 border border-gray-100 bg-gray-100 rounded placeholder:text-sm placeholder:text-gray-500"/>
        </div>
        <div className='flex justify-between gap-5 w-full'>
          <input type="text" placeholder="Chemical" className="w-full p-3 border border-gray-100 bg-gray-100 rounded placeholder:text-sm placeholder:text-gray-500"/>
          <input type="text" placeholder="Category" className="w-full p-3 border border-gray-100 bg-gray-100 rounded placeholder:text-sm placeholder:text-gray-500"/>
        </div>
        <div className='flex justify-between gap-5 w-full'>
          <input type="text" placeholder="Item Type" className="w-full p-3 border border-gray-100 bg-gray-100 rounded placeholder:text-sm placeholder:text-gray-500"/>
          <input type="text" placeholder="Package Size" className="w-full p-3 border border-gray-100 bg-gray-100 rounded placeholder:text-sm placeholder:text-gray-500"/>
        </div>
        <div className='flex justify-between gap-5 w-full'>
            <input type="text" placeholder="Cost per test" className="w-full p-3 border border-gray-100 bg-gray-100 rounded placeholder:text-sm placeholder:text-gray-500"/>
            <input type="text" placeholder="Reorder Level" className="w-full p-3 border border-gray-100 bg-gray-100 rounded placeholder:text-sm placeholder:text-gray-500"/>
            <input type="text" placeholder="Minimum" className="w-full p-3 border border-gray-100 bg-gray-100 rounded placeholder:text-sm placeholder:text-gray-500"/>
            <input type="text" placeholder="Maximum" className="w-full p-3 border border-gray-100 bg-gray-100 rounded placeholder:text-sm placeholder:text-gray-500"/>
        </div>

        <div className='flex gap-5 w-full justify-end'>
          <button type="submit" className="w-40 py-2 bg-btnblue text-white border border-gray-200 rounded-xl">Save</button>
        </div>
      </form>
    </div>
  );
}

export default NewItemEntry;
