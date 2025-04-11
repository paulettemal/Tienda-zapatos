import { useNavigate } from 'react-router-dom';
import { useCarrito } from '../provider/CarritoContext';

interface BotonCarritoProps {
    text: string;
    img: string;
}

function BotonCarrito({ text, img }: BotonCarritoProps) {
    const navigate = useNavigate();
    const { carritoItems } = useCarrito();
    const totalItems = carritoItems.reduce((total, item) => total + item.cantidadSeleccionada, 0);
    const handleClick = () => {
        navigate('/carrito');
    };

    return (
        <div className="flex items-center pr-[10vw]" onClick={handleClick} style={{ cursor: 'pointer' }}>
            <div className="px-8 py-2 border flex flex-row rounded-[8px] hover:bg-gray-50 transition-colors relative">
                <img src={img} alt="Carrito" className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">{text}</span>
                {totalItems > 0 && (
                <span className="absolute top-[-8px] right-[-8px] bg-red-500 text-white rounded-full text-xs px-2 py-0.5">
                    {totalItems}
                </span>
                )}
            </div>
        </div>
    );
}

export default BotonCarrito;