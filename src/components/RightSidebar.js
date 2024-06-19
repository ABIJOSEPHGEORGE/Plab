import React, { useState, useEffect } from 'react';
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const getDaysInMonth = (year, month) => {
  return new Array(31)
    .fill('')
    .map((_, i) => new Date(year, month, i + 1))
    .filter(date => date.getMonth() === month);
};

const getDaysAroundCurrent = (date) => {
  const days = [];
  for (let i = -3; i <= 3; i++) {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + i);
    days.push(newDate);
  }
  return days;
};

const getFirstWeek = (year, month) => {
  return new Array(7)
    .fill('')
    .map((_, i) => new Date(year, month, i + 1));
};

const RightSidebar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(selectedDate.getMonth());
  const [currentYear, setCurrentYear] = useState(selectedDate.getFullYear());
  const [showAllDays, setShowAllDays] = useState(false);

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const daysAroundCurrent = getDaysAroundCurrent(selectedDate);
  const firstWeek = getFirstWeek(currentYear, currentMonth);

  useEffect(() => {
    setSelectedDate(new Date(currentYear, currentMonth, selectedDate.getDate()));
  }, [currentMonth, currentYear]);

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleMonthClick = () => {
    setShowAllDays(!showAllDays);
  };

  return (
    <div className="bg-white w-1/4 p-4 shadow-md h-screen flex flex-col">
      <Link to="/testentry">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full">
          + Create Appointment
        </button>
      </Link>
      <div className='mt-6 flex-shrink-0'>
        <div className="p-3 py-6 rounded-xl border-gray-100 border-2">
          <div className="flex justify-between items-center mb-4 pl-8 pr-8">
            <button onClick={handlePrevMonth}><FaLessThan size={13} color='blue' /></button>
            <div className="text-lg font-normal cursor-pointer" onClick={handleMonthClick}>
              {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} {currentYear}
            </div>
            <button onClick={handleNextMonth}><FaGreaterThan size={13} color='blue' /></button>
          </div>
          <div className="grid grid-cols-7 gap-3">
            {(showAllDays ? daysInMonth : (currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear()) ? daysAroundCurrent : firstWeek).map(date => (
              <div
                key={date.toDateString()}
                onClick={() => handleDateClick(date)}
                className={`flex flex-col items-center justify-center w-10 h-12 rounded-xl cursor-pointer border-blue-500 border ${
                  selectedDate && selectedDate.toDateString() === date.toDateString() ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
                }`}
              >
                <span>{date.getDate()}</span>
                <span className="text-xs text-gray-600 font-normal">{date.toLocaleDateString('default', { weekday: 'short' })}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-grow overflow-y-auto p-3 hide-scrollbar">
        <h2 className="text-xl mt-4">Appointments</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search for patients ..."
            className="border rounded-lg w-full h-10 px-4 placeholder:text-sm mt-2 mb-4"
          />
          <AiOutlineSearch size={19} color='grey' className="absolute right-3 top-1/2 transform -translate-y-1/2" />
        </div>
        <div className="mt-2 space-y-2">
          {/* Repeat this block for each appointment */}
          <div className="flex justify-between items-center pb-4">
            <div>
              <div className="font-bold">Aasha Choudhry</div>
              <div className="text-sm text-gray-500">#526520</div>
            </div>
            <span className="bg-green-100 text-green-700 px-4 py-1 rounded-md">Completed</span>
          </div>
          <div className="flex justify-between items-center pb-4">
            <div>
              <div className="font-bold">Anvit Challapally</div>
              <div className="text-sm text-gray-500">#690589</div>
            </div>
            <span className="bg-red-100 text-red-700 px-4 py-1 rounded-md">Payment</span>
          </div>
          <div className="flex justify-between items-center pb-4">
            <div>
              <div className="font-bold">Divyansh Karan</div>
              <div className="text-sm text-gray-500">#105986</div>
            </div>
            <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-md">Result</span>
          </div>
          <div className="flex justify-between items-center pb-4">
            <div>
              <div className="font-bold">Hridaan Gangaraju</div>
              <div className="text-sm text-gray-500">#528525</div>
            </div>
            <span className="bg-green-100 text-green-700 px-4 py-1 rounded-md">Completed</span>
          </div>
          <div className="flex justify-between items-center pb-4">
            <div>
              <div className="font-bold">Jitendra Shukla</div>
              <div className="text-sm text-gray-500">#526534</div>
            </div>
            <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-md">Result</span>
          </div>
          <div className="flex justify-between items-center pb-4">
            <div>
              <div className="font-bold">Chandra Kumavat</div>
              <div className="text-sm text-gray-500">#200257</div>
            </div>
            <span className="bg-green-100 text-green-700 px-4 py-1 rounded-md">Completed</span>
          </div>
          <div className="flex justify-between items-center pb-4">
            <div>
              <div className="font-bold">Bhawesh Kelkar</div>
              <div className="text-sm text-gray-500">#265584</div>
            </div>
            <span className="bg-red-100 text-red-700 px-4 py-1 rounded-md">Payment</span>
          </div>
        </div>
      </div>
      <button className="bg-white border-violet-400 border text-blue-700 px-4 py-2 rounded-lg w-full mt-4 flex-shrink-0">
        All Appointment
      </button>
    </div>
  );
};

export default RightSidebar;
