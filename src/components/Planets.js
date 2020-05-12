import React, {useEffect, useState } from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';



const Planet = props => {
    const[ planet, setPlanet] = useState([]);

    const fetchPlanet = () => {
        axios.get("https://swapi.dev/api/planets/")
        .then (response => {setPlanet(response.data.results)});
    }
    return (
        <div>
            {planet.map((planet, i) => {
                return(<div ket={i}>{planet.name}</div>)
            })}
        </div>
    )
}
export default Planet;