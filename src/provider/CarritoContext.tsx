import React, { createContext, useState } from 'react';
import { CarritoItem } from '../pages/DetalleZapato';

interface CarritoContextType {
    carritoItems: CarritoItem[];
    agregarAlCarrito: (item: CarritoItem) => void;
    incrementItem: (id: number) => void;
    decrementItem: (id: number) => void;
    removeItem: (id: number) => void;
}

export const CarritoContext = createContext<CarritoContextType | null>(null);

export const CarritoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [carritoItems, setCarritoItems] = useState<CarritoItem[]>([]);
    const agregarAlCarrito = (item: CarritoItem) => {
        setCarritoItems(prevItems => {
            const existingItemIndex = prevItems.findIndex(
                (prevItem) => prevItem.zapato.id === item.zapato.id
            );
            if (existingItemIndex !== -1) {
                const updatedItems = prevItems.map((prevItem) =>
                    prevItem.zapato.id === item.zapato.id ? { ...prevItem, cantidadSeleccionada: prevItem.cantidadSeleccionada + item.cantidadSeleccionada }: prevItem);
                return updatedItems;
            } else {
                return [...prevItems, item];
            }
        });
    };

    const incrementItem = (id: number) => {
        setCarritoItems(currentItems =>
            currentItems.map(item => item.zapato.id === id ? { ...item, cantidadSeleccionada: item.cantidadSeleccionada + 1 } : item )
        );
    };

    const decrementItem = (id: number) => {
        setCarritoItems(currentItems =>
            currentItems.map(item =>
                item.zapato.id === id && item.cantidadSeleccionada > 1 ? { ...item, cantidadSeleccionada: item.cantidadSeleccionada - 1 } : item).filter(item => item.cantidadSeleccionada > 0)
        );
    };

    const removeItem = (id: number) => {
        setCarritoItems(currentItems => currentItems.filter(item => item.zapato.id !== id));
    };

    return (
        <CarritoContext.Provider value={{ carritoItems, agregarAlCarrito, incrementItem, decrementItem, removeItem }}>
            {children}
        </CarritoContext.Provider>
    );
};

export const useCarrito = () => {
    const context = React.useContext(CarritoContext);
    if (!context) {
        throw new Error('Error');
    }
    return context;
};