import { useEffect } from "react";
import ArtCard from "./ArtCard";
import { useState } from "react";
import Header from "./Header";
import Shimmer from "./Shimmer";
import { Carousel } from "@material-tailwind/react";



const Body = () => {

   const [listOfArts, setListOfArts] = useState([]);

   useEffect(() => {

      fetchData();

   }, [])

   const fetchData = async () => {
      const data = await fetch("https://api.mojarto.com/public/landing/artistOfTheWeek/v2?size=6");
      const json = await data.json();
      console.log(json);
      setListOfArts(json?.content);


   }

   return listOfArts === 0 ? (
      <Shimmer />
   ) : (

      <>
         <div className="">
            <Carousel className="w-1/4 h-1/4 object-cover  mx-auto left-0 right-0">
               {listOfArts.map((items) => (<img src={items.imageUrl} alt={"image " + items.id} className="w-full h-full pb-5 pl-5 pr-5 pt-5" />))}

            </Carousel>
            <div>
               <div className="">
                  <input type="text" className="" />
               </div>

               <div className="mt-48 flex">

                  {listOfArts.map((items) => (<ArtCard key={items.id} galleryData={items} />))}


               </div>

            </div>
         </div>
      </>
   )
}

export default Body;


