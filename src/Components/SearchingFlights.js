import './SearchingFlight.css';


const SearchingFlights = () => {
    return (
        <form className="searching__form">
            <label>
                <input type="text" name="from-flight" id="from-flight" placeholder='From' className='input'/>
            </label>
            <label>
                <input type="text" name="to-flight" id="to-flight" placeholder='To' className='input'/>
            </label>
            <input type="date" className='date'/>
            <input type="date" className='date'/>
            <input type="submit" className='sbmt'/>
        </form>
    )
}
export default SearchingFlights;