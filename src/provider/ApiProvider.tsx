import { useState, useEffect, createContext, ReactNode, useContext, useCallback } from 'react';
import { extraerDatos, extraerPorId } from '../services/Servicio';
import { Zapato } from '../interfaces/Interfaz';

export const ApiContext = createContext<any>(null);


export const ApiProvider = ({ children }: { children: ReactNode }) => {
    const [apiData, setApiData] = useState<Zapato|null>(null);
    useEffect(() => {
        const traerData = async () => {
            try {
                const response = await extraerDatos();
                setApiData(response);
            } catch (err) {
                console.log(err);
            }
        };
        traerData();
    }, []);

    const obtenerZapatoPorId = useCallback(async (id: string): Promise<Zapato | undefined> => {
        try {
            const data = await extraerPorId(id);
            return data;
        } catch (error) {
            console.error(`Error al obtener zapato con ID ${id}:`, error);
            return undefined;
        }
    }, []);
    
    return (
        <ApiContext.Provider value={{ apiData, obtenerZapatoPorId }}>
            {children}
        </ApiContext.Provider>
    );
};


export const useApiData = () => {
    const context = useContext(ApiContext);
    if (!context) {
        throw new Error('useApiData debe ser usado dentro de un ApiProvider');
    }
    return context;
};
