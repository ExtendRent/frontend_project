import React from "react";
import "./Cars.css";
import CarCard from "../../components/CarCard/CarCard";


const Cars = () => {

  return (
    <div className="container mt-5">
        {<CarsList classes="yellow-border"/>}
        </div>
  );
};

const CarsList = () => {
     const cars = [
      {
      id: 1,
      brand: "Mercedes-Benz",
      model:"AMG-GLC",
      description: "Açıklama 1",
      img:"https://vehicle-images.dealerinspire.com/613b-18003791/4JGFD6BB0RB027177/150e233aa47e7f9dfc9541fc385e08bd.jpg",
      price: 19999,
  
      },
      {
      id: 2,
      brand: "Tesla",
      model:"Model Y",
      img:"https://img.freepik.com/premium-photo/car-isolated-white-background-tesla-model-3-white-car-blank-clean-white-backgr-white-black_655090-605193.jpg",
      description: "Açıklama 2",
      price: 2000,
  
      },
      {
      id: 3,
      brand: "BMW",
      model:"320i",
      img:"https://img.freepik.com/premium-photo/car-isolated-white-background-bmw-white-car-blank-clean-white-background-turn-white-black_655090-606155.jpg",
      description: "Açıklama 3",
      price: 141414,
  
      },
      {
      id: 4,
      brand: "Volvo",
      model:"XC-90",
      img:"https://img.freepik.com/premium-photo/car-isolated-white-background-volvo-xc60-white-car-blank-clean-white-backgroun-white-black_655090-606410.jpg",
      description: "Açıklama 3",
      price: 12312,
  
      },
      {
      id: 5,
      brand: "Peugeot",
      model:"308 GT Line",
      img:"https://c4.wallpaperflare.com/wallpaper/129/388/845/2018-308-peugeot-wallpaper-preview.jpg",
      description: "Açıklama 3",
      price: 23432,
    
      },
      {
      id: 6,
      brand: "Ferrari",
      model:"M6",
      img:"https://eskipaper.com/images/white-ferrari-background-1.jpg",
      description: "Açıklama 3",
      price: 34534,
      
      },
      {
      id: 7,
      brand: "Mitubishi",
      model:"Lancer",
      img:"https://i.pinimg.com/736x/5a/c3/84/5ac38473b7d286434db835d2b69ead0d.jpg",
      description: "Açıklama 3",
      price: 56756,
  
      },
      {
      id: 8,
      brand: "Dacia",
      model:"Duster",
      img:"https://www.nationwidevehiclecontracts.co.uk/m/0/dacia-duster-journey.JPG",
      description: "Açıklama 3",
      price: 4555,
  
      },
      {
        id: 9,
        brand: "Dacia",
        model:"Duster",
        img:"https://www.nationwidevehiclecontracts.co.uk/m/0/dacia-duster-journey.JPG",
        description: "Açıklama 3",
        price: 4555,
    
        },
        {
          id: 10,
          brand: "Dacia",
          model:"Duster",
          img:"https://www.nationwidevehiclecontracts.co.uk/m/0/dacia-duster-journey.JPG",
          description: "Açıklama 3",
          price: 4555,
      
          },
          {
            id: 11,
            brand: "Dacia",
            model:"Duster",
            img:"https://www.nationwidevehiclecontracts.co.uk/m/0/dacia-duster-journey.JPG",
            description: "Açıklama 3",
            price: 4555,
        
            }
    ];
  
    return (
      <div className="cars">
        {cars.map((car) => (
        <CarCard key={car.id} car={car} />
        ))}
      </div>
      );
}

export default Cars;
