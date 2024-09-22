


const ArtCard = ({ galleryData }) => {


    if (!galleryData) return null;
    //console.log(galleryData);



    return (
        <div>


            <div className="">

                <div className="pl-5 w-80 mx-10 h-64 bg-white border border-black rounded-lg text-indigo-700 font-extrabold z-10"
                >


                    <img src={galleryData?.bannerImageUrl} className="pl-1 pr-1 pt-1 pb-1" />

                    <h1 className="pl-2">{galleryData?.name}</h1>



                </div>

            </div>
        </div>

    )
}

export default ArtCard;