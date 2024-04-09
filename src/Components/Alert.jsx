import React, { useState } from 'react';
import './Alert.css'; // Style file for Alert component

const Alert = ({ message }) => {
  const [showAlert, setShowAlert] = useState(true);

  const handleClose = () => {
    setShowAlert(false);
  };

  return (
    <>
      {showAlert && (
        <div className="alert-window">
          <div className="alert-message">{message}</div> Enable Browser notifications to avoid missing out an important activity
          <button className="close-button" onClick={handleClose}>
            X
          </button>
        </div>
      )}
    </>
  );
};

export default Alert;
