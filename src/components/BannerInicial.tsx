interface BannerInicialProps {
    porcentaje: number;
    imagen: string;
}

interface BannerInicialProps {
    porcentaje: number;
    imagen: string;
}

function BannerInicial({ porcentaje, imagen }: BannerInicialProps) {
    return (
        <div className="flex flex-col lg:h-[25vw]  md:flex-row items-center justify-between bg-[#EAEEEF] p-6 md:p-8 rounded-[40px] gap-6 md:gap-8">
            <div className="order-2 md:order-1 w-full md:w-1/2 lg:mx-[2vw] flex flex-col items-center md:items-start text-center md:text-left">
                <h2 className="text-4xl md:text-5xl text-[#EC5E2A] font-semibold">
                    {porcentaje}% OFF
                </h2>
                <h1 className="text-4xl md:text-6xl font-semibold mt-2 md:mt-4">
                    Summer Sale
                </h1>
                <h5 className="text-lg md:text-xl text-gray-600 mt-2 md:mt-4">
                    Discover our summer styles with discount
                </h5>
                <div className="mt-4 md:mt-6 w-full md:w-auto">
                <button className="w-full bg-black text-white px-16 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors mb-8">Shop now ➝</button>
                </div>
            </div>
            <div  className="order-1 lg:mx-[5vw] md:order-2 w-full md:w-1/2 flex justify-center">
                <img src={imagen} className="w-full max-w-md md:max-w-none h-auto md:h-[350px] lg:h-[600px] object-contain" alt="Summer Sale"/>
            </div>
        </div>
    );
}

export default BannerInicial;