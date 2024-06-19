import React from 'react';
import { IoHomeOutline, IoPersonOutline, IoCalendarOutline, IoDocumentTextOutline, IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
import { FiMenu } from 'react-icons/fi';

const LeftMenu = ({ isExpanded, toggleMenu }) => {
  const [selected, setSelected] = React.useState('Dashboard');

  const menuItems = [
    { name: 'Dashboard', icon: <IoHomeOutline /> },
    { name: 'Patients', icon: <IoPersonOutline /> },
    { name: 'Appointments', icon: <IoCalendarOutline /> },
    { name: 'Reports', icon: <IoDocumentTextOutline /> },
    { name: 'Settings', icon: <IoSettingsOutline /> },
  ];

  return (
    <div className={`bg-white p-4 shadow-md flex flex-col justify-between h-screen transition-all duration-300 ${isExpanded ? 'w-1/6' : 'w-20'}`}>
      <div>
        <div className="flex py-2 px-4 items-center justify-between mb-12 mt-10">
          <button onClick={toggleMenu} className="focus:outline-none">
            <FiMenu size={24} />
          </button>
          {isExpanded && (
            <div className="flex items-center">
              <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
              <h2 className="text-2xl font-bold">FluxionLab</h2>
            </div>
          )}
        </div>
        <ul className="space-y-6">
          {menuItems.map(item => (
            <li key={item.name}>
              <p
                onClick={() => setSelected(item.name)}
                className={`flex items-center py-2 px-4 rounded cursor-pointer text-lg ${
                  selected === item.name
                    ? 'text-blue-500 border-r-4 border-blue-500'
                    : ''
                }`}
              >
                <span className="mr-4">{item.icon}</span>
                {isExpanded && item.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className='mb-5'>
        <p
          onClick={() => console.log('Logout')}
          className="flex items-center py-2 px-4 rounded cursor-pointer text-lg text-red-500 hover:text-red-700"
        >
          <span className="mr-4"><IoLogOutOutline /></span>
          {isExpanded && 'Logout'}
        </p>
      </div>
    </div>
  );
};

export default LeftMenu;
