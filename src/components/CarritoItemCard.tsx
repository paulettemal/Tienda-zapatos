import { useCarrito } from '../provider/CarritoContext';
import { CarritoItem } from '../pages/DetalleZapato';

interface CarritoItemCardProps {
    item: CarritoItem;
}

function CarritoItemCard({ item }: CarritoItemCardProps) {
    const { incrementItem, decrementItem, removeItem } = useCarrito();

    return (
        <li key={item.zapato.id} className="flex items-center py-4 border-b">
        <div className="mr-4 rounded overflow-hidden shadow-md">
            <img src={`/${item.zapato.imagen}`} alt={item.zapato.nombre} className="w-[166px] h-[166px] object-cover " />
        </div>
        <div className="flex-grow pt-1 ">
            <h3 className="font-semibold ">{item.zapato.nombre}</h3>
            <p className="text-gray-600 ">${item.zapato.precio}</p>
            <div className="flex items-center mt-[9vh] ">
                <button onClick={() => decrementItem(item.zapato.id)} className="bg-white text-gray-500 hover:text-gray-700 focus:outline-none rounded-l-md border border-gray-300 px-3 py-2 text-sm font-bold">
                    -
                </button>
                <span className=" text-gray-700 border-t border-b border-gray-300 px-4 py-2 text-sm font-medium">
                    {item.cantidadSeleccionada}
                </span>
                <button onClick={() => incrementItem(item.zapato.id)} className="bg-white font-bold text-gray-500 hover:text-gray-700 focus:outline-none  rounded-r-md border border-gray-300 px-3 py-2 text-sm " >
                    +
                </button>
                <button onClick={() => removeItem(item.zapato.id)} className="ml-4 text-gray-500 underline focus:outline-none text-sm font-medium">
                    Remove
                </button>
            </div>
        </div>
        <div className="ml-4 font-semibold -mt-[16vh] ">${(parseFloat(item.zapato.precio) * item.cantidadSeleccionada).toFixed(2)}</div>
        </li>
    );
}

export default CarritoItemCard;
