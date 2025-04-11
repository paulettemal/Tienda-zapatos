import { useNavigate } from 'react-router-dom';

interface TarjetaZapatosProps {
    id: string;
    imagen: string;
    nombre: string;
    precio: string;
    descripcion: string;
}

function TarjetaZapatos({ id, imagen, nombre, precio, descripcion }: TarjetaZapatosProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/zapato/${id}`);
    };

    return (
        <div className="bg-gray-50  pt-[2vh] pb-10 w-73 rounded-lg overflow-hidden cursor-pointer pr-6 mb-5" onClick={handleClick}>
            <img className="w-65 h-75 rounded-[18px] " src={imagen} alt={nombre} />
            <div className="pt-2">
                <h2 className="text-xl font-semibold text-gray-800">{nombre}</h2>
                <h3 className="text-gray-600 text-sm">{descripcion}</h3>
                <p className="text-lg font-bold text-gray-900">${precio}</p>
            </div>
        </div>
    );
}

export default TarjetaZapatos;