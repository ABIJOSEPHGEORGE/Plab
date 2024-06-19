import React, { useState } from 'react';
import LeftMenu from '../components/LeftMenu';
import { CiSettings } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineSearch } from 'react-icons/ai';
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosArrowDropright, IoIosArrowDropdown } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const data = [
  { testid: "583", name: "Rheumatoid Factor (RF)", section: "Hematology", amount: "₹120", unit: "mg/dL", normal: "18 - 48 mg/dL" },
  { testid: "584", name: "HIV Antibody Test", section: "Hematology", amount: "₹420", unit: "mg/dL", normal: "18 - 48 mg/dL" },
  { testid: "585", name: "Venous Blood Gas (VBG)", section: "Hematology", amount: "₹200", unit: "mg/dL", normal: "18 - 48 mg/dL" },
  { testid: "586", name: "Human Chorionic Gonadotropin (hCG)", section: "Hematology", amount: "₹150", unit: "mg/dL", normal: "18 - 48 mg/dL" },
  { testid: "587", name: "Bllod Sugar Fasting", section: "Hematology", amount: "₹110", unit: "mg/dL", normal: "18 - 48 mg/dL" },
  { testid: "588", name: "Blood Sugar ppbs", section: "Hematology", amount: "₹80", unit: "mg/dL", normal: "18 - 48 mg/dL" },
  { testid: "589", name: "Blood Sugar Random", section: "Hematology", amount: "₹60", unit: "mg/dL", normal: "18 - 48 mg/dL" },
  { testid: "590", name: "Blood RE", section: "Hematology", amount: "₹100", unit: "mg/dL", normal: "18 - 48 mg/dL" },
];

const group = [
  { grpid: "345", name: "Complete Blood Count",code:"cdb", section: "Hematology", amount: "₹240", tests: ["583", "584","585"] },
  { grpid: "346", name: "Basic Health Checkup",code:"bhc", section: "Hematology", amount: "₹190", tests: ["587", "588",'590'] },
];

const Tests = () => {
  const [filter, setFilter] = useState('Tests');
  const [expandedRows, setExpandedRows] = useState([]);

  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  const toggleMenu = () => {
    setIsMenuExpanded(!isMenuExpanded);
  };

  const handleRowClick = (grpid) => {
    const currentExpandedRows = expandedRows;
    const isRowCurrentlyExpanded = currentExpandedRows.includes(grpid);

    const newExpandedRows = isRowCurrentlyExpanded 
      ? currentExpandedRows.filter(id => id !== grpid) 
      : currentExpandedRows.concat(grpid);

    setExpandedRows(newExpandedRows);
  };

  const renderRowDetails = (tests) => {
    return tests.map((testid, index) => {
      const test = data.find(t => t.testid === testid);
      return (
        <tr key={index}>
          <td className="p-2 pl-8 text-gray-600 text-sm"></td>
          <td className="p-2 text-gray-600 text-sm">{test.name}</td>
          <td className="p-2 text-gray-600 text-sm">{test.section}</td>
          <td className="p-2 text-gray-600 text-sm">{test.amount}</td>
          <td className="p-2 text-gray-600 text-sm">{test.unit}</td>
          <td className="p-2 text-gray-600 text-sm">{test.normal}</td>
        </tr>
      );
    });
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
                className={`text-sm ${filter === 'Tests' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-400'}`}
                onClick={() => setFilter('Tests')}
              >
                Tests
              </button>
              <button
                className={`text-sm ${filter === 'Groups' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-400'}`}
                onClick={() => setFilter('Groups')}
              >
                Groups
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
          {filter === 'Tests' ? (
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border-b p-2 text-gray-500 text-sm font-normal text-left">TEST ID</th>
                  <th className="border-b p-2 text-left text-gray-500 font-normal text-sm">NAME</th>
                  <th className="border-b p-2 text-left text-gray-500 font-normal text-sm">SECTION</th>
                  <th className="border-b p-2 text-left text-gray-500 font-normal text-sm">RATE</th>
                  <th className="border-b p-2 text-left text-gray-500 font-normal text-sm">UNITS</th>
                  <th className="border-b p-2 text-left text-gray-500 font-normal text-sm">NORMAL RANGE</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    <td className="border-b p-2 text-black text-md">{row.testid}</td>
                    <td className="border-b font-normal text-sm p-2">{row.name}</td>
                    <td className="border-b font-normal text-sm p-2">{row.section}</td>
                    <td className="border-b font-normal text-sm p-2">{row.amount}</td>
                    <td className="border-b font-normal text-sm p-2">{row.unit}</td>
                    <td className="border-b font-normal text-sm p-2">{row.normal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border-b text-gray-500 text-sm font-normal text-left"></th>
                  <th className="border-b p-2 text-gray-500 text-sm font-normal text-left">GROUP ID</th>
                  <th className="border-b p-2 text-left text-gray-500 font-normal text-sm">NAME</th>
                  <th className="border-b p-2 text-left text-gray-500 font-normal text-sm">SECTION</th>
                  <th className="border-b p-2 text-left text-gray-500 font-normal text-sm">RATE</th>
                  <th className="border-b p-2 text-left text-gray-500 font-normal text-sm"></th>
                </tr>
              </thead>
              <tbody>
                {group.map((row, index) => (
                  <>
                    <tr key={index} onClick={() => handleRowClick(row.grpid)}>
                      <td className="border-b font-normal text-sm p-2">
                        {expandedRows.includes(row.grpid) ? (
                          <IoIosArrowDropdown size={20} color='gray' />
                        ) : (
                          <IoIosArrowDropright size={20} color='gray' />
                        )}
                      </td>
                      <td className="border-b p-2 text-black text-md">{row.grpid}</td>
                      <td className="border-b font-normal text-sm p-2">{row.name}</td>
                      <td className="border-b font-normal text-sm p-2">{row.section}</td>
                      <td className="border-b font-normal text-sm p-2">{row.amount}</td>
                      <td className="border-b font-normal text-sm p-2 flex flex-raw gap-3">
                        <span className="flex items-center justify-center w-6 h-6 bg-amber-100 rounded-lg">
                          <CiEdit size={15} color='orange' />
                        </span>
                        <span className="flex items-center justify-center w-6 h-6 bg-red-200 rounded-lg">
                          <MdDelete size={15} color='red' />
                        </span>
                      </td>
                    </tr>
                    {expandedRows.includes(row.grpid) && (
                      <tr>
                        <td colSpan="5">
                          <table className="w-full border-collapse">
                            {/* <thead>
                              <tr>
                                <th className="border-b p-2 text-gray-500 text-sm font-normal text-left">TEST ID</th>
                                <th className="border-b p-2 text-left text-gray-500 font-normal text-sm">NAME</th>
                                <th className="border-b p-2 text-left text-gray-500 font-normal text-sm">NORMAL RANGE</th>
                              </tr>
                            </thead> */}
                            <tbody>
                              {renderRowDetails(row.tests)}
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    )}
                  </>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tests;
