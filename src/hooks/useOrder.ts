import { useState } from "react"
import type { MenuItem, OrderItem } from "../types";

export default function useOrder () {
    
    const[order, setOrder] = useState<OrderItem[]> ([]); //aplicando generic types, permite definir el tipo de dato que va a recibir el hook
    const [tip, setTip] = useState (0); //useState para propinas


    

    //funcion para guardar orden
    const placeOrder = () => {
        setOrder([]);
        setTip(0);
    }

    /**
     * exportando order a app.tsx y addItem
     */
    return {
        order,
        tip,
        setTip,
        placeOrder
    }
}