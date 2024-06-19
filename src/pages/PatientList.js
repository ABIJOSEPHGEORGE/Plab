import React, { useState } from 'react';
import LeftMenu from '../components/LeftMenu';
import { CiSettings } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineSearch } from 'react-icons/ai';
import { FaRegCircleUser } from "react-icons/fa6";

const data = [
  { billNo: "#526589", created: "2 min ago", patient: "Nilan Memon", age: 43, amount: "₹120", status: "Complete" },
  { billNo: "#696589", created: "03:48 am", patient: "Sopan Dar", age: 11, amount: "₹420", status: "Payment" },
  { billNo: "#256584", created: "07:40 am", patient: "Radhe Hittalamani", age: 24, amount: "₹200", status: "Complete" },
  { billNo: "#526534", created: "06:42 am", patient: "Achira Nimbalkar", age: 12, amount: "₹150", status: "Result" },
  { billNo: "#526587", created: "07:13 pm", patient: "Dhruv Chaudhry", age: 30, amount: "₹110", status: "Complete" },
  { billNo: "#105986", created: "08:20 pm", patient: "Dhruv Pawar", age: 6, amount: "₹80", status: "Result" },
  { billNo: "#526587", created: "01:55 pm", patient: "Karthav Kulkarni", age: 21, amount: "₹60", status: "Complete" },
  { billNo: "#105986", created: "07:59 pm", patient: "Dakshesh Hulamani", age: 7, amount: "₹100", status: "Payment" },
  { billNo: "#526589", created: "12:23 pm", patient: "Ekapad Ara", age: 18, amount: "₹300", status: "Complete" },
  { billNo: "#526525", created: "02:34 am", patient: "Nithin Parit", age: 23, amount: "₹320", status: "Result" },
  { billNo: "#526589", created: "2 min ago", patient: "Nilan Memon", age: 43, amount: "₹120", status: "Complete" },
  { billNo: "#696589", created: "03:48 am", patient: "Sopan Dar", age: 11, amount: "₹420", status: "Payment" },
  { billNo: "#256584", created: "07:40 am", patient: "Radhe Hittalamani", age: 24, amount: "₹200", status: "Complete" },
  { billNo: "#526534", created: "06:42 am", patient: "Achira Nimbalkar", age: 12, amount: "₹150", status: "Result" },
  { billNo: "#526587", created: "07:13 pm", patient: "Dhruv Chaudhry", age: 30, amount: "₹110", status: "Complete" },
];

const Patients = () => {
  const [filter, setFilter] = useState('All');

  const filteredData = filter === 'All' ? data : data.filter(row => row.status === filter);

  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  const toggleMenu = () => {
    setIsMenuExpanded(!isMenuExpanded);
  };

  return (
    <div className="flex h-screen bg-background">
      <LeftMenu isExpanded={isMenuExpanded} toggleMenu={toggleMenu} />
      <div className="p-4 flex-1 flex flex-col overflow-hidden">
        <div className="flex justify-between items-center mb-5">
          <div className="relative w-96">
            <input
              type="text"
              placeholder="Search ..."
              className="border rounded-lg w-full h-10 px-4 placeholder:text-sm"
            />
            <AiOutlineSearch size={19} color='grey' className="absolute right-3 top-1/2 transform -translate-y-1/2" />
          </div>
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-white">
              <CiSettings size={19} color='black' />
            </div>
            <div className="p-3 rounded-full bg-white">
              <IoMdNotificationsOutline size={19} color='black' />
            </div>
            <div className="p-3 rounded-full bg-white">
              <FaRegCircleUser size={19} color='black' />
            </div>
          </div>
        </div>
        <div className='p-4'>
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-6">
              <button
                className={`text-sm ${filter === 'All' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-400'}`}
                onClick={() => setFilter('All')}
              >
                All Patients
              </button>
              <button
                className={`text-sm ${filter === 'Payment' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-400'}`}
                onClick={() => setFilter('Payment')}
              >
                Pending
              </button>
              <button
                className={`text-sm ${filter === 'Complete' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-400'}`}
                onClick={() => setFilter('Complete')}
              >
                Completed
              </button>
            </div>
            <button className="bg-blue-600 text-white px-5 py-2 text-sm rounded-lg">Add new +</button>
          </div>
          <div className="relative w-96">
            <input
              type="text"
              placeholder="Search By Name"
              className="border rounded-lg w-full h-10 px-4 placeholder:text-sm mb-2"
            />
            <AiOutlineSearch size={19} color='grey' className="absolute right-3 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>
          
        <div className="bg-white rounded-lg shadow-md p-4 overflow-auto hide-scrollbar" style={{ height: 'calc(100%)' }}>
          
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border-b p-2 text-gray-500 text-sm text-left">BILL NO</th>
                <th className="border-b p-2 text-left text-gray-500 text-sm">CREATED</th>
                <th className="border-b p-2 text-left text-gray-500 text-sm">PATIENT</th>
                <th className="border-b p-2 text-left text-gray-500 text-sm">AGE</th>
                <th className="border-b p-2 text-left text-gray-500 text-sm">AMOUNT</th>
                <th className="border-b p-2 text-left text-gray-500 text-sm">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, index) => (
                <tr key={index}>
                  <td className="border-b p-2 text-gray-500 text-md">{row.billNo}</td>
                  <td className="border-b p-2">{row.created}</td>
                  <td className="border-b p-2">{row.patient}</td>
                  <td className="border-b p-2">{row.age}</td>
                  <td className="border-b p-2">{row.amount}</td>
                  <td className="border-b p-2">
                    <span className="flex items-center text-xs">
                      <span
                        className={`w-2 h-2 rounded-full mr-2 ${
                          row.status === 'Complete'
                            ? 'bg-green-600'
                            : row.status === 'Payment'
                            ? 'bg-red-600'
                            : 'bg-yellow-600'
                        }`}
                      ></span>
                      <span
                        className={`${
                          row.status === 'Complete'
                            ? 'text-green-600'
                            : row.status === 'Payment'
                            ? 'text-red-600'
                            : 'text-yellow-600'
                        }`}
                      >
                        {row.status}
                      </span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Patients;
