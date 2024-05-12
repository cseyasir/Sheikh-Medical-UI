import React, { useState } from 'react';
import './bill.css';

const MEDICINES = {
  'Paracetamol': 10,
  'Ibuprofen': 15,
  'Aspirin': 20
};

function Bill() {
  const initialState = {
    name: '',
    age: 0,
    phone: '',
    address: '',
    selectedMedicine: '',
    searchTerm: '',
    paymentMethod: 'Cash',
    cashGiven: 0,
    expiryDate:'',
    batchNumber:'',
    MedicineName:''
  };

  const [medicineDetails, setMedicineDetails] = useState({
    name: '',
    price: 0,
    expiryDate: '',
    batchNumber: '',
    quantity:1
  });
  
  const [patientDetails, setPatientDetails] = useState({
    name: '',
    age: 0,
    phone: '',
    address: ''
  });
  
  const [cart, setCart] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('Cash');
  const [cashGiven, setCashGiven] = useState(0);

  const handleAddToCart = () => {
    if (!medicineDetails.name.trim() || !medicineDetails.expiryDate.trim() || !medicineDetails.batchNumber.trim() || !medicineDetails.price) {
      alert('Please enter all medicine details.');
      return;
    }
    const newItem = { ...medicineDetails, quantity: parseInt(medicineDetails.quantity) || 1 }; // Ensure a default quantity of 1 if not provided
    setCart([...cart, { ...medicineDetails }]);
    // Reset medicine details after adding to cart
    setMedicineDetails({ name: '', price: 0, expiryDate: '', batchNumber: '',quantity:1 });
  };

  const handleRemoveFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };
  const handleIncrementQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
  };

  const handleDecrementQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCart(updatedCart);
    }
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleCashGivenChange = (e) => {
    setCashGiven(e.target.value);
  };

  const calculateTotal = () => {
    let total = 0;
    cart.forEach(item => {
      const price = MEDICINES[item.name] || item.price; // Check if medicine price exists in predefined list
      total += price * parseInt(item.quantity);
    });
    return total;
  };

  const handlePrint = () => {
    const bill = generateBill();
    // Print the bill
    const printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Print</title></head><body>');
    printWindow.document.write(`<pre>${bill}</pre>`);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
    // Reset all fields after printing
    setPatientDetails(initialState);
    setCart([]);
    setPaymentMethod('Cash');
    setCashGiven(0);
  };

  const generateBill = () => {
    let bill = `*Sheikh Medical Store*\n   Jangla Mandi\n   Anantnag\n   9541802864\n\n`;
    bill += `*Patient Details*\n`;
    bill += `Name: ${patientDetails.name}\n`;
    bill += `Age: ${patientDetails.age}\n`;
    bill += `Phone Number: ${patientDetails.phone}\n`;
    bill += `Address: ${patientDetails.address}\n\n`;
    bill += `Medicine\nExpire date\nBatch Number | Quantity| Price |\n`;
    bill += `-------------|---------|-------|\n`;
    cart.forEach(item => {
      const price = MEDICINES[item.name] || item.price; // Check if medicine price exists in predefined list
      const expiryDate = item.expiryDate || '';
      const batchNumber = item.batchNumber || '';
      bill += `${item.name.padEnd(14)}\n ${expiryDate}\n${batchNumber.padEnd(13)}|${String(item.quantity).padStart(9)}| Rs. ${price}\n`;
    });
    bill += `\n`;
    bill += `**Total Amount:** Rs. ${calculateTotal()}\n`;

    if (paymentMethod === 'Cash') {
      const returnAmount = cashGiven - calculateTotal();
      bill += `**Payment Method:** Cash\n`;
      bill += `Cash Given: Rs. ${cashGiven}\n`;
      bill += `Return Amount: Rs. ${returnAmount >= 0 ? returnAmount : 'Insufficient cash'}\n`;
    } else {
      bill += `**Payment Method:** Online\n`;
    }
    return bill;
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <h2>Patient Details</h2>
          <form>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                className="form-control"
                value={patientDetails.name}
                onChange={e => setPatientDetails(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>
            <div className="form-group">
              <label>Age:</label>
              <input
                type="number"
                className="form-control"
                value={patientDetails.age}
                onChange={e => setPatientDetails(prev => ({ ...prev, age: e.target.value }))}
              />
            </div>
            <div className="form-group">
              <label>Phone Number:</label>
              <input
                type="text"
                className="form-control"
                value={patientDetails.phone}
                onChange={e => setPatientDetails(prev => ({ ...prev, phone: e.target.value }))}
              />
            </div>
            <div className="form-group">
              <label>Address:</label>
              <textarea
                className="form-control"
                value={patientDetails.address}
                onChange={e => setPatientDetails(prev => ({ ...prev, address: e.target.value }))}
              ></textarea>
            </div>
          </form>
        </div>
        <div className="col">
          <h2>Medicine</h2>
          <div className="form-group">
            <label>Medicine Name:</label>
            <input
              type="text"
              className="form-control"
              value={medicineDetails.name}
              onChange={e => setMedicineDetails(prev => ({ ...prev, name: e.target.value }))}
            />
          </div>
          <div className="form-group">
            <label>Price:</label>
            <input
              type="number"
              className="form-control"
              value={medicineDetails.price}
              onChange={e => setMedicineDetails(prev => ({ ...prev, price: e.target.value }))}
            />
          </div>
          <div className="form-group">
            <label>Expiry Date:</label>
            <input
              type="text"
              className="form-control"
              value={medicineDetails.expiryDate}
              onChange={e => setMedicineDetails(prev => ({ ...prev, expiryDate: e.target.value }))}
            />
          </div>
          <div className="form-group">
            <label>Batch Number:</label>
            <input
              type="text"
              className="form-control"
              value={medicineDetails.batchNumber}
              onChange={e => setMedicineDetails(prev => ({ ...prev, batchNumber: e.target.value }))}
            />
          </div>
          <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Cart</h2>
          <ul className="list-group">
            {cart.map((item, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                 {item.name} (Price: {MEDICINES[item.name] || item.price}, Quantity:
                <button onClick={() => handleDecrementQuantity(index)}>-</button>
                {item.quantity}
                <button onClick={() => handleIncrementQuantity(index)}>+</button>
                <button className="btn btn-danger" onClick={() => handleRemoveFromCart(index)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Payment Method</h2>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="cashRadio"
              value="Cash"
              checked={paymentMethod === 'Cash'}
              onChange={handlePaymentMethodChange}
            />
            <label className="form-check-label" htmlFor="cashRadio"><span className='radio'>Cash</span></label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="onlineRadio"
              value="Online"
              checked={paymentMethod === 'Online'}
              onChange={handlePaymentMethodChange}
            />
            <label className="form-check-label" htmlFor="onlineRadio"><span className='radio'>Online</span></label>
          </div>
          {paymentMethod === 'Cash' && (
            <div className="form-group">
              <label>Cash Given:</label>
              <input
                type="number"
                className="form-control"
                value={cashGiven}
                onChange={handleCashGivenChange}
              />
            </div>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button className="btn btn-primary" onClick={handlePrint}>Print Bill</button>
        </div>
      </div>
    </div>
  );
}

export default Bill;
