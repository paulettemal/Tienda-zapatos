import { useCarrito } from '../provider/CarritoContext';
import CarritoItemCard from '../components/CarritoItemCard';
import Cuentas from '../components/Cuentas';

function Carrito() {
    const { carritoItems } = useCarrito();
    const FIXED_TAX = 6.00;

    const calculateSubtotal = () => {
        return carritoItems.reduce(
        (total, item) => total + parseFloat(item.zapato.precio) * item.cantidadSeleccionada, 0).toFixed(2);
    };

    const calculateTotalDiscount = () => {
        return carritoItems.reduce(
        (totalDiscount, item) => {
            const discountAmount = parseFloat(item.zapato.precio) * Number(item.zapato.descuento) * item.cantidadSeleccionada;
            return totalDiscount + discountAmount; 
        }, 0).toFixed(2);
    };

    const subtotal = calculateSubtotal();
    const totalDiscount = calculateTotalDiscount();
    const shipping = 20.00;
    const tax = FIXED_TAX;
    const total = (parseFloat(subtotal) - parseFloat(totalDiscount) + shipping + tax).toFixed(2);

    return (
        <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
            <div className=" lg:w-2/3">
                <h3 className="text-[#201B21] font-bold text-xl md:text-3xl pb-[3vh] ">Your Bag</h3>
                {carritoItems.length === 0 ? (
                <p>Tu carrito está vacío.</p>) : (
                <ul>
                    {carritoItems.map((item) => ( 
                        <CarritoItemCard key={item.zapato.id} item={item} 
                    />))}
                </ul>
                )}
            </div>
            <div className=" lg:w-1/3 bg-white shadows-sm rounded-md p-6 shadow-md sticky top-20">
                <Cuentas subtotal={subtotal} shipping={shipping} tax={tax} totalDiscount={totalDiscount} total={total} />
            </div>
        </div>
    );
}

export default Carrito;

