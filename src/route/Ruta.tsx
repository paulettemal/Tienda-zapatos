import { Route, Routes } from "react-router-dom";
import App from "../App";
import Inicio from "../pages/Inicio";
import { ApiProvider } from "../provider/ApiProvider";
import DetalleZapato from "../pages/DetalleZapato";
import Carrito from "../pages/Carrito";
import { CarritoProvider } from "../provider/CarritoContext";

function Ruta() {
    return (
        <ApiProvider>
            <CarritoProvider>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<Inicio />} />
                        <Route path="/inicio" element={<Inicio />} />
                        <Route path="/zapato/:id" element={<DetalleZapato />} />
                        <Route path="/carrito" element={<Carrito />} />
                    </Route>
                </Routes>
            </CarritoProvider>
        </ApiProvider>
    );
}

export default Ruta;