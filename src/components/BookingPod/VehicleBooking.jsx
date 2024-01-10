import React, { useState } from 'react';
import './VehicleBooking.css';

const VehicleBooking = () => {
  const [vehicleType, setVehicleType] = useState('');
  const [pickUpLocation, setPickUpLocation] = useState('');
  const [pickUpDate, setPickUpDate] = useState('');
  const [pickUpTime, setPickUpTime] = useState('');
  const [negotiatedRate, setNegotiatedRate] = useState(false);
  const [returnDate, setReturnDate] = useState('');
  const [returnTime, setReturnTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form verilerini işleyip rezervasyon talebi yapın
  };

  return (
    <div className="booking-form">
      <h2>Vehicle Booking</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="vehicle-type">
          What type of vehicle?
          <select
            id="vehicle-type"
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
          >
            <option value="">Select</option>
            <option value="car">Car</option>
            <option value="van">Vans & Trucks</option>
          </select>
        </label>

        {/* Pick up date & time */}
        <label htmlFor="pickup-date">
          Pick up date
          <input
            id="pickup-date"
            type="date"
            value={pickUpDate}
            onChange={(e) => setPickUpDate(e.target.value)}
          />
        </label>
        <label htmlFor="pickup-time">
          Time
          <input
            id="pickup-time"
            type="time"
            value={pickUpTime}
            onChange={(e) => setPickUpTime(e.target.value)}
          />
        </label>

        {/* Pick up & Return location */}
        <label htmlFor="pickup-location">
          Pick up & Return location
          <input
            id="pickup-location"
            type="text"
            value={pickUpLocation}
            onChange={(e) => setPickUpLocation(e.target.value)}
          />
        </label>

        {/* Negotiated rate */}
        <label htmlFor="negotiated-rate">
          <input
            id="negotiated-rate"
            type="checkbox"
            checked={negotiatedRate}
            onChange={(e) => setNegotiatedRate(e.target.checked)}
          />
          I have a negotiated rate
        </label>

        {/* Return date & time */}
        <label htmlFor="return-date">
          Return date
          <input
            id="return-date"
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </label>
        <label htmlFor="return-time">
          Time
          <input
            id="return-time"
            type="time"
            value={returnTime}
            onChange={(e) => setReturnTime(e.target.value)}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default VehicleBooking;
