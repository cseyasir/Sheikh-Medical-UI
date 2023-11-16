import React from 'react';

const Modal = ({ item, location, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Item: {item}</h2>
        <p>Location: {location}</p>
        {/* You can add more details as needed */}
      </div>
    </div>
  );
};

export default Modal;
