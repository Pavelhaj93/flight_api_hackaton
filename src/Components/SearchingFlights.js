import { useEffect } from 'react';
import './SearchingFlight.css';

const SearchingFlights = ({submithandling, allApiData}) => {


    
    console.log(allApiData);

    return (
        <form className="searching__form"
            onSubmit={submithandling}
        >
                <input type="text" name="from-flight" id="from-flight" placeholder='From' className='input'/>
            
            
                <input type="text" name="to-flight" id="to-flight" placeholder='To' className='input'/>
            
            <input type="date" className='date'/>
            <input type="date" className='date'/>
            <input type="submit" className='sbmt' value='Search for a flight'/>
        </form>
    )
}
export default SearchingFlights;

