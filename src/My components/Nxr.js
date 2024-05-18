import React, { useState, useEffect } from 'react';

const Nrx = () => {
  const [nrxData, setNrxData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [newDrug, setNewDrug] = useState({ name: '', quantity: '', price: '', brand: '' });

  const fetchNrxData = () => {
    setLoading(true);
    fetch('https://backendapi-uegd.onrender.com/NxrMedicine')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch data');
        }
      })
      .then((data) => {
        setNrxData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchNrxData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDrug((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const drugToSubmit = {
      ...newDrug,
      quantity: parseInt(newDrug.quantity, 10),
      price: parseInt(newDrug.price, 10),
    };

    fetch('https://backendapi-uegd.onrender.com/NxrMedicine', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(drugToSubmit),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to add drug');
        }
      })
      .then((data) => {
        setNrxData((prev) => [...prev, data]);
        setNewDrug({ name: '', quantity: '', price: '', brand: '' });
        setShowForm(false);
      })
      .catch((error) => {
        console.error('Error adding drug:', error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Nrx Drugs Store </h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Brand</th>
          </tr>
        </thead>
        <tbody>
          {nrxData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.brand}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Cancel' : 'Add New Nrx Drug'}
      </button>
      {showForm && (
        <form onSubmit={handleFormSubmit}>
          <div>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={newDrug.name}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Quantity:
              <input
                type="number"
                name="quantity"
                value={newDrug.quantity}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Price:
              <input
                type="number"
                name="price"
                value={newDrug.price}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Brand:
              <input
                type="text"
                name="brand"
                value={newDrug.brand}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <button type="submit">Add Drug</button>
        </form>
      )}
    </div>
  );
};

export default Nrx;
