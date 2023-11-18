import React, { useState, useEffect } from 'react';

const ShopSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [newMedicine, setNewMedicine] = useState({
  name: '',
  price: 0,
  location: '',
});
const [showList, setShowList] = useState(false);
const [isAdding, setIsAdding] = useState(false);
const [isUpdating, setIsUpdating] = useState(false);
const [updatedPrice, setUpdatedPrice] = useState(0);
const [newlyAddedMedicine, setNewlyAddedMedicine] = useState(null);
const [updatedLocation, setUpdatedLocation] = useState('');
const [itemToUpdate, setItemToUpdate] = useState(null);
const handleUpdate = (item) => {
  setIsUpdating(true);
  
  setUpdatedPrice(item.price);
  setUpdatedLocation(item.location);
 setItemToUpdate(item);// Store the item to update in a state variable
};
const handleUpdateSubmit = () => {
    const item = itemToUpdate;
  if(item){
  
  // Send a PUT request to update the item with the new price and location
  fetch(`https://sheikh-medical-store.onrender.com/medicines/${encodeURIComponent(item.name)}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: item.name,
      price: updatedPrice,
      location: updatedLocation,
      
    }),
  })
    .then((response) => {
      if (response.status === 200) {
        // Item was successfully updated, you can update the UI if needed
        // For example, you can fetch the updated list of items after the update.
        handleSearch();
        // Reset the update form
        setIsUpdating(false);
        setUpdatedPrice(0);
        setUpdatedLocation('');
        // Clear the item to update from state
      } else {
        // Handle errors, e.g., item not found or server error
        console.error('Error updating item:', response.statusText);
      }
    })
    .catch((error) => {
      console.error('Error updating item:', error);
    });
  }else{
    console.error('No item to update');
  }
};

// const handleAdd = () => {
//   // Send a POST request to add the new item
//   fetch('https://sheikh-medical-store.onrender.com/medicines', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(newMedicine),
//   })
//     .then((response) => {
//       if (response.status === 201) {
//         // Item was successfully added, you can update the UI if needed
//         // For example, you can fetch the updated list of items after the addition.
//         handleSearch();
//         setNewlyAddedMedicine(newMedicine);
//         // Clear the input fields
//         setNewMedicine({
//           name: '',
//           price: 0,
//           location: '',
//         });
//         alert("Item has been added");
//         setIsAdding(false);
//       } else {
//         // Handle errors, e.g., validation errors or server error
//         console.error('Error adding item:', response.statusText);
//         alert('Error adding item: ' + response.statusText);
//       }
//     })
    
//     .catch((error) => {
//       console.error('Error adding item:', error);
//       alert('Error adding item: ' + error);
//     });
   
    
// };


  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // Perform search when Enter is pressed
      handleSearch();
    }
  };

  const handleSearch = () => {
    if(searchTerm.trim() === ''){
      setSearchResults([]); // Clear the results if the search term is empty
    return;
    }
    // Make a GET request to search for medicines by name
    fetch(`https://sheikh-medical-store.onrender.com/medicines/search?name=${encodeURIComponent(searchTerm)}`)
      .then((response) => {
        if (!response.ok) {
          if (response.status === 404) {
            alert("Medicine not found");
            setSearchResults([]);
          } 
          throw new Error('Network response was not ok');
        }
        
        return response.json();
      })
      .then((data) => {
        setSearchResults(data);
      })
      .catch((error) => {
        alert('Error fetching data:', error);
        // Handle the error, e.g., display an error message to the user.
      });
  };
  const handleDelete = (medicineName) => {
  // Send a DELETE request to delete the item with the specified name
  fetch(`https://sheikh-medical-store.onrender.com/medicines/${encodeURIComponent(medicineName)}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (response.status === 204) {
        // Item was successfully deleted, you can update the UI if needed
        // For example, you can fetch the updated list of items after the delete.
        handleSearch();
      } else {
        // Handle errors, e.g., item not found or server error
        console.error('Error deleting item:', response.statusText);
      }
    })
    .catch((error) => {
      console.error('Error deleting item:', error);
    });
};


  return (
    <div>
      <h2 className='text-primary'>Search Items</h2>
      <input
        type="text"
        placeholder="Search for items"
        value={searchTerm}
        className='Search btn '
        style={{ color: 'white' }}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <br />
      <button onClick={handleSearch} className='btn btn-warning text-light'><span className='icon-search'> </span>
        Search
      </button>
      <div className='Search_result'>
      {searchResults.length === 0 && searchTerm ===''? (
  <p>No items found.</p>
) : (
 
  
    // <div key={index} className='row mr-5'>
     
    //     <div className='col-3 text-bold'>Name: {result.name}</div>
    //     <div className='col-3 text-bold'> Price: ${result.price.toFixed(2)}</div> {/* Format price as currency */}
    //     <div className='col-3 text-bold'>Location: {result.location}
    //     <span className='icon-trash-o pl-3 delete-icon'onClick={() => handleDelete(result.name)} ></span>
    //     <span className='icon-edit pl-3 edit-icon' onClick={() => handleUpdate(result)}></span>
    //     </div>

   
      // </div>
    
      <table >
  <thead>
    <tr>
      <th className='fix pl-5 h3 text-primary' >Name</th>
      <th className='pl-5 h3 text-primary'>Price</th>
      <th className='pl-5 h3 text-primary'>Location</th>
      <th className='pl-5 h3 text-primary'>Actions</th>
    </tr>
  </thead>
  <tbody>
    {searchResults.map((result, index) => (
      <tr key={index}>
        <td className='fix pl-5 h4'>{result.name}</td>
        {/* <td className='pl-5 h4'>${result.price}</td> */}
        <td className='pl-5 h4'>{result.location}</td>
        <td className='pl-5'>
          <span className='icon-trash-o delete-icon pl-2 ' onClick={() => handleDelete(result.name)} ></span>
          <span className='icon-edit edit-icon ' onClick={() => handleUpdate(result)}></span>
        </td>
      </tr>
    ))}
  </tbody>
</table>


    


)}
</div>
<div>

{isUpdating && (
  <div>
    
    <input
      type='number'
      placeholder='New Price'
      value={updatedPrice}
      onChange={(e) => setUpdatedPrice(parseFloat(e.target.value))}
    />
    <input
      type='text'
      placeholder='New Location'
      value={updatedLocation}
      onChange={(e) => setUpdatedLocation(e.target.value)}
    />
    <button onClick={handleUpdateSubmit}>Update</button>
  </div>
)}

{/* {isAdding && (
  <div>
    <input
      type="text"
      placeholder="Name"
      value={newMedicine.name}
      onChange={(e) => setNewMedicine({ ...newMedicine, name: e.target.value })}
    />
    <input
      type="number"
      placeholder="Price"
      value={newMedicine.price}
      onChange={(e) => setNewMedicine({ ...newMedicine, price: parseFloat(e.target.value) })}
    />
    <input
      type="text"
      placeholder="Location"
      value={newMedicine.location}
      onChange={(e) => setNewMedicine({ ...newMedicine, location: e.target.value })}
    />
    <button onClick={handleAdd} >Add</button>
  </div>
)} */}
{/* {newlyAddedMedicine && (
        <div>
          <p>Newly Added Item:</p>
          <p>Name: {newlyAddedMedicine.name}</p>
          <p>Price: {newlyAddedMedicine.price}</p>
          <p>Location: {newlyAddedMedicine.location}</p>
        </div>
      )} */}



      </div>
      {/* <button onClick={() => setIsAdding(!isAdding)} className='mt-1 btn btn-primary'><span className='icon-plus '> </span>Add New Medicine</button> */}
    </div>
  );
};

export default ShopSearch;
