import { useState } from "react"
import type { MenuItem, OrderItem } from "../types";

export default function useOrder () {
    
    const[order, setOrder] = useState<OrderItem[]> ([]); //aplicando generic types, permite definir el tipo de dato que va a recibir el hook
    const [tip, setTip] = useState (0); //useState para propinas


    const addItem = (item: MenuItem) => {
        //constante que se utilizara para evaluar si el elemento se repite mas de una vez por medio del id del useState comparado con el id del item de la funcion que encapsula esta const
        const itemExist = order.find(orderItem => orderItem.id === item.id); 


        if (itemExist ){
            //orderitem de esta funcion es estatica (pertenece solo a este condicional) por lo cual, no es la misma del orderitem que esta globalizado en la funcion de arriba
            //este codigo identifica el id y cual es el elemento repetido, por eso se compara por medio de id 
            //luego se aplica operador ternario, si los id's coinciden y se duplica, se suma +1 a orderItem y si no, se retorna nuevamente el orderItem
            const updatedOrder = order.map(orderItem => orderItem.id === item.id ? 
            {...orderItem, quantity: orderItem.quantity +1 } : orderItem);

                setOrder(updatedOrder);

        }else {
            const newItem = {...item, quantity:1}
            //setorder toma una copia de order (este es un arreglo)
            setOrder([...order, newItem]);
        }
    } 

    //creando funcion para eliminar items, se toma el id del arreglo de MenuItem.
    //.filter() devolvera todos los elementos diferentes al id que se esta pasando como parametro, basicamente, elimina el id seleccionado y retorna los demas diferentes a este
    const removeItem = (id: MenuItem['id']) => {
        setOrder(order.filter(item => item.id !== id));
    }   

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
        addItem,
        removeItem,
        placeOrder
    }
}