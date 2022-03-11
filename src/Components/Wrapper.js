const { useState, useEffect } = require("react")

const Wrapper = () => {
     [apiData, setApiData] = useState(null);


    const fetchingData = async () => {
        const response = await fetch();
        const data = await response.json();
        console.log(data);
        
    }


    useEffect(() => {

    },[])


    return (
        <>
        </>
    )
}