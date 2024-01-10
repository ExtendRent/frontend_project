import React from "react";
import "./HomePage.css";
import VehicleBooking from "../../components/BookingPod/VehicleBooking";
export default function Homepage() {
	return  ( <div>
        <div className="centerHomePageText">Ana Sayfa</div>
        <VehicleBooking/>
    </div>
    );
}