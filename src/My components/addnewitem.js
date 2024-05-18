import React, { useState } from 'react';

const Addnewitem = () => {
  const [newMedicine, setNewMedicine] = useState({
    medicine_name: '',
    price: '',
    location: '',
  });

  const [validationErrors, setValidationErrors] = useState({
    medicine_name: '',
    price: '',
    location: '',
  });

  const handleAdd = () => {
    setValidationErrors({
      medicine_name: newMedicine.medicine_name.trim() === '' ? 'Name is required' : '',
      price: newMedicine.price.trim() === '' ? 'Price is required' : '',
      location: newMedicine.location.trim() === '' ? 'Location is required' : '',
    });

    if (
      newMedicine.medicine_name.trim() !== '' &&
      newMedicine.price.trim() !== '' &&
      newMedicine.location.trim() !== ''
    ) {
      // All fields are filled, so you can proceed with the submission
      // Send a POST request to add the new item

      fetch('https://backendapi-uegd.onrender.com/medicines', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMedicine),
      })
        .then((response) => {
          if (response.status === 201) {
            // Item was successfully added, you can update the UI if needed
            setNewMedicine({
              medicine_name: '',
              price: '',
              location: '',
            });
            alert('Item has been added');
          } else {
            // Handle errors, e.g., validation errors or server error
            console.error('Error adding item:', response.statusText);
            alert('Error adding item: ' + response.statusText);
          }
        })
        .catch((error) => {
          console.error('Error adding item:', error);
          alert('Error adding item: ' + error);
        });
    }
  };

  return (
    <div className="adding_item">
      <h2 className="text-warning">Adding new item to sheikh medical store</h2>
      <input
        type="text"
        placeholder="Name of medicine"
        value={newMedicine.medicine_name}
        onChange={(e) => setNewMedicine({ ...newMedicine, medicine_name: e.target.value })}
      />
      <p className="validation-error text-danger">{validationErrors.medicine_name}</p>

      <input
        type="number"
        placeholder="Price of medicine"
        value={newMedicine.price}
        onChange={(e) => setNewMedicine({ ...newMedicine, price: e.target.value })}
      />
      <p className="validation-error text-danger">{validationErrors.price}</p>

      <input
        type="text"
        placeholder="Location of medicine"
        value={newMedicine.location}
        onChange={(e) => setNewMedicine({ ...newMedicine, location: e.target.value })}
      />
      <p className="validation-error text-danger">{validationErrors.location}</p>

      <button onClick={handleAdd}>
        <span className="icon-plus"></span>
      </button>
    </div>
  );
};

export default Addnewitem;
