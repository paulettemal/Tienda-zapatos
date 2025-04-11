import BannerInicial from "../components/BannerInicial"
import { ListaZapatos } from "../components/ListaZapatos";

function Inicio(){
    return (
        <>
            <div className="bg-gray-50  px-[12vw] pt-[2vh] ">
                <BannerInicial porcentaje={25} imagen={"zapatoPortada.svg"} />
            </div>
        
            <div className="bg-gray-50  px-[12vw] pt-[7vh] ">
                <h3 className="text-[#201B21] font-bold text-xl md:text-3xl  ">
                Explore our latest drops
                </h3>
            </div>
            <div className="bg-gray-50">
                <ListaZapatos></ListaZapatos>
            </div>
            
        </>
    );
}
export default Inicio