const Arts = ({ data }) => {
    console.log(data);


    const fetchDataPrice = async(priceTo,priceFrom) => {
        const dataPrice =  await fetch(`https://www.mojarto.com/artworks?priceTo=${priceTo}&priceFrom=${priceFrom}`);
        const jsonData = await dataPrice.json();
        console.log(jsonData);
        
        }
   


    return (
        <div>
            {data && Object.keys(data).length > 0 ? (
                Object.keys(data).map((key) => (
                    <button
                        key={key} 
                        className="bg-customPurple px-2 mx-16 py-2 text-white"
                        onClick={() => fetchDataPrice(data[key].priceTo, data[key].priceFrom)}
                    >
                        {data[key]?.buttonName}
                    </button>
                ))
            ) : (
                <p>No price data available</p> 
            )}
        </div>
    );
};

export default Arts;
