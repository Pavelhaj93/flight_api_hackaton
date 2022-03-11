import './SearchingFlight.css';


const SearchingFlights = () => {
    return (
        <form className="searching__form">
            <label>
                <input type="text" name="from-flight" id="from-flight"/>
            </label>
            <label>
                <input type="text" name="to-flight" id="to-flight"/>
            </label>
            <input type="date"/>
            <input type="date"/>
            <input type="submit"/>
        </form>
    )
}
export default SearchingFlights;