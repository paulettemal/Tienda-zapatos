interface BotonShopProps{
    text:string,
    img: string
}

function BotonShop({text, img}: BotonShopProps){
    return(
        <>
            <div className="px-[8vw] m-5 bg-black border py-[2vh] flex flex-row rounded-[8px] ">
                <button className="text-white text-xl" >{text}</button>
                <img src={img} className=""></img>
            </div>
        </>
    )
}
export default BotonShop;