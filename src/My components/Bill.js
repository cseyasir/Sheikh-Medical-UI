import React, { useState } from 'react';

const MEDICINES = {
  'Paracetamol': 10,
  'Ibuprofen': 15,
  'Aspirin': 20
};

function Bill() {
  const [patientDetails, setPatientDetails] = useState({
    name: '',
    age: 0,
    phone: '',
    address: ''
  });
  const [cart, setCart] = useState([]);
  const [selectedMedicine, setSelectedMedicine] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Cash');
  const [cashGiven, setCashGiven] = useState(0);

  const calculateTotal = () => {
    let total = 0;
    cart.forEach(item => {
      total += MEDICINES[item.medicine] * item.quantity;
    });
    return total;
  };

  const handleAddToCart = () => {
    if (selectedMedicine && cart.find(item => item.medicine === selectedMedicine)) {
      const updatedCart = cart.map(item => {
        if (item.medicine === selectedMedicine) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { medicine: selectedMedicine, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleCashGivenChange = (e) => {
    setCashGiven(e.target.value);
  };

  const handleGenerateBill = () => {
    // Generate and print bill logic
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
  };

  const generateBill = () => {
    let bill = `*Sheikh Medical Store*\n\n`;
    bill += `*Patient Details*\n`;
    bill += `Name: ${patientDetails.name}\n`;
    bill += `Age: ${patientDetails.age}\n`;
    bill += `Phone Number: ${patientDetails.phone}\n`;
    bill += `Address: ${patientDetails.address}\n\n`;
    bill += `*Medicines*\n`;
    bill += `Medicine      | Quantity| Price\n`;
    bill += `---------------|----------|-----\n`;
    cart.forEach(item => {
      const price = MEDICINES[item.medicine];
      bill += `${item.medicine.padEnd(14)}|${String(item.quantity).padStart(10)}| Rs. ${price}\n`;
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
    <div>
      <h1>Pharmacy Billing System</h1>
      <label>
        Patient Name:
        <input
          type="text"
          value={patientDetails.name}
          onChange={e => setPatientDetails(prev => ({ ...prev, name: e.target.value }))}
        />
      </label>
      <br />
      <label>
        Patient Age:
        <input
          type="number"
          value={patientDetails.age}
          onChange={e => setPatientDetails(prev => ({ ...prev, age: e.target.value }))}
        />
      </label>
      <br />
      <label>
        Phone Number:
        <input
          type="text"
          value={patientDetails.phone}
          onChange={e => setPatientDetails(prev => ({ ...prev, phone: e.target.value }))}
        />
      </label>
      <br />
      <label>
        Address:
        <textarea
          value={patientDetails.address}
          onChange={e => setPatientDetails(prev => ({ ...prev, address: e.target.value }))}
        ></textarea>
      </label>
      <br />
      <input
        type="text"
        placeholder="Search Medicine"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <select onChange={e => setSelectedMedicine(e.target.value)}>
        <option>Select Medicine</option>
        {Object.keys(MEDICINES).filter(med => med.toLowerCase().includes(searchTerm.toLowerCase())).map(med => (
          <option key={med} value={med}>{med} (Price: Rs. {MEDICINES[med]})</option>
        ))}
      </select>
      <button onClick={handleAddToCart}>+</button>
      <br />
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.medicine}: {item.quantity} <button onClick={() => handleRemoveFromCart(index)}>-</button></li>
        ))}
      </ul>
      <h2>Payment Method</h2>
      <label>
        Cash
        <input
          type="radio"
          value="Cash"
          checked={paymentMethod === 'Cash'}
          onChange={handlePaymentMethodChange}
        />
      </label>
      <label>
        Online
        <input
          type="radio"
          value="Online"
          checked={paymentMethod === 'Online'}
          onChange={handlePaymentMethodChange}
        />
      </label>
      {paymentMethod === 'Cash' && (
        <div>
          <label>
            Cash Given:
            <input
              type="number"
              value={cashGiven}
              onChange={handleCashGivenChange}
            />
          </label>
        </div>
      )}
      <br />
      <button onClick={handlePrint}>Print Bill</button>
    </div>
  );
}

export default Bill;
