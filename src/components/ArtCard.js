import artData from "../Utilities/mockdata";
const ArtCard = (props) => {
    
    const {artTitle,artImage,artPrice} = props?.artData
    return(
      
        <div className="grid-rows-6 w-36 border border-gray-950 m-2 p-2">
            <img className="rounded-full w-36 pl-4 pr-4" src={artImage}/>
            <h1>{artTitle}</h1>
            <h1>{artPrice/100}</h1>
        </div>
        
    )
}
export default ArtCard;