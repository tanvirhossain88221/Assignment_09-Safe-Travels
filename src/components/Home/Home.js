import React, { useEffect, useState } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import fakeData from '../../fakeData/MOCK_DATA.json';
import AllVehicles from '../AllVehicles/AllVehicles';
import Background from '../../img/2705339.jpg';


const Home = () => {
    const first4 = fakeData.slice(0, 4);
    const [vehicle, setVehicle] = useState(first4);

    const handleAddVehicle = (vehicle) => {
        console.log('added ', vehicle);
    }


    return (
        <div className="" >
            <div >


            </div>
            <div >
                <div className="row containers">
                    {
                        vehicle.map(vehicle => <AllVehicles
                            handleAddVehicle={handleAddVehicle}
                            vehicleinfo={vehicle}
                        ></AllVehicles>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;