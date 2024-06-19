import React from 'react';

const data = [
  { billno: "#7583", date: "15 May 2020 9:00 am", amount: "₹120"},
  { billno: "#5584", date: "15 May 2020 9:00 am", amount: "₹420"},
  { billno: "#7585", date: "15 May 2020 9:00 am", amount: "₹200"},
  { billno: "#5586", date: "15 May 2020 9:00 am", amount: "₹150"},
  { billno: "#9587", date: "15 May 2020 9:00 am", amount: "₹110"},
  { billno: "#3588", date: "15 May 2020 9:00 am", amount: "₹80"},
  { billno: "#2589", date: "15 May 2020 9:00 am", amount: "₹60"},
  { billno: "#3590", date: "15 May 2020 9:00 am", amount: "₹100"},
  { billno: "#2583", date: "15 May 2020 9:00 am", amount: "₹120"},
  { billno: "#2584", date: "15 May 2020 9:00 am", amount: "₹420"},
  { billno: "#6585", date: "15 May 2020 9:00 am", amount: "₹200"},
  { billno: "#7586", date: "15 May 2020 9:00 am", amount: "₹150"},
];

function History() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-1/2 overflow-auto hide-scrollbar">
      <h2 className="text-xl font-normal mb-4">History</h2>
      <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-2 text-black text-sm font-normal text-left">Bill No</th>
                <th className="p-2 text-left text-black font-normal text-sm">Bate</th>
                <th className="p-2 text-left text-black font-normal text-sm">Amount</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td className="p-2 text-gray-500 text-sm">{row.billno}</td>
                  <td className="font-normal text-gray-500 text-sm p-2">{row.date}</td>
                  <td className="font-normal text-gray-500 text-sm p-2">{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
    </div>
  );
}

export default History;
