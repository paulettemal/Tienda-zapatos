import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Zapato } from '../interfaces/Interfaz';
import { useApiData } from '../provider/ApiProvider';
import Carousel from '../components/Carousel';
import { useCarrito } from '../provider/CarritoContext';
export interface CarritoItem {
    zapato: Zapato;
    cantidadSeleccionada: number;
}

export default function DetalleZapato() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [zapato, setZapato] = useState<Zapato | null>(null);
    const [cantidad, setCantidad] = useState(1);
    const { obtenerZapatoPorId } = useApiData();
    const { agregarAlCarrito } = useCarrito();

    useEffect(() => {
        const cargarZapato = async () => {
            try {
                if (id) {
                    const data = await obtenerZapatoPorId(id);
                    setZapato(data);
                }
            } catch (err) {
                console.error(err);
            }
        };
        cargarZapato();
    }, [id, obtenerZapatoPorId]);

    if (!zapato) {
        return <div className="p-8 text-center">Zapato no encontrado</div>;
    }

    const imagenesCarousel = zapato.arregloImgs.map((imgUrl, index) => ({
        url: `/${imgUrl}`,
        id: index,
    }));

    const aumentarCantidad = () => {
        if (zapato && cantidad < zapato.cantidad) {
            setCantidad(prev => prev + 1);
        }
    };

    const disminuirCantidad = () => {
        setCantidad(prev => (prev > 1 ? prev - 1 : 1));
    };

    const handleAgregarAlCarrito = async () => {
        if (!zapato) {
            return;
        }
        if (cantidad > zapato.cantidad) {
            alert(`La cantidad seleccionada (${cantidad}) excede el stock disponible (${zapato.cantidad}).`);
            return;
        }
        const nuevoItem: CarritoItem = {
            zapato: zapato,
            cantidadSeleccionada: cantidad,
        };
        agregarAlCarrito(nuevoItem);
        navigate('/carrito');
    };


    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex flex-col gap-8">
                    {zapato.arregloImgs && zapato.arregloImgs.length > 0 && (
                        <div className="lg:-mt-[5vh]">
                            <Carousel items={imagenesCarousel} zapato={zapato} />
                        </div>
                    )}
                    <div className="lg:-mt-[60px] lg:pl-[2vw] lg:w-[36vw] order-3 lg:order-none">
                        <h3 className="text-xl font-semibold mb-4 border-b-[#201CC1] pb-2">Description</h3>
                        <p className="text-gray-700 mb-4">{zapato.descipcionGrande}</p>
                        <ul className="list-disc list-inside text-gray-700">
                            {zapato.detalles && zapato.detalles.map((detalle, index) => (
                                <li key={index}>{detalle}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col gap-8 lg:pl-6 lg:w-[40vw]">
                    <div className="p-4 order-2 lg:order-none">
                        <h2 className="text-3xl font-bold mb-1">{zapato.nombre}</h2>
                        <h3 className='mb-3 font-light text-[#67696E]'>{zapato.descripcion}</h3>
                        <p className="text-2xl font-semibold text-gray-800 mb-6 pt-2">${zapato.precio}</p>
                        <p className="pt-3 text-gray-800 mb-6 border-b w-full lg:w-[30vw] border-b-neutral-400"></p>

                        <div className="mb-8">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                            <div className="flex items-center border border-gray-300 rounded w-fit">
                                <button onClick={disminuirCantidad} className="px-4 py-2 text-xl hover:bg-gray-100">-</button>
                                <span className="px-4 py-2 border-x border-gray-300">{cantidad}</span>
                                <button onClick={aumentarCantidad} className="px-4 py-2 text-xl hover:bg-gray-100">+</button>
                            </div>
                        </div>
                        
                        <button onClick={handleAgregarAlCarrito} className="w-full bg-black text-white px-16 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors mb-8" >
                            Add to Cart
                        </button>
                    </div>
                    {zapato.imagenInferior && (
                        <div className="order-4 lg:order-none">
                            {zapato.imagenInferior.map((zap, index) => (
                                <img key={index} src={`/${zap}`} className='mx-auto lg:ml-4 h-auto max-h-[35vh] w-full lg:w-[30vw] object-contain' alt={`${zapato.nombre} detail ${index}`}
                                /> 
                        ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}