interface CuentasProps {
    subtotal: string;
    shipping: number;
    tax: number;
    totalDiscount: string;
    total: string;
}

function Cuentas({subtotal, shipping, tax, totalDiscount, total}: CuentasProps ){
    return(
        <>
            <div className="gap-0.5">
                <h2 className="text-[30px] font-bold text-[#201B21] mb-4 ">Summary</h2>
                <div className="flex justify-between mb-2">
                    <span className="font-semibold ">Subtotal</span>
                    <span className="font-semibold ">${subtotal}</span>
                </div>
                
                <div className="flex justify-between mb-2">
                    <span className="font-semibold ">Shipping and delivery</span>
                    <span className="font-semibold ">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span className="font-semibold ">Tax</span>
                    <span className="font-semibold ">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2 ">
                    <span className="font-semibold ">Discount</span>
                    <span className="text-[#EC5E2A] ">-${totalDiscount}</span>
                </div>
                <div className="border-t border-gray-300 pt-4 mt-4 flex justify-between font-semibold text-lg">
                    <span className="font-semibold pt-[10px] ">Total</span>
                    <span className="font-semibold pt-[10px] ">${total}</span>
                </div>
                <button className="bg-black text-white px-6 py-3 rounded-md mt-6 w-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50">
                    Checkout →
                </button>
            </div>
        </>
    )
}
export default Cuentas;