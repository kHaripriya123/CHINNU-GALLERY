import ArtCard from "./ArtCard";
import artData from "../Utilities/mockdata";
import { useState } from "react";


const Body = () => {
   
            
    const [cards, setCards] = useState([ArtCard]);
    const [sortOrder, setSortOrder] = useState('asc');
    const handleSortClick = () => {
        console.log(cards);
        const sortedCards = [...cards].sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.artPrice - b.artPrice;
            }
            else {
                return b.artPrice - a.artPrice;
            }
        });
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        setCards(sortedCards);
    };
    return (
        <div>

        <div>

            <input className="border border-solid border-black" type="text" />
            <button className="m-2 bg-[#f0ba0e] rounded-sm px-1"> Search </button>
           </div>
           <div>
            <button
                onClick={handleSortClick()}
                className="m-2 p-2 rounded-sm bg-blue-400"

            > Price

            </button>
           
            <ul>
                {cards.map((card) => (
                    <li key={card.artDate}>
                        {card.artTitle} - {card.artPrice}
                    </li>
                ))}
            </ul>
            </div>

           <div className="flex flex-wrap">

            {artData.map((card) => <ArtCard key={card.artDate} artData={card} />)}
            </div>

            </div>
    );

};
export default Body;