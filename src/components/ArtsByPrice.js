import { useEffect, useState } from "react";

const ArtsByPrice = () => {
    const [price, setPrice] = useState({});
    const [priceMapping, setPriceMapping] = useState({});

    useEffect(() => {
        fetchPrice();
        fetchData();
    }, []);


    const fetchPrice = async () => {
        const data = await fetch("https://api.mojarto.com/public/landing/artsByPriceList");
        const json = await data.json();
        console.log(json.priceList);
        setPrice(json.priceList);
    }

    useEffect(() => {
        if (Object.keys(price).length > 0) {
            const mapping = createPriceMapping(price);
            setPriceMapping(mapping);
        }
    }, [price]);

    function createPriceMapping(priceList) {
        const mapping = {};
        Object.keys(priceList).forEach((key) => {
            const currentValue = priceList[key];
            if (currentValue === 0) {
                mapping[key] = `${Number(key).toLocaleString()} - Above`
            }

            else {
                mapping[key] = `${Number(key).toLocaleString()} - ${Number(currentValue).toLocaleString()}`

            }
        })
        return mapping;
    }
  
    
    const fetchData = async() => {
        const priceData =  await fetch("https://www.mojarto.com/artworks?priceTo=10000&priceFrom=0");
        const jsonData = await priceData.json();
        console.log(jsonData);
        
   
    return (
        <div>
            <h1 className=" ml-5 text-customPurple font-bold text-lg">ART BY PRICE</h1>
            {Object.keys(priceMapping).length > 0 ? (
                Object.values(priceMapping).map((range, index) => (
                    <button className=" mt-10 mx-16 border border-black px-2 py-2  bg-customPurple text-white" key={index}
                     onClick={()=> alert(`Selected: ${range}`)}>
                        {range}
                    </button>
                ))
            ) : (
                <p> loading...</p>

            )}

        </div>
    )
}

export default ArtsByPrice;

