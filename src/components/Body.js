import { useEffect } from "react";
import ArtCard from "./ArtCard";
import { useState } from "react";
import Header from "./Header";
import Shimmer from "./Shimmer";
import { Carousel } from "@material-tailwind/react";
import Serigraphy from "./ArtsByPrice";
import ArtsByPrice from "./ArtsByPrice";


const Body = () => {

   const [listOfArts, setListOfArts] = useState([]);

   useEffect(() => {

      fetchData();

   }, [])

   const fetchData = async () => {
      const data = await fetch("https://api.mojarto.com/public/landing/homePageBanner");
      const json = await data.json();
      console.log(json);
      setListOfArts(json);


   }

   const handleClick = () => {
      console.log("clicked");

   }



   return listOfArts === 0 ? (
      <Shimmer />
   ) : (


      <div className="">
         <Carousel className="w-3/4 h-3/4 object-cover  mx-auto left-0 right-0">
            {listOfArts.map((items) => (<img src={items.bannerImageUrl} alt={"image " + items.id} className="w-full h-full pb-5 pl-5 pr-5 pt-5"
               onClick={handleClick} />))}

         </Carousel>
         <div>
            <div className="">
               <input type="text" className="" />
            </div>


            <div>
               <ArtsByPrice />


            </div>

         </div>


      </div>



   )
}

export default Body;


