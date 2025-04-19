import FormatCurrency from "../helpers";
import { OrderActions } from "../reducers/order-reducer";
import { OrderItem } from "../types";
import { ActionDispatch } from "react";


type OrderContentsProps = {
    order: OrderItem[],
    dispatch: ActionDispatch<[OrderActions]>
}

export default function OrderContents({order, dispatch} : OrderContentsProps ){
    return (
    <div>
        <h2 className='font-balck text-4xl text-center'>Consumo</h2>

        <div className="space-y-3 mt-10">
            {/*Itertando sobre la orden y creando un ternario con un condicional*/}
            {order.length === 0 
            ? 
                /*si la orden esta vacia retorna el mensaje la orden esta vacia*/
                <p className="text-center">La orden esta vacia</p>
                /*si la orden no esta vacia se hace un map a orden y se muestra en pantalla el elemento sobre el cual se da click*/
            :   (order.map (item=> 
                <div 
                key={item.id}
                className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b ">
                    <div>
                        <p className="text-lg">
                            {/*se importa el formato de currency definido en helpers.ts */}
                            {item.name} - {FormatCurrency(item.price)}
                        </p>
                        {/*añadiendo la cantidad y multiplicando el subtotal*/}
                        <p className="font-black">
                            {item.quantity} - {FormatCurrency(item.price * item.quantity)}
                        </p>
                    </div> 
                        {/*añadiendo boton para eliminar item*/}
                        <button className="bg-red-600 h-8 w-8 rounded-full text-white font-black cursor-pointer" onClick={() => dispatch ({type: 'remove-item', payload: {id: item.id}})}>X</button>
                </div>
            ))
            }
        </div>
    </div>
  )
}
