import { useEffect, useState } from 'react';
import loading from '../loading.gif';
import Cards from './Cards';
import Footer from './Footer';
import Header from './Header';
import SearchingFlights from './SearchingFlights';





const Wrapper = () => {
     
    
    const [apiData, setApiData] = useState(null);
    //  Todo if we will have time showing the location of the user 

    // On form submit state
    const [searchingData, setSearchingData] = useState(null);
    const [settingSourceData, setSourceData] = useState('europe');
    const [settingDestinationeData, setDestinationeData] = useState('europe');
    

    // https://restcountries.com/v2/name/${}
    const urlOfTranslationDta = `https://restcountries.com/v2/name/`;


    // YOUR_AFFILID: data4youcbp202106
    const YOUR_AFFILID = 'data4youcbp202106';
    const url = `https://api.skypicker.com/flights?fly_from=${settingSourceData}&fly_to=${settingDestinationeData}&partner=${YOUR_AFFILID}`

    const fetchingFirstData = async (url, settingData) => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        settingData(data);
    }


        const fetchingSourceData = async (url, settingData) => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data[0].alpha2Code);
        settingData(data[0].alpha2Code);
    }
    
    
    const fetchingDestinationData = async (url, settingData) => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data[0].alpha2Code);
        settingData(data[0].alpha2Code);
    }

    useEffect(() => {
        fetchingFirstData(url, setApiData);
    },[])

        useEffect(() => {
        fetchingFirstData(url, setApiData);
    },[url])
    



    const formHandler = e => {
        e.preventDefault();
        const from = e.target.children['from-flight'].value;
        const destination = e.target.children['to-flight'].value;
        console.log(from);
        console.log(destination);
        fetchingSourceData(`${urlOfTranslationDta}${from}`, setSourceData);
        fetchingDestinationData(`${urlOfTranslationDta}${destination}`, setDestinationeData);

        console.log(`${urlOfTranslationDta}${from}`);
        fetchingFirstData(url, setApiData);
    }

    return (
        <>
        <Header />
        <SearchingFlights submithandling={formHandler}  allApiData={apiData} />
        {
        apiData && apiData.currency ? <Cards data={apiData} /> : <img className="img"src={loading}/>
        }

        <Footer />
        </>
    )
}

export default Wrapper;