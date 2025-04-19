import { MenuItem, OrderItem } from "../types";


export type OrderActions = 
{type: 'add-item', payload: {item: MenuItem}} |
{type: 'remove-item', payload: {id: MenuItem['id']}} |
{type: 'place-order'} |
{type: 'add-tip', payload: {value: number}}



export type OrderState = {
    order: OrderItem[],
    tip: number
}

export const initialState: OrderState = {
    order: [],
    tip: 0
}


export const orderReducer = (state: OrderState = initialState, action: OrderActions) => {

    if(action.type === 'add-item'){
         //constante que se utilizara para evaluar si el elemento se repite mas de una vez por medio del id del useState comparado con el id del item de la funcion que encapsula esta const
        const itemExist = state.order.find(orderItem => orderItem.id === action.payload.item.id); 
        let order: OrderItem[] = [];

        if (itemExist ){
             //orderitem de esta funcion es estatica (pertenece solo a este condicional) por lo cual, no es la misma del orderitem que esta globalizado en la funcion de arriba
             //este codigo identifica el id y cual es el elemento repetido, por eso se compara por medio de id 
             //luego se aplica operador ternario, si los id's coinciden y se duplica, se suma +1 a orderItem y si no, se retorna nuevamente el orderItem
            order = state.order.map(orderItem => orderItem.id === action.payload.item.id ? 
            {...orderItem, quantity: orderItem.quantity +1 } : orderItem);

        }else {
            const newItem: OrderItem = {...action.payload.item, quantity:1}
                order = [...state.order, newItem]
        }
        return {
            ...state,
            order
        }
    }
    //creando funcion para eliminar items, se toma el id del arreglo de MenuItem.
    //.filter() devolvera todos los elementos diferentes al id que se esta pasando como parametro, basicamente, elimina el id seleccionado y retorna los demas diferentes a este
    if(action.type === 'remove-item'){
        const order = state.order.filter(item => item.id !== action.payload.id);
        return {
            ...state,
            order
        }
    }

    if(action.type === 'place-order'){

        return {
            ...state,
            order :([]),
            tip : 0
        }
    }
    
    if(action.type === 'add-tip'){
        const tip = action.payload.value
        return {
            ...state,
            tip
        }
    }

    return state
}