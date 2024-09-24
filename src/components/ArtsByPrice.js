import { useEffect, useState } from "react";
import Arts from "./Arts";

const ArtsByPrice = () => {
const [priceList, setPriceList] = useState({});


    
    useEffect(() => {
        fetchPrice();

    }, []);


    const fetchPrice = async () => {
        const data = await fetch("https://api.mojarto.com/public/landing/artsByPriceList");
        const json = await data.json();
        console.log(json.priceList);
        setPriceList(json?.priceList);
        console.log(json); // Log the entire response object
console.log(json.priceList); // Log just the priceList

       
    }

    const transformPriceList = (inputObj) => {
        const outputObj = {};
    
        const keys = Object.keys(inputObj);
        keys.forEach((key, index) => {
          const priceFrom = parseFloat(key);  // Convert key to a number
          const priceTo = inputObj[key];
    
          let buttonName;
          if (priceFrom === 0) {
            buttonName = `Under  ₹${priceTo}`;  // For the first range (0.0)
          } else if (priceTo === 0) {
            buttonName = `₹${priceFrom}-Above`;  // For the last range
          } else {
            buttonName = `₹${priceFrom} - ₹${priceTo}`;
          }
    
          outputObj[key] = {
            buttonName,
            priceTo: priceTo === 0 ? "Above" : priceTo,  // Set 'Above' for the last range
            priceFrom
          };
        });
    
        return outputObj;
      };

      const transformedData = transformPriceList(priceList || {});
      

  
      console.log(transformedData);
    //   setMappedPrice(transformedData);

   
   
      return (

        <div>
          
        {transformedData && <Arts data = {transformedData}/>}

       
         </div>
        
      );
}

export default ArtsByPrice;

