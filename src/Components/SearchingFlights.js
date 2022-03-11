import { useEffect } from 'react';
import './SearchingFlight.css';

const SearchingFlights = ({submithandling, allApiData}) => {


    
    console.log(allApiData);

    return (
        <form 
            onSubmit={submithandling}        
        className="searching__form"
        >
            <input type="text" name="from-flight" id="from-flight"
                placeholder='From?'
                />    
            <input type="text" name="to-flight" id="to-flight"
                placeholder='Where to?'
                />
            <input type="date"/>
            <input type="date"/>
            <input type="submit"/>
        </form>
    )
}
export default SearchingFlights;

