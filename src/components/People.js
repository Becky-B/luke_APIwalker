import React, {useEffect, useState } from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';



const People = props => {
    const[person, setPerson] = useState([]);

    const fetchPerson = () => {
        axios.get("https://swapi.dev/api/people/")
            .then (response => {setPerson(response.data.results)})
        }
        return(
            <div>
                <button onClick= {fetchPerson}> click for person</button>
                {person.map((person, i) => {
                return(<div ket={i}>{person.name}</div>)
            })}
            </div>
        )
}
export default People;