import { useApiData } from "../provider/ApiProvider";
import { Zapato } from "../interfaces/Interfaz";
import TarjetaZapatos from "./TarjetaZapatos";

export function ListaZapatos() {
    const { apiData } = useApiData();
    return (
        <div className="pt-5 gap-5 pl-[10vw] ml-[2vw]">
        {apiData && Array.isArray(apiData) && (
            <div className="flex lg:flex-row wrap max-sm:ml-[10vw] sm:flex-wrap max-sm:flex-wrap md:flex-wrap ">
            {apiData.slice(0,4).map((zapato: Zapato) => (
                <TarjetaZapatos key={zapato.id} id={String(zapato.id)} nombre={zapato.nombre} imagen={zapato.imagen} descripcion={zapato.descripcion} precio={zapato.precio}  ></TarjetaZapatos> 
            ))}
            </div>
        )}
        {!apiData && <p>Cargando datos...</p>}
        {apiData && !Array.isArray(apiData) && <p>Los datos recibidos no son un array.</p>}
        </div>
    );
}