import React, { useEffect, useState } from 'react';
import './DisplayDataPage.css';

const DisplayDataPage = () => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    // Retrieve data from local storage
    const storedData = JSON.parse(localStorage.getItem('bills')) || [];
    setBills(storedData);
  }, []);

  const handleDelete = (index) => {
    const updatedBills = [...bills];
    updatedBills.splice(index, 1);
    setBills(updatedBills);
    // Update local storage data
    localStorage.setItem('bills', JSON.stringify(updatedBills));
  };

  const handleClearAll = () => {
    setBills([]);
    // Clear local storage data
    localStorage.removeItem('bills');
  };

  return (
    <div className="table-container">
      <h1>Bill Data</h1>
      <button onClick={handleClearAll}>Clear All Bills</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Medicine Details</th>
            <th>Payment</th>
            <th>Date and Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill, index) => (
            <tr key={index}>
              <td>{bill.patientDetails.name}</td>
              <td>{bill.patientDetails.age}</td>
              <td>{bill.patientDetails.phone}</td>
              <td>{bill.patientDetails.address}</td>
              <td>
                <ul>
                  {bill.cart.map((medicine, idx) => (
                    <li key={idx}>
                      <span>Name:</span> {medicine.name}, <span>Quantity:</span> {medicine.quantity}, <span>Price:</span> {medicine.price}, <span>Expiry Date:</span> {medicine.expiryDate}, <span>Batch Number:</span> {medicine.batchNumber}
                    </li>
                  ))}
                </ul>
              </td>
              <td>{bill.paymentMethod}</td>
              <td>{bill.dateTime}</td> {/* Display date and time here */}
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayDataPage;
